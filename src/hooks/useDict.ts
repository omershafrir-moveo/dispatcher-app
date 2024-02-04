import { useState } from "react";

const useDict = (initialDict:{}) => {
  const [dictionary, setDictionary] = useState(initialDict);

  const updateValue = (key:string, value:any):void => {
    setDictionary((prevDict) => ({
      ...prevDict,
      [key]: value,
    }));
  };
  return [dictionary, updateValue] as const;
};

export default useDict;
