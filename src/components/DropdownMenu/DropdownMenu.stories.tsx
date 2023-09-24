import { StoryObj, Meta } from "@storybook/react";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";

const meta: Meta<typeof DropDownMenu> = {
  title: "DropDownMenu",
  component: DropDownMenu,
};

export default meta;

type StoryType = StoryObj<typeof meta>;
export const DropDownMenuTemplate: StoryType = {
  args: {
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
    theme: "default",
  },
};
