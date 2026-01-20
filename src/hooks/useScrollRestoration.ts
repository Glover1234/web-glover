import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollRestoration = (key: string) => {
  const location = useLocation();
  const scrollPositions = useRef<Map<string, number>>(new Map());

  // Guardar posición de scroll antes de navegar
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current.set(key, window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [key]);

  // Restaurar posición de scroll al volver
  useEffect(() => {
    const savedPosition = scrollPositions.current.get(key);
    if (savedPosition !== undefined && location.state?.fromDetail) {
      // Usar setTimeout para asegurar que el contenido esté renderizado
      setTimeout(() => {
        window.scrollTo(0, savedPosition);
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [key, location]);

  return null;
};
