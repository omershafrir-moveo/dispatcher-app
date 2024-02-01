import { SelectOptionType } from "../../../global-data";

export const modeArray: SelectOptionType[] = [
  { key: 0, title: "Top Headlines", value: "top-headlines" },
  { key: 1, title: "Everything", value: "everything" },
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

export const dataMock = {
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
  ],
  category: [
    {
      key: 1,
      title: "Painting & Vinyl Wall Covering",
      value: "Landscaping & Irrigation",
    },
    {
      key: 2,
      title: "Overhead Doors",
      value: "Construction Clean and Final Clean",
    },
    { key: 3, title: "Framing (Steel)", value: "Electrical" },
    { key: 4, title: "Fire Protection", value: "HVAC" },
    {
      key: 5,
      title: "Ornamental Railings",
      value: "Rebar & Wire Mesh Install",
    },
    { key: 6, title: "Electrical", value: "Fire Sprinkler System" },
    { key: 7, title: "Marlite Panels (FED)", value: "Masonry & Precast" },
    {
      key: 8,
      title: "Drywall & Acoustical (FED)",
      value: "Roofing (Asphalt)",
    },
  ],
  country: [
    { key: 1, title: "Tunisia", value: "TN" },
    { key: 2, title: "Armenia", value: "AM" },
    { key: 3, title: "Russia", value: "RU" },
    { key: 4, title: "China", value: "CN" },
    { key: 5, title: "Panama", value: "PA" },
    { key: 6, title: "Luxembourg", value: "LU" },
    { key: 7, title: "China", value: "CN" },
    { key: 8, title: "United States", value: "US" },
    { key: 9, title: "Ukraine", value: "UA" },
    { key: 10, title: "Russia", value: "RU" },
    { key: 11, title: "South Africa", value: "ZA" },
    { key: 12, title: "China", value: "CN" },
    { key: 13, title: "Poland", value: "PL" },
    { key: 14, title: "Peru", value: "PE" },
    { key: 15, title: "France", value: "FR" },
  ],
};
