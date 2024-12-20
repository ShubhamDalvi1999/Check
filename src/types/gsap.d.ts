declare module 'gsap' {
  export interface ScrollTriggerInstance {
    progress: number;
  }

  export interface ScrollTriggerConfig {
    trigger: Element;
    start?: string;
    end?: string;
    scrub?: boolean;
    onUpdate?: (self: ScrollTriggerInstance) => void;
  }

  export function registerPlugin(...args: any[]): void;
  export function set(target: Element | Element[], vars: object): void;
  export function to(target: Element | Element[], vars: object): void;

  export const ScrollTrigger: {
    create(config: ScrollTriggerConfig): ScrollTriggerInstance;
    refresh(): void;
  };
}

declare module 'gsap/ScrollTrigger' {
  import { ScrollTrigger } from 'gsap';
  export default ScrollTrigger;
} 