import { Button } from './Button';
import { Container } from './ui/Container';

export function Growth() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Built for growing your business</h2>
            <p className="text-xl text-gray-600 mb-8">
              Accelerate your growth with expert marketing support—from strategy to execution.
            </p>
            <Button onClick={() => window.open('#contact', '_self')}>
              Get Started
            </Button>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://mxd.digital/wp-content/uploads/2022/10/MXD-marketing-growth.gif"
              alt="Marketing Growth Animation"
              className="max-w-md w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}