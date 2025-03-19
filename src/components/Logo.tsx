import React from 'react';
import { Link } from './Link';

export function Logo() {
  return (
    <Link href="/" className="block">
      <img 
        src="/images/logo/logo-loop.gif"
        alt="MxD Digital"
        className="h-10 md:h-14"
      />
    </Link>
  );
}