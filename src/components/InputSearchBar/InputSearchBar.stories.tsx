import InputSearchBar from "./InputSearchBar";
  import { Meta, StoryObj } from "@storybook/react";
  
  const meta: Meta<typeof InputSearchBar> = {
    title: "InputSearchBar",
    component: InputSearchBar,
  };
  
  export default meta;
  
  type StoryType = StoryObj<typeof meta>;
  export const InputSearchBarTemplate: StoryType = {
    args: {
      
    },
  };