import { SelectOptionType } from "../global-data";

export type queryEntry = {
  [param: string]: string;
};
export type searchParams = {
  searchMode: string;
  queries: queryEntry[];
};

export type Dictionary = { [key: string]: SelectOptionType };
