export const dictToArray = (dictionary: {}) => {
  return Object.entries(dictionary).map(([key, text]: [any, any]) => {
    return { [key]: text };
  });
};

export const toJson = (items: string[]): { [key: string]: string } => {
  const obj: { [key: string]: string } = {};
  if (items.length > 5) items.shift();
  items.forEach((item: string, index) => {
    obj[index + 1] = item;
  });
  return obj;
};

