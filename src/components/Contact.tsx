import { Button } from './Button';
import { Container } from './ui/Container';
import { useState, useRef } from 'react';
import { sendContactFormEmail } from '../utils/email';

export function Contact() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailRef.current?.value) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Send email using the utility function
      await sendContactFormEmail(emailRef.current.value);
      
      // Show thank you message and reset form
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 5000);
      
      // Reset form
      if (emailRef.current) {
        emailRef.current.value = '';
      }
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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
                ref={emailRef}
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Let\'s chat'}
              </Button>
            </form>
            
            {error && (
              <div className="mt-4 text-red-500">
                {error}
              </div>
            )}
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
