import React, { useEffect, useRef } from 'react';

export const InViewObserver = ({ children, onInView, style }) => {
    const targetRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            onInView(); // Callback when the target is in view
          }
        },
        { threshold: 0.2 } // Customize the threshold as per your needs
      );
  
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
  
      return () => {
        if (targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      };
    }, [onInView]);
  
    return <section className={style} ref={targetRef}>{children}</section>;
  };
  