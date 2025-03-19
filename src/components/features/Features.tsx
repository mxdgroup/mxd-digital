import React from 'react';
import { features } from './featuresData';
import { FeatureCard } from './FeatureCard';
import { Container } from '../ui/Container';

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Why scaling businesses choose MxD
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          You don't just need a marketing person, you need a marketing team. MxD is your full-stack marketing team dedicated to your business.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}