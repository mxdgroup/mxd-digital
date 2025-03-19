import { AnchorHTMLAttributes } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

export function Link({ 
  children, 
  href = '/', 
  external = false,
  className = '',
  ...props 
}: LinkProps) {
  const externalProps = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  return (
    <a 
      href={href}
      className={`transition-colors hover:text-blue-600 ${className}`}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
}