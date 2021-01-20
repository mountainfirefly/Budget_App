const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const groupTransactions = (transactions) => {
  const result = transactions.reduce((soFar, value) => {
    const id = value.date.slice(0, 7);

    if (soFar[id]) {
      soFar[id] = [...soFar[id], value];
    } else {
      soFar[id] = [value];
    }

    return soFar;
  }, {});

  return Object.keys(result).map((key) => {
    return {
      title: formatDate(key),
      data: result[key],
    };
  });
};

export const formatDate = (date) => {
  const year = date.slice(0, 4);
  const month = months[Number(date.slice(5, 7) - 1)];

  return `${month} ${year}`;
};
