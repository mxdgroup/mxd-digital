export function trackEvent(eventName: string, properties?: Record<string, unknown>): void {
  // Add your analytics implementation here
  console.log(`[Analytics] ${eventName}`, properties);
}
