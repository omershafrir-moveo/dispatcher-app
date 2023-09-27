import RecentSearchesItem from "./RecentSearchesItem";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RecentSearchesItem> = {
  title: "RecentSearchesItem",
  component: RecentSearchesItem,
};

export default meta;

type StoryType = StoryObj<typeof meta>;
export const RecentSearchesItemTemplate: StoryType = {
  args: {
    text: "crypto",
  },
};
