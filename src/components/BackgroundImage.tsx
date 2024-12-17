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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${imageSrc}')`,
          opacity: 0.2
        }}
      ></div>
    </Parallax>
  );
};

export default BackgroundImage;

