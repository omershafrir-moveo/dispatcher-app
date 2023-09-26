import { StoryObj, Meta } from "@storybook/react";
import SearchBar from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "SearchBar",
  component: SearchBar,
};

export default meta;

type StoryType = StoryObj<typeof meta>;
export const SearchBarTemplate: StoryType = {
  args: {
    
  },
};
