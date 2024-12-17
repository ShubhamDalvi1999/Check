import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initParallax() {
  const parallaxLayers = document.querySelectorAll('.parallax-layer');
  
  parallaxLayers.forEach((layer) => {
    const speed = layer.dataset.speed || 0;
    
    gsap.to(layer, {
      y: () => speed * ScrollTrigger.maxScroll(window),
      ease: 'none',
      scrollTrigger: {
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  });
}

export function initTextAnimations() {
  gsap.utils.toArray('.animate-text').forEach((text) => {
    gsap.from(text, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: text,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    });
  });
}

export function initRippleEffect() {
  if (window.innerWidth > 768) {
    import('jquery.ripples').then(() => {
      $('.ripple-effect').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
      });
    });
  }
}

export function handleResize() {
  ScrollTrigger.refresh();
  if (window.innerWidth <= 768) {
    $('.ripple-effect').ripples('destroy');
  } else {
    initRippleEffect();
  }
}

