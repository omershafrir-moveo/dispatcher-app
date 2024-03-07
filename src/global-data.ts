export const COLORS = {
  primaryButtonColor: "#0058B9",
  primaryLightColor: "#FFFFFF",
  backgroundColor: "#F8F8FF",
  // backgroundColor: "red",
};

export type SelectOptionType = {
  key: number;
  title: string;
  value: string;
};

export const modeArray: SelectOptionType[] = [
  { key: 0, title: "Top Headlines", value: "top-headlines" },
  { key: 1, title: "Everything", value: "everything" },
];
export const sortModesArrays: SelectOptionType[] = [
  { key: 0, title: "Relevency", value: "relevency" },
  { key: 1, title: "Popularity", value: "popularity" },
  { key: 2, title: "Published At", value: "publishedAt" },
];
export const filterArray: SelectOptionType[] = [
  { key: 0, title: "Sources", value: "sources" },
  { key: 1, title: "Language", value: "language" },
  { key: 2, title: "Country", value: "country" },
  { key: 3, title: "Category", value: "category" },
];

export const noneOption: SelectOptionType = {
  key: -1,
  title: "None",
  value: "none",
};

export const yesOption: SelectOptionType = {
  key: 1,
  title: "Yes",
  value: "yes",
};

const codeToCountry = new Intl.DisplayNames(["en"], { type: "region" });

const countryCodes = [
  "ae",
  "ar",
  "at",
  "au",
  "be",
  "bg",
  "br",
  "ca",
  "ch",
  "cn",
  "co",
  "cu",
  "cz",
  "de",
  "eg",
  "fr",
  "gb",
  "gr",
  "hk",
  "hu",
  "id",
  "ie",
  "il",
  "in",
  "it",
  "jp",
  "kr",
  "lt",
  "lv",
  "ma",
  "mx",
  "my",
  "ng",
  "nl",
  "no",
  "nz",
  "ph",
  "pl",
  "pt",
  "ro",
  "rs",
  "ru",
  "sa",
  "se",
  "sg",
  "si",
  "sk",
  "th",
  "tr",
  "tw",
  "ua",
  "us",
  "ve",
  "za",
];

export const DATA_OPTIONS = {
  language: [
    { key: 0, title: "Arabic", value: "ar" },
    { key: 1, title: "German", value: "de" },
    { key: 2, title: "English", value: "en" },
    { key: 3, title: "Spanish", value: "es" },
    { key: 4, title: "French", value: "fr" },
    { key: 5, title: "Hebrew", value: "he" },
    { key: 6, title: "Italian", value: "it" },
    { key: 7, title: "Dutch", value: "nl" },
    { key: 8, title: "Norweigian", value: "no" },
    { key: 9, title: "Portuguese", value: "pt" },
    { key: 10, title: "Russian", value: "ru" },
    { key: 11, title: "Swedish", value: "sv" },
    { key: 12, title: "Undefined", value: "ud" },
    { key: 13, title: "Chinese", value: "zh " },
    noneOption,
  ],
  category: [
    {
      key: 1,
      title: "Business",
      value: "business",
    },
    {
      key: 2,
      title: "Entertainment",
      value: "entertainment",
    },
    { key: 3, title: "General", value: "general" },
    { key: 4, title: "Health", value: "health" },
    {
      key: 5,
      title: "Science",
      value: "science",
    },
    { key: 6, title: "Sports", value: "sports" },
    { key: 7, title: "Technology", value: "technology" },
    noneOption,
  ],
  country: countryCodes
    .map((code: string, idx: number) => {
      return {
        key: idx + 1,
        title: codeToCountry.of(code.toUpperCase()) as string,
        value: code,
      };
    })
    .concat([noneOption]),

  sources: [
    { key: 0, title: "CoStar Group, Inc.", value: "Asta Funding, Inc." },
    {
      key: 1,
      title: "VelocityShares VIX Short-Term ETN",
      value: "Genocea Biosciences, Inc.",
    },
    {
      key: 2,
      title: "Asia Pacific Fund, Inc. (The)",
      value: "Central Garden & Pet Company",
    },
    { key: 3, title: "Freshpet, Inc.", value: "Rayonier Inc." },
    { key: 4, title: "EastGroup Properties, Inc.", value: "Net Element, Inc." },
    { key: 5, title: "Citigroup Inc.", value: "Graham Holdings Company" },
    {
      key: 6,
      title: "Gabelli Equity Trust, Inc. (The)",
      value: "Tekla Healthcare Investors",
    },
    {
      key: 7,
      title: "Taiwan Semiconductor Manufacturing Company Ltd.",
      value: "Cogent Communications Holdings, Inc.",
    },
    {
      key: 8,
      title: "Signet Jewelers Limited",
      value: "Siebert Financial Corp.",
    },
    {
      key: 9,
      title: "Kimco Realty Corporation",
      value: "First United Corporation",
    },
    { key: 10, title: "Synacor, Inc.", value: "Ringcentral, Inc." },
    {
      key: 11,
      title: "Randolph Bancorp, Inc.",
      value: "Neptune Technologies & Bioresources Inc",
    },
    {
      key: 12,
      title: "Insys Therapeutics, Inc.",
      value: "Jacksonville Bancorp Inc.",
    },
    noneOption,
  ],
};
