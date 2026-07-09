import { useEffect, useRef } from 'react';

/**
 * Reproduit le comportement du script vanilla :
 * observe l'élément, ajoute la classe "visible" dès qu'il entre
 * dans le viewport, puis arrête d'observer (one-shot).
 */
export default function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
