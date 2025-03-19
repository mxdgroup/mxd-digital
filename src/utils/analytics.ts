export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // Add your analytics implementation here
  console.log(`[Analytics] ${eventName}`, properties);
}