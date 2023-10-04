import PieGraph from "./PieGraph";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PieGraph> = {
  title: "PieGraph",
  component: PieGraph,
};

export default meta;

type StoryType = StoryObj<typeof meta>;
export const PieGraphTemplate: StoryType = {
  args: {},
};
