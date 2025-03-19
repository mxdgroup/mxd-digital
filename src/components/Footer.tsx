import { Button } from './Button';
import { Container } from './ui/Container';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <Container>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Want to say hi?</h3>
            <p className="mb-2">hello@mxd.digital</p>
            <p className="mb-2">+44 20 81574006</p>
            <ul className="mt-4">
              <li>- London</li>
              <li>- Dubai</li>
              <li>- Auckland</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our solutions</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="hover:text-blue-400">CMO Services</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Performance Marketing</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Inbound Marketing</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Conversion Optimisation</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Outbound Marketing</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Content Marketing</a></li>
            </ul>
          </div>
          <div>
            <Button 
              onClick={() => window.open('#contact', '_self')}
              className="w-full justify-center"
            >
              Let's collaborate
            </Button>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}