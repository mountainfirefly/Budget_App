export const getMonthAmount = (transactions) => {
  const result = transactions.reduce((soFar, value) => {
    const id = value.date.slice(0, 7);

    if (soFar[id]) {
      soFar[id] = soFar[id] + value.amount;
    } else {
      soFar[id] = value.amount;
    }

    return soFar;
  }, {});

  return Object.keys(result).map((key) => {
    return {
      title: key,
      amount: result[key],
    };
  });
};
