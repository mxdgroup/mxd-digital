import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  ctaText: string;
  icon: LucideIcon;
  onClick: () => void;
}

export function ServiceCard({ title, description, ctaText, icon: Icon, onClick }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-300 transform ${
        isHovered ? 'translate-y-[-8px] shadow-md' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className="w-10 h-10 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button 
        onClick={onClick}
        className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
      >
        {ctaText} →
      </button>
    </div>
  );
}