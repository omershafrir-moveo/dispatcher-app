import FiltersLayout from "./FiltersLayout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FiltersLayout> = {
  title: "FiltersLayout",
  component: FiltersLayout,
};

export default meta;

type StoryType = StoryObj<typeof meta>;
export const FiltersLayoutTemplate: StoryType = {
  args: {},
};
