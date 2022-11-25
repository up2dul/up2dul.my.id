import type { KeyboardEvent } from 'react';

const useEscPress = (callback: () => void) => {
  function keyHandler(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'Escape') callback();
  }

  return keyHandler;
};

export { useEscPress };
