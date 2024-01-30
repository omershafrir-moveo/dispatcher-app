import DropDownMenu from "./DropDownMenu";
import React, { useState } from "react";

export default {
  title: "DropDownMenu",
  component: DropDownMenu,
};

const Template = (args) => {
  const [selectedOption, setSelectedOption] = useState({ key: -1, title: "Sources", value: "" });
  return (
    <DropDownMenu
      {...args}
      selectedOption={selectedOption}
      handleSelectedOptionChange={(event) => setSelectedOption( event)}
      theme="default"
    />
  );
};
export const DefaultDropDownMenu = Template.bind({});
DefaultDropDownMenu.args = {
  defaultItemName: { key: -1, title: "Sources", value: "" },
  itemsNames: [
    {
      key: 1,
      title: "Sports",
      value: "sports",
    },
    {
      key: 2,
      title: "Everything",
      value: "every",
    },
    {
      key: 3,
      title: "Top",
      value: "top",
    },
    {
      key: 4,
      title: "Crypto",
      value: "crypto",
    },
    {
      key: 3,
      title: "Finance",
      value: "finance",
    },
  ],
  theme: "default",
};
