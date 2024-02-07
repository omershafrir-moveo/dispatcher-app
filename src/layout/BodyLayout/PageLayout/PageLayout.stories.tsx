import PageLayout from "./PageLayout";
  import { Meta, StoryObj } from "@storybook/react";
  
  const meta: Meta<typeof PageLayout> = {
    title: "PageLayout",
    component: PageLayout,
  };
  
  export default meta;
  
  type StoryType = StoryObj<typeof meta>;
  export const PageLayoutTemplate: StoryType = {
    args: {
      
    },
  };