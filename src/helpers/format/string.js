export const getNumCharacterFromString = (str) => {
  const numb = str.match(/\d/g);
  return parseInt(numb.join(''), 10);
};
