import axios, { AxiosError } from "axios";
import { SelectOptionType } from "../global-data";
import { arrayToQueryString, wait } from "./util";
import { noneOption } from "../global-data";
import {
  queryEntry,
  searchParams,
  Dictionary,
  ResponseType,
  Status,
} from "./apiService.types";

const API_KEY = process.env.REACT_APP_API_KEY;

const getParamsNames = (queries: queryEntry[]): string[] => {
  return queries.reduce((acc: string[], entry: queryEntry) => {
    const keys: string[] = Object.keys(entry);
    return acc.concat(keys);
  }, []);
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

export const getArticles = async (
  pageParam: number,
  params?: searchParams
): Promise<ResponseType> => {
  try {
    const queriesSuffix = arrayToQueryString(params?.queries);
    const url = `https://newsapi.org/v2/${params?.searchMode}?apiKey=${API_KEY}${queriesSuffix}&page=${pageParam}&pageSize=10`;
    const res = await axios.get(url);
    return { data: res.data, responseStatus: Status.SUCCESS };
  } catch (error: any) {
    return {
      data: [],
      responseStatus: Status.ERROR,
      errorMsg: error.response.data.code,
    };
  }
};

export const getSources = async (): Promise<ResponseType> => {
  try {
    const url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`;
    const res = await axios.get(url);
    return { data: res.data, responseStatus: Status.SUCCESS };
  } catch (error: any) {
    return {
      data: [],
      responseStatus: Status.ERROR,
      errorMsg: error.response.data.message,
    };
  }
};
