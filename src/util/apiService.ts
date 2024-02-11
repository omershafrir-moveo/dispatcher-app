import axios from "axios";
import { SelectOptionType } from "../global-data";
import { arrayToQueryString } from "./util";
import { noneOption } from "../layout/BodyLayout/FiltersLayout/FilterLayout.types";
import { filtersValuesType } from "../layout/BodyLayout/FiltersLayout/FiltersLayout";
const API_KEYS = [
  "1147e6878ef44d28bb7374107d98351b",
  "40f24796ae9248c59526eba4705abb29",
  "9c43938f5eb949de8ab2fae9e92f007e",
  "1d9a5d9b35df4b69963b1272cabb6e43",
  "a32b42999aba45aca01fde128bbf474a",
  "da77a58986be4a1c8de3119abcf1b937",
  "bb4c03f4a58741b3ade559261ef6a112",
  "81241658eda34bc39a1c1a554e563c93",
  "1ab54f6161084c749f2dcd1a00f84f22",
  "f79ddaf709914ff9b621a7693cfb36c3",
];

const API_KEY = API_KEYS[2];

export type queryEntry = {
  [param: string]: string;
};
export type searchParams = {
  searchMode: string;
  queries: queryEntry[];
};
type Dictionary = { [key: string]: SelectOptionType };

export const getParams = (
  filterValue: SelectOptionType,
  filtersDict: {},
  searchValue: string,
  datesRange: Date[],
  sortMode: SelectOptionType
) => {
  const searchMode = filterValue.value;
  const queries: queryEntry[] = [];
  for (const [key, option] of Object.entries(filtersDict as Dictionary)) {
    if (option != noneOption) queries.push({ [key]: option.value });
  }
  if (searchValue) queries.push({ q: searchValue });
  if (datesRange && datesRange.length > 0) {
    queries.push({ from: datesRange[0].toISOString().split("T")[0] });
    queries.push({ to: datesRange[1].toISOString().split("T")[0] });
  }
  if (queries.length == 0) {
    if (searchMode == "top-headlines") queries.push({ country: "il" });
    else queries.push({ q: "Israel" });
  }
  if (searchMode == "everything") queries.push({ sortBy: sortMode.value });
  return { searchMode, queries };
};

export const getArticles = async (params?: searchParams) => {
  try {
    const queriesSuffix = arrayToQueryString(params?.queries);
    // console.log(`'queriesSuffix' value is: ,${queriesSuffix}`);
    const url = `https://newsapi.org/v2/${params?.searchMode}?${queriesSuffix}&apiKey=${API_KEY}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    return { articles: [] };
  }
};

export const getSources = async () => {
  const url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`;
  const res = await axios.get(url);
  return res.data;
};
