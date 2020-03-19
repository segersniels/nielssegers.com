export default {
  baseSize: 10,
  getSizeInRem(sizeInPoints: number) {
    return `${sizeInPoints / this.baseSize}rem`;
  },
  normalWeight: 400,
  boldWeight: 700,
  mediumWeight: 500,
  lightWeight: 300,
  thinWeight: 100,
  fatWeight: 900,
};
