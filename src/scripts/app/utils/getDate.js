export const getDate = () => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const monthDay = date.getDate();
  const day = date.getDay();
  return {
    year,
    month,
    monthDay,
    day,
  };
};

export const date = new Date();
