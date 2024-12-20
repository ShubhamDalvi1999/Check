import React from 'react';
import { Parallax } from 'react-scroll-parallax';

interface BackgroundImageProps {
  imageSrc: string;
  translateY: [number, number];
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ imageSrc, translateY }) => {
  return (
    <Parallax translateY={translateY} className="absolute inset-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('${imageSrc}')`,
          opacity: 0.15,
          filter: 'blur(1px)',
          transform: 'scale(1.1)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900 opacity-50" />
    </Parallax>
  );
};

export default BackgroundImage;

