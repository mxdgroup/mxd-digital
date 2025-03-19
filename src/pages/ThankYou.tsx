import { Container } from '../components/ui/Container';
import { Button } from '../components/Button';
import { CheckCircle } from 'lucide-react';

export function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Thank you for getting in touch!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We've received your message and will get back to you within 24 hours.
              In the meantime, why not explore more about how we can help grow your business?
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                variant="secondary"
                onClick={() => window.location.href = '/'}
              >
                Return Home
              </Button>
              <Button
                onClick={() => window.location.href = '/case-studies'}
              >
                View Case Studies
              </Button>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">What happens next?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 font-bold text-xl mb-2">1</div>
                <h3 className="font-semibold mb-2">Initial Review</h3>
                <p className="text-gray-600">Our team will review your information within 24 hours</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 font-bold text-xl mb-2">2</div>
                <h3 className="font-semibold mb-2">Discovery Call</h3>
                <p className="text-gray-600">We'll schedule a call to discuss your needs in detail</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 font-bold text-xl mb-2">3</div>
                <h3 className="font-semibold mb-2">Custom Proposal</h3>
                <p className="text-gray-600">You'll receive a tailored proposal based on your requirements</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}