import { useEffect } from 'react';

const Root = () => {
  useEffect(() => {
    window.location.href = '/home';
  }, [true]);

  return null;
};

export default Root;
