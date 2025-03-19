import { Button } from './Button';
import { Container } from './ui/Container';

export function Hero() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Your <span className="text-blue-600">dedicated<br />marketing</span> team
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              MxD provides dedicated marketing and technology teams for startups and growing businesses.
            </p>
            <Button onClick={() => window.open('#contact', '_self')}>
              Let's Collaborate
            </Button>
          </div>
          <div className="relative hidden md:block">
            <img 
              src="https://mxd.digital/wp-content/uploads/2024/09/MxD-Marketing-and-Digital-Solutions-Header-Image.png"
              alt="MxD Marketing Solutions"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}