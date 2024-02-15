import axios, { AxiosError } from "axios";
import { SelectOptionType } from "../global-data";
import { arrayToQueryString } from "./util";
import { noneOption } from "../global-data";
import { queryEntry, searchParams, Dictionary } from "./apiService.types";
import { ArticleProps } from "../components/ArticleCard/ArticleCard";
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

const API_KEY = API_KEYS[3];

const getParamsNames = (queries: queryEntry[]): string[] => {
  return queries.reduce((acc: string[], entry: queryEntry) => {
    const keys: string[] = Object.keys(entry);
    return acc.concat(keys);
  }, []);
};
export type responseType = {
  articles: ArticleProps[];
  error?: string;
};

export const validateParams = (params: searchParams): string => {
  if (
    params.searchMode == "everything" &&
    getParamsNames(params.queries).every(
      (qu: string) => !["sources", "q"].includes(qu)
    )
  )
    return "Please select a source or type a keyword.";
  if (
    getParamsNames(params.queries).every(
      (qu: string) =>
        !["sources", "q", "country", "language", "category"].includes(qu)
    )
  )
    return "Please select a source/category/language/country or type a keyword.";
  return "";
};

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

  if (searchMode == "everything") queries.push({ sortBy: sortMode.value });

  return { searchMode, queries };
};

export const getArticles = async (pageParam: number, params?: searchParams) => {
  try {
    const queriesSuffix = arrayToQueryString(params?.queries);
    const url = `https://newsapi.org/v2/${params?.searchMode}?apiKey=${API_KEY}${queriesSuffix}&page=${pageParam}&pageSize=10`;
    const res = await axios.get(url);
    return res.data;
  } catch (error: any) {
    console.log(error.response.data);
    return [];
  }
};

export const getSources = async () => {
  const url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`;
  const res = await axios.get(url);
  return res.data;
};
