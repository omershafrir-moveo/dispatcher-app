import DropDownMenu from "./DropDownMenu";
import React, { useState } from "react";

export default {
  title: "DropDownMenu",
  component: DropDownMenu,
};

const Template = (args) => {
  const [selectedOption, setSelectedOption] = useState("Sources");
  return (
    <DropDownMenu
      {...args}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />
  );
};
export const BasicDropDownMenu = Template.bind({});
BasicDropDownMenu.args = {
  defaultItemName: "Sources",
  itemsNames: [
    "Mako",
    "Ynet",
    "Walla",
    "Yahoo",
    "N12",
    "Yahoo",
    "N12",
    "Yahoo",
    "N12",
  ],
};
