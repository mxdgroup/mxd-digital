import { Button } from './Button';
import { Container } from './ui/Container';
import { useState } from 'react';

export function Contact() {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Chat with MxD today
            </h2>
            <p className="text-gray-600 mb-8">
              Our experts can help you find the right marketing solutions.
            </p>
            <form 
              name="contact" 
              data-netlify="true"
              onSubmit={handleSubmit} 
              className="flex flex-col md:flex-row gap-4"
            >
              <input
                name="email"
                type="email"
                placeholder="Work email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Button type="submit" className="w-full md:w-auto">
                Let's chat
              </Button>
            </form>
          </div>
        </div>

        {showThankYou && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            Thank you for getting in touch! We'll get back to you soon.
          </div>
        )}
      </Container>
    </section>
  );
}