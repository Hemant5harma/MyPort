import React, { PropsWithChildren, CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';
import grainImage from '../../public/images/grain.jpg'; // Import the image

interface CardProps {
  className?: string;
  style?: CSSProperties;
}

const Card: React.FC<PropsWithChildren<CardProps>> = ({ children, className, style }) => {
  return (
    <div
      style={style}
      className={twMerge(
        'bg-gray-800 rounded-3xl relative z-0 overflow-hidden',
        className
      )}
    >
      {/* Background texture: Radial Grid */}
      <div className="absolute inset-0 -z-20 opacity-5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Grainy texture using inline style */}
      <div
        className="absolute inset-0 -z-10 opacity-10 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url(${grainImage.src})`,
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Children */}
      {children}
    </div>
  );
};

export default Card;