import FiltersLayout from "./FiltersLayout";
import { Meta, StoryObj } from "@storybook/react";
import { modeArray } from "./FilterLayout.types";

const meta: Meta<typeof FiltersLayout> = {
  title: "FiltersLayout",
  component: FiltersLayout,
};

export default meta;

type StoryType = StoryObj<typeof meta>;
export const FiltersLayoutTemplate: StoryType = {
  args: { mode: modeArray[0] },
};
