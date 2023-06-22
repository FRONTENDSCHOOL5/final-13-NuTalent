import { useState, useEffect } from 'react';

export default function useScrollBottom() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsBottom(
        document.documentElement.scrollTop + window.innerHeight >=
          document.documentElement.scrollHeight,
      );
    });
  }, []);

  return isBottom;
}
