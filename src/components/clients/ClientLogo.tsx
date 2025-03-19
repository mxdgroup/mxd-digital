interface ClientLogoProps {
  name: string;
  logo: string;
}

export function ClientLogo({ name, logo }: ClientLogoProps) {
  return (
    <div className="flex items-center justify-center mx-8">
      <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center w-[300px] h-[200px]">
        <img 
          src={logo} 
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}