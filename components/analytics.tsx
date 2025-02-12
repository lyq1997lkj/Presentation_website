"use client";

import { useEffect } from 'react';
import { onCLS, onFID, onLCP } from 'web-vitals';

export function Analytics() {
  useEffect(() => {
    const reportWebVitals = ({ name, value }: { name: string; value: number }) => {
      console.log(`${name}:`, value);
      // Here you can send the metrics to your analytics service
    };

    onCLS(reportWebVitals);
    onFID(reportWebVitals);
    onLCP(reportWebVitals);
  }, []);

  return null;
}