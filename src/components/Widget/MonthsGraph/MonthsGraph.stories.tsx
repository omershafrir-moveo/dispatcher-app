import MonthsGraph from "./MonthsGraph";
  import { Meta, StoryObj } from "@storybook/react";
  
  const meta: Meta<typeof MonthsGraph> = {
    title: "MonthsGraph",
    component: MonthsGraph,
  };
  
  export default meta;
  
  type StoryType = StoryObj<typeof meta>;
  export const MonthsGraphTemplate: StoryType = {
    args: {
      
    },
  };