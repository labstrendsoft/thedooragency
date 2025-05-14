// ButtonLink.tsx
import React from 'react';
import Link from 'next/link'; // O 'react-router-dom' dependiendo de tu proyecto

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'filled' | 'outline'; // Con fondo o sin fondo
};

const ButtonLinkTheDoorAgency: React.FC<ButtonLinkProps> = ({
  href,
  children,
  className = '',
  variant = 'filled', // 'filled' tiene fondo, 'outline' no
}) => {
  // Estilos base
  const baseStyles =
    'inline-block  font-semibold text-center transition-all duration-300 px-8 py-2 rounded-full';

  // Estilos para el botón con fondo (filled) o sin fondo (outline)
  const variantStyles =
    variant === 'filled'
      ? 'bg-thedooragency-negro text-white hover:bg-blue-600'
      : 'border-2 border-white text-white hover:bg-blue-500 hover:text-white';

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </Link>
  );
};

export default ButtonLinkTheDoorAgency;
