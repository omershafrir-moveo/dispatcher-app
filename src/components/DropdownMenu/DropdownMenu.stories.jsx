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
      handleSelectedOptionChange={() => setSelectedOption( { key: -1, title: "mockup", value: "" })}
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
  ],
  theme: "default",
};
