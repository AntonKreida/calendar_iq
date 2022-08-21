export const getDate = () => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDay();
  return {
    month,
    year,
    day,
  };
};

export const date = new Date();
