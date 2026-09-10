import { Container } from "@/components/container";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <section className="grain flex min-h-[70vh] items-center bg-cream">
      <Container className="text-center">
        <p className="font-display text-6xl text-rust">404</p>
        <p className="mt-4 text-xl">This cup ran out.</p>
        <Button href="/" className="mt-8">
          Back home
        </Button>
      </Container>
    </section>
  );
}
