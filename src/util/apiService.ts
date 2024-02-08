import axios from "axios";
import { SelectOptionType } from "../global-data";
import { arrayToQueryString } from "./util";
import { noneOption } from "../layout/BodyLayout/FiltersLayout/FilterLayout.types";
import { filtersValuesType } from "../layout/BodyLayout/FiltersLayout/FiltersLayout";
const API_KEY = "c327b4ab8a894cc6a620e67491dd2224";

export type queryEntry = {
  [param: string]: string;
};
export type searchParams = {
  searchMode: string;
  queries: queryEntry[];
};

export const getArticles = async (params?: searchParams) => {
  const queriesSuffix = arrayToQueryString(params?.queries);
  console.log(`'queriesSuffix' value is: ,${queriesSuffix}`);

  const url = `https://newsapi.org/v2/${params?.searchMode}?${queriesSuffix}&apiKey=${API_KEY}`;
  return { articles: [] };
  // const res = await axios.get(url);
  // return res.data;
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
  type Dictionary = { [key: string]: SelectOptionType };
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
    else queries.push({ q: "bitcoin" });
  }
  queries.push({ sortBy: sortMode.value });
  return { searchMode, queries };
};
