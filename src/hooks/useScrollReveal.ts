import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.85) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
