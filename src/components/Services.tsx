import { 
  PieChart, 
  BarChart, 
  Target, 
  TrendingUp, 
  Users, 
  FileText 
} from 'lucide-react';

const services = [
  {
    icon: PieChart,
    title: "CMO Services",
    description: "Reach your growth objectives with strategic marketing support, forecasting, fundraising, and more.",
    link: "#contact"
  },
  {
    icon: BarChart,
    title: "Performance Marketing",
    description: "Maximise the return on investment (ROI) of your marketing spend with our performance marketing team.",
    link: "#contact"
  },
  {
    icon: Target,
    title: "Inbound Marketing",
    description: "Attract, engage, and delight potential customers with relevant and personalised content experiences.",
    link: "#contact"
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimisation",
    description: "Compound growth with conversion rate optimisation (CRO). Our 'OODA loop' continually analyses, tests and refines to improve business outcomes.",
    link: "#contact"
  },
  {
    icon: Users,
    title: "Outbound Marketing",
    description: "Drive brand awareness and increase your reach to help lead activation and closing pipeline sales.",
    link: "#contact"
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Establish trust and credibility with potential customers with a full-funnel content marketing strategy.",
    link: "#contact"
  }
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Let's build your business
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Get real results and ROI
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <service.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a 
                href={service.link}
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}