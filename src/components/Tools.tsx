import { tools } from '../data/tools';
import { Container } from './ui/Container';

export function Tools() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-4">
          We use the best marketing tools in the business
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          We're fluent in your marketing tech stack and seamlessly integrate with the tools you use.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 md:p-8 bg-gray-50 rounded-lg aspect-square"
            >
              <img 
                src={tool.logo} 
                alt={tool.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}