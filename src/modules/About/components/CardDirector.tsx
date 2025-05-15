import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SocialItem } from '../types/director';

interface CardDirectorProps {
  title: string;
  subtitle: string;
  photo: StaticImageData;
  socials: SocialItem[];
}

export const CardDirector: React.FC<CardDirectorProps> = ({ title, subtitle, photo, socials }) => {
  return (
    <div className="flex flex-col items-start space-y-4 text-start">
      <Image
        src={photo}
        alt={title}
        placeholder="blur"
        className="mb-5.5 overflow-hidden rounded-[10px] object-cover shadow-lg"
      />
      <div className="space-y-0.5">
        <span className="block text-sm font-bold text-white lg:text-lg">{title}</span>
        <span className="block text-sm text-gray-100">{subtitle}</span>
      </div>
      <div className="flex items-center gap-2">
        {socials.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image
              src={item.icon}
              alt={item.name}
              className="h-[20px] w-[20px] object-contain transition-opacity hover:opacity-80"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
