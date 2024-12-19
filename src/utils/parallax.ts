import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import $ from 'jquery';
import 'jquery.ripples';

gsap.registerPlugin(ScrollTrigger);

export const initParallax = () => {
  const layers = document.querySelectorAll('.parallax-layer');
  
  layers.forEach((layer) => {
    const speed = (layer as HTMLElement).dataset.speed || '0';
    
    ScrollTrigger.create({
      trigger: layer,
      start: 'top bottom+=100%',
      end: 'bottom top-=100%',
      scrub: true,
      onUpdate: (self) => {
        const yPos = self.progress * parseFloat(speed) * window.innerHeight;
        gsap.set(layer, { y: yPos });
      }
    });
  });
};

export const initTextAnimations = () => {
  const textElements = document.querySelectorAll('.animate-text');
  
  textElements.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
      }
    });
  });
};

export const initRippleEffect = () => {
  if (window.innerWidth > 768) {
    $('.ripple-effect').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04
    });
  }
};

export const handleResize = () => {
  if (window.innerWidth <= 768) {
    $('.ripple-effect').ripples('destroy');
    
    // Reset parallax layers
    const layers = document.querySelectorAll('.parallax-layer');
    layers.forEach((layer) => {
      (layer as HTMLElement).style.transform = 'none';
    });
  } else {
    initRippleEffect();
  }
}; 