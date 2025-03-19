import React, { useEffect, useRef } from 'react';
import { clients } from '../../data/clients';
import { ClientLogo } from './ClientLogo';

export function ClientLogos() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const primaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current || !primaryRef.current) return;
    
    const scrollerContent = Array.from(primaryRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem);
      }
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-50 py-10" 
         style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
      <div 
        ref={scrollerRef}
        className="flex animate-scroll w-max"
      >
        <div ref={primaryRef} className="flex">
          {clients.map((client, index) => (
            <ClientLogo key={index} {...client} />
          ))}
        </div>
      </div>
    </div>
  );
}