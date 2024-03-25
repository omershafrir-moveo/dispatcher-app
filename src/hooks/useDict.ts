import { useState } from "react";
import { SelectOptionType } from "../global-data";

export type filtersDictType = {
  category: SelectOptionType;
  language: SelectOptionType;
  sources: SelectOptionType;
  country: SelectOptionType;
};

const useDict = (initialDict: {}) => {
  const [dictionary, setDictionary] = useState(initialDict);

  const updateValue = (key: string, value: any): void => {
    setDictionary((prevDict) => ({
      ...prevDict,
      [key]: value,
    }));
  };
  return [dictionary, updateValue] as const;
};

export default useDict;
