import { createStorefrontApiClient } from "@shopify/storefront-api-client";

// Headless commerce layer.
//
// Wire up real data by setting these env vars (see .env.example):
//   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
//   SHOPIFY_STOREFRONT_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//
// Until then, every function below falls back to the local placeholder
// catalogue in `site-data.ts` so the site is fully browsable out of the box.

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_TOKEN;

export const shopifyEnabled = Boolean(domain && token);

export const client = shopifyEnabled
  ? createStorefrontApiClient({
      storeDomain: `https://${domain}`,
      apiVersion: "2025-01",
      publicAccessToken: token!,
    })
  : null;

export type ShopifyMoney = { amount: string; currencyCode: string };

export type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  featuredImage: { url: string; altText: string | null } | null;
  priceRange: { minVariantPrice: ShopifyMoney };
  variants: { id: string; title: string; availableForSale: boolean; price: ShopifyMoney }[];
  tags: string[];
};

const PRODUCTS_QUERY = /* GraphQL */ `
  query Products($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges {
        node {
          id
          handle
          title
          description
          tags
          featuredImage {
            url
            altText
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                availableForSale
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

const PRODUCT_BY_HANDLE_QUERY = /* GraphQL */ `
  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      description
      tags
      featuredImage {
        url
        altText
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            availableForSale
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

type RawShopifyNode = {
  id: string;
  handle: string;
  title: string;
  description: string;
  tags?: string[];
  featuredImage: ShopifyProduct["featuredImage"];
  priceRange: ShopifyProduct["priceRange"];
  variants?: { edges?: { node: ShopifyProduct["variants"][number] }[] };
};

function mapProduct(node: RawShopifyNode): ShopifyProduct {
  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    description: node.description,
    featuredImage: node.featuredImage,
    priceRange: node.priceRange,
    tags: node.tags ?? [],
    variants: (node.variants?.edges ?? []).map((e) => e.node),
  };
}

export async function getProducts(query?: string): Promise<ShopifyProduct[]> {
  if (!client) return [];
  const res = await client.request(PRODUCTS_QUERY, { variables: { first: 50, query } });
  const edges = (res.data?.products?.edges ?? []) as { node: RawShopifyNode }[];
  return edges.map((e) => mapProduct(e.node));
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  if (!client) return null;
  const res = await client.request(PRODUCT_BY_HANDLE_QUERY, { variables: { handle } });
  const product = res.data?.product as RawShopifyNode | null | undefined;
  return product ? mapProduct(product) : null;
}

const CART_CREATE_MUTATION = /* GraphQL */ `
  mutation CartCreate($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        message
      }
    }
  }
`;

export async function createCheckout(lines: { merchandiseId: string; quantity: number }[]) {
  if (!client) return null;
  const res = await client.request(CART_CREATE_MUTATION, { variables: { lines } });
  return res.data?.cartCreate?.cart ?? null;
}
