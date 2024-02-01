export const COLORS = {
  primaryButtonColor: "#0058B9",
  primaryLightColor: "#FFFFFF",
  backgroundColor: "#E5E5E5",
};

export type SelectOptionType = {
  key: number;
  title: string;
  value: string;
};

export type CountryType = {
  typeId: "COUNTRY";
  key: number;
  title: string;
  value: string;
}
export type LanguageType = {
  typeId: "LANGUAGE";
  key: number;
  title: string;
  value: string;
}
export type CategoryType = {
  typeId: "CATEGORY";
  key: number;
  title: string;
  value: string;
}


// export type SelectOptionType = CountryType | LanguageType | CategoryType ;