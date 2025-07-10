export const getAverageValues = (familyType: string, house: string) => {
  const isSmallFamily = familyType === "1-2";
  const isApartment = house === "apartment";

  if (isSmallFamily && isApartment) {
    return { electric: 200, gas: 10, water: 9 }; // 一般的な小世帯アパート
  }

  if (isSmallFamily && !isApartment) {
    return { electric: 250, gas: 12, water: 10 }; // 小世帯戸建て
  }

  if (!isSmallFamily && isApartment) {
    return { electric: 300, gas: 14, water: 12 }; // 大世帯アパート
  }

  if (!isSmallFamily && !isApartment) {
    return { electric: 400, gas: 18, water: 20 }; // 大世帯戸建て
  }

  return { electric: 300, gas: 12, water: 12 }; // fallback
};
