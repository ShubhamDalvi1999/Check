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
      <div className="w-16 h-16 mb-2">{icon}</div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default AnimatedIcon;

