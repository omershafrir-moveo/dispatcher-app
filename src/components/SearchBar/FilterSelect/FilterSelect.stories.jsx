import FilterSelect from "./FilterSelect";
import React, { useState } from "react";

export default {
  title: "FilterSelect",
  component: FilterSelect,
};

const Template = (args) => {
  const [selectedOption, setSelectedOption] = useState("Top Headlines");
  return <FilterSelect />;
};
export const DefaultFilterSelect = Template.bind({});
DefaultFilterSelect.args = {
  defaultItemName: "Top Headlines",
  itemsNames: ["Top Headlines", "Everything"],
  theme: "filter",
};
