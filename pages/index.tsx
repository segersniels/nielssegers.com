import { useEffect } from 'react';

const Root = () => {
  useEffect(() => {
    window.location.href = '/home';
  }, []);

  return null;
};

export default Root;
