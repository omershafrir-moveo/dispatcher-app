import DatePicker from "./DatePicker";
  import { Meta, StoryObj } from "@storybook/react";
  
  const meta: Meta<typeof DatePicker> = {
    title: "DatePicker",
    component: DatePicker,
  };
  
  export default meta;
  
  type StoryType = StoryObj<typeof meta>;
  export const DatePickerTemplate: StoryType = {
    args: {
      
    },
  };