import React from 'react';
import { ClientLogos } from './ClientLogos';
import { Container } from '../ui/Container';

export function Clients() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">You're in good company</h2>
          <p className="text-xl text-gray-600">
            Trusted by growing companies across the globe
          </p>
        </div>
        <ClientLogos />
      </Container>
    </section>
  );
}