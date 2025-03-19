import { Link } from './Link';

export function Logo() {
  return (
    <Link href="/" className="block">
      <img 
        src="https://mxd.digital/wp-content/uploads/2022/08/MXD-Logo-Loop.gif"
        alt="MxD Digital"
        className="h-10 md:h-14"
      />
    </Link>
  );
}