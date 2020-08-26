import gradient from 'random-gradient';

const getRandomString = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const generateRandomGradient = () => {
  return gradient(getRandomString());
};
