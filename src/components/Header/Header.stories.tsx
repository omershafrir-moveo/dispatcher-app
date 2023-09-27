import Header from "./Header";
  import { Meta, StoryObj } from "@storybook/react";
  
  const meta: Meta<typeof Header> = {
    title: "Header",
    component: Header,
  };
  
  export default meta;
  
  type StoryType = StoryObj<typeof meta>;
  export const HeaderTemplate: StoryType = {
    args: {
      
    },
  };