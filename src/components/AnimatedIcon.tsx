import React from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedIconProps {
  icon: React.ReactNode;
  name: string;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ icon, name }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-48 h-48 mb-6 p-3 hover:scale-110 transition-transform">
        <div className="w-full h-full rounded-lg overflow-hidden">
          {icon}
        </div>
      </div>
      <span className="text-3xl font-medium">{name}</span>
    </div>
  );
};

export default AnimatedIcon;

