import { number } from "prop-types";

export const sourcesDataMock: { name: string; value: number }[] = [
  { name: "NBC", value: 23 },
  { name: "Vulture", value: 23 },
  { name: "CNN", value: 60 },
  { name: "ESPN", value: 100 },
];

export type dateObj = {
  day: number;
  month: number;
  year: number;
};
const toDate = (date: string): dateObj => {
  return {
    day: Number(date.substring(8, 10)),
    month: Number(date.substring(5, 7)),
    year: Number(date.substring(0, 4)),
  };
};

export const datesDataMock: { date: dateObj; value: number }[] = [
  { date: toDate("2023-04-12"), value: 5 },
  { date: toDate("2020-02-02"), value: 2 },
  { date: toDate("2023-02-15"), value: 3 },
  { date: toDate("2023-03-15"), value: 4 },
  { date: toDate("2020-02-01"), value: 1 },
];

export const sortFunc = (
  a: { date: dateObj; value: number },
  b: { date: dateObj; value: number }
) => {
  return a.date.year < b.date.year
    ? -1
    : a.date.year > b.date.year
    ? 1
    : a.date.month < b.date.month
    ? -1
    : a.date.month > b.date.month
    ? 1
    : a.date.day < b.date.day
    ? -1
    : a.date.day > b.date.day
    ? 1
    : 0;
};

