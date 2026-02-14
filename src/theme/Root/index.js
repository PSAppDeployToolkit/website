import { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.gtag) {
      window.gtag = function() {};
    }
  }, []);

  return <>{children}</>;
}
