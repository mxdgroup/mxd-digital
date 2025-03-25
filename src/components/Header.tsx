import { useState } from 'react';
import { Button } from './Button';
import { Logo } from './Logo';
import { Container } from './ui/Container';

export function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
    setIsPopupOpen(false);
    setTimeout(() => setShowThankYou(false), 5000);
  };

  return (
    <>
      <header className="bg-white py-3 md:py-4 fixed w-full top-0 z-50 shadow-sm">
        <Container className="flex justify-between items-center">
          <div className="flex-shrink-0 -ml-2 md:ml-0">
            <Logo />
          </div>
          <div className="flex-shrink-0 ml-2">
            <Button
              onClick={() => setIsPopupOpen(true)}
              className="text-sm md:text-base px-4 md:px-6 py-1.5 md:py-2"
            >
              Let's Chat
            </Button>
          </div>
        </Container>
      </header>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">Let's chat</h2>
                <p className="text-gray-600 mb-6">Our team can help you find the right marketing solutions. Please fill in a bit of information and we'll be in touch.</p>
              </div>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <form
              name="contact-popup"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact-popup" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Tim"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Apple"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company name</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Work email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Work phone"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of employees</label>
                <select
                  name="employees"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select number of employees</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="501+">501+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                <select
                  name="industry"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select your industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Button type="submit" className="w-full">
                Let's build...
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Thank you message */}
      {showThankYou && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Thank you for getting in touch! We'll get back to you soon.
        </div>
      )}

      {/* Spacer div to prevent content from hiding under fixed header */}
      <div className="h-[64px] md:h-[72px]" />
    </>
  );
}
