export const strCapitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const addPromotionFlag = (arr) => {
  const newArr = arr.map((el) => {
    return {
      ...el,
      promotion: Math.floor(Math.random() * 2) === 0 ? false : true,
    };
  });
  return newArr;
};
