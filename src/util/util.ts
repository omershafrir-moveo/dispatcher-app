import { queryEntry } from "./apiService.types";
import LanguageIcon from "../components/Icons/LanguageIcon";

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

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const newDate = new Intl.DateTimeFormat("en-US", options).format(date);
  const firstColon = newDate.indexOf(",");
  return newDate
    .substring(0, firstColon)
    .concat(newDate.substring(firstColon + 1));
};

export const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const round2decimal = (num: number) => {
  return Math.round(num * 100) / 100;
};

export const dateToMonth = (dateString: string): string => {
  const date = new Date(dateString);
  const monthIndex = date.getMonth();
  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[monthIndex];
};

export const getIconByFilter = (filter: string): React.ReactNode => {
  switch (filter) {
    case "language":
      return LanguageIcon();
    default:
      return null;
  }
};
