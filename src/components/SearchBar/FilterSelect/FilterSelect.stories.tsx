import { StoryObj, Meta } from "@storybook/react";
import FilterSelect from "./FilterSelect";
import { useState } from "react";

const meta: Meta<typeof FilterSelect> = {
  title: "FilterSelect",
  component: FilterSelect,
};

export default meta;

type StoryType = StoryObj<typeof meta>;
export const FilterSelectTemplate: StoryType = {
  args: {
    defaultItemName: "Top Headlines",
    itemsNames: ["Top Headlines", "Everything"],
    theme: "filter",
  },
};
