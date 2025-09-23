import React, { useEffect } from 'react';
import EventsSidebar from '../../components/EventsSidebar';

export default function Root({ children }) {
  useEffect(() => {
    // Safety check to prevent gtag errors
    if (typeof window !== 'undefined' && !window.gtag) {
      window.gtag = function() {
        // No-op function to prevent errors
        console.log('gtag not loaded yet, skipping call');
      };
    }
  }, []);

  return (
    <>
      {children}
      <EventsSidebar />
    </>
  );
}
