import { ServiceCard } from './ServiceCard';
import { services } from './servicesData';
import { Container } from '../ui/Container';

export function Services() {
  const handleServiceClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-4">
          Let's build your business
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Get real results and ROI
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              ctaText={service.ctaText}
              onClick={handleServiceClick}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}