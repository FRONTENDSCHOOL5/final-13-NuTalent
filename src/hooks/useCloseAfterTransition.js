import { useState, useEffect } from 'react';

const useCloseAfterTransition = (isOpen, duration = 200) => {
  const [isTransitionComplete, setIsTransitionComplete] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsTransitionComplete(true);
    } else {
      const timer = setTimeout(() => {
        setIsTransitionComplete(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration]);

  return { isTransitionComplete };
};

export default useCloseAfterTransition;
