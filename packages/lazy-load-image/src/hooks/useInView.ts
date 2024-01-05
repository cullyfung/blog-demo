import { useEffect, useRef, useState } from 'react';

type Options = IntersectionObserverInit & {
  once?: boolean;
};

const defaultOptions: Options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
  once: false
};

export const useInView = ({ once, ...options } = defaultOptions) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement>();
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (!observer.current) {
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (observer.current && once) {
              observer.current.unobserve(entry.target);
              observer.current.disconnect();
            }
          } else {
            setIsInView(false);
          }
        });
      }, options);
    }

    if (ref) {
      observer.current.observe(ref);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [options, once, ref]);

  return { setRef, isInView };
};
