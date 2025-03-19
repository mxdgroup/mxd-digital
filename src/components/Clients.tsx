import { clients } from '../data/clients';

export function Clients() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">You're in good company</h2>
          <p className="text-xl text-gray-600">
            Trusted by growing companies across the globe
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center aspect-square"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="w-full h-full object-contain p-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}