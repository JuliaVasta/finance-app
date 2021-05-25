export const generateID = () =>
  (
    Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
  ).toUpperCase();

export const round = (number) => {
  return Number(number.toFixed(2));
};
