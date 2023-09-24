import Search from "./Search";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Search> = {
  title: "Search",
  component: Search,
};

export default meta;

type StoryType = StoryObj<typeof meta>;
export const SearchTemplate: StoryType = {
  args: {
    searchInput: "",
    handleInputChange: () => {
      console.log("input changed!");
    },
  },
};
