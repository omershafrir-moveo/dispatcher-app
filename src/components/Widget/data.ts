import { addMonths } from "date-fns";

//mock data for the widgets, i left this file and not deleted it just so i could pass this demo data dor the widgets as props

export const sourcesDataMock: { name: string; value: number }[] = [
  { name: "NBC", value: 23 },
  { name: "Vulture", value: 23 },
  { name: "CNN", value: 60 },
  { name: "ESPN", value: 100 },
];

const values = [
  600, 800, 700, 950, 600, 800, 850, 900, 700, 670, 800, 1200, 600, 600, 500,
  800,
];
export const datesDataMock: { date: Date; value: number }[] = values.map(
  (val, index) => ({
    date: addMonths(new Date(), index),
    value: val,
  })
);
