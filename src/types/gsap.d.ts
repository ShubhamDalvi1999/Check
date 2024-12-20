declare module 'gsap' {
  export function registerPlugin(...args: any[]): void;
  export function set(target: any, vars: any): void;
  export function to(target: any, vars: any): void;
  export const ScrollTrigger: any;
}

declare module 'gsap/ScrollTrigger' {
  const ScrollTrigger: any;
  export default ScrollTrigger;
} 