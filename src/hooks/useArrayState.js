import { useState } from "react";

const useArrayState = (initialArray) => {
  const [arrayState, setArrayState] = useState(initialArray);

  const updateElement = (index, value) => {
    setArrayState((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = value;
      return newArray;
    });
  };

  const pushElement = (value) => {
    setArrayState((prevArray) => [...prevArray, value]);
  };

  const popElement = () => {
    setArrayState((prevArray) => {
      const newArray = [...prevArray];
      newArray.pop();
      return newArray;
    });
  };

  return [arrayState, updateElement, pushElement, popElement];
};

export default useArrayState;
