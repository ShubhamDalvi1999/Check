interface JQuery<TElement = HTMLElement> {
  ripples(options?: {
    resolution?: number;
    dropRadius?: number;
    perturbance?: number;
  }): this;
  ripples(methodName: 'destroy'): this;
}

interface JQueryStatic {
  ripples(options?: {
    resolution?: number;
    dropRadius?: number;
    perturbance?: number;
  }): JQuery;
} 