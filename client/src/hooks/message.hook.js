import { useCallback } from 'react';

export const useMessage = (callback, deps) => {
  return useCallback(text => {
    if (window.M && text) {
      window.M.toast({html: text})
    }
  }, [])
};

