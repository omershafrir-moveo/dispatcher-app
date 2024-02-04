import BodyLayout from "./BodyLayout";
  import { Meta, StoryObj } from "@storybook/react";
  
  const meta: Meta<typeof BodyLayout> = {
    title: "BodyLayout",
    component: BodyLayout,
  };
  
  export default meta;
  
  type StoryType = StoryObj<typeof meta>;
  export const BodyLayoutTemplate: StoryType = {
    args: {
      
    },
  };