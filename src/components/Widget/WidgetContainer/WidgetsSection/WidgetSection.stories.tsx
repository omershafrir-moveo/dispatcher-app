import WidgetsSection from "./WidgetsSection";
  import { Meta, StoryObj } from "@storybook/react";
  
  const meta: Meta<typeof WidgetsSection> = {
    title: "WidgetSection",
    component: WidgetsSection,
  };
  
  export default meta;
  
  type StoryType = StoryObj<typeof meta>;
  export const WidgetsSectionTemplate: StoryType = {
    args: {
      
    },
  };