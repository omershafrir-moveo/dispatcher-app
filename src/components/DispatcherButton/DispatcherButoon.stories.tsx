import DispatcherButton from "./DispatcherButton";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DispatcherButton> = {
  title: "DispatcherButton",
  component: DispatcherButton,
  argTypes: {
    handleClick: { action: "handleClick" },
  },
};

export default meta;

type StoryType = StoryObj<typeof meta>;
export const DispatcherButtonTemplate: StoryType = {
  args: {
    text: "Basic Button",
    handleClick: () => {
      console.log("basic Click");
    },
  },
};
