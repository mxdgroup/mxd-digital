import React, { useState } from 'react';

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export function FeatureCard({ imageSrc, title, description }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`text-center bg-white rounded-lg shadow-sm p-8 transition-all duration-300 transform ${
        isHovered ? 'translate-y-[-8px] shadow-md' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={imageSrc} 
        alt={title}
        className="w-full h-auto mx-auto mb-4 object-contain"
      />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}