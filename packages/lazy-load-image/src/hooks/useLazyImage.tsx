import { useEffect, useState, useRef } from 'react';

export function useLazyImage(src: string, options?: IntersectionObserverInit) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          if (imgRef.current) {
            imgRef.current!.src = src;
            setIsLoaded(true);
            observerRef.current?.unobserve(imgRef.current!);
          }
        }
      }, options);
    }

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, options]);

  return { imgRef, isLoaded };
}
