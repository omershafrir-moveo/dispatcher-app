import { queryEntry } from "./apiService.types";

export const dictToArray = (dictionary: {}) => {
  return Object.entries(dictionary).map(([key, text]: [any, any]) => {
    return { [key]: text };
  });
};

export const toJson = (items: string[]): { [key: string]: string } => {
  const obj: { [key: string]: string } = {};
  if (items.length > 10) items.shift();
  items.forEach((item: string, index) => {
    obj[index + 1] = item;
  });
  return obj;
};

export const arrayToQueryString = (
  queryEntries: queryEntry[] | undefined
): string => {
  if (queryEntries == undefined || queryEntries.length == 0) return "";
  else
    return `&${queryEntries
      .map((entry) =>
        Object.entries(entry)
          .map(([key, value]) => `${key}=${value}`)
          .join("&")
      )
      .join("&")}`;
};
