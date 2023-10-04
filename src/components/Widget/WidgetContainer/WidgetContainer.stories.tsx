import WidgetContainer from "./WidgetContainer";
  import { Meta, StoryObj } from "@storybook/react";
  
  const meta: Meta<typeof WidgetContainer> = {
    title: "WidgetContainer",
    component: WidgetContainer,
  };
  
  export default meta;
  
  type StoryType = StoryObj<typeof meta>;
  export const WidgetContainerTemplate: StoryType = {
    args: {
      
    },
  };