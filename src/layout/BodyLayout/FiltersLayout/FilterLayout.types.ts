import { SelectOptionType } from "../../../global-data";


export type filterType =
  | "DATES"
  | "SOURCES"
  | "LANGUAGE"
  | "COUNTRY"
  | "CATEGORY";

export type FilterDict = {
    filterName:filterType;
    
}
