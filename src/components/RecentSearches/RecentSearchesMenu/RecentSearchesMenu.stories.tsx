import RecentSearchesMenu from "./RecentSearchesMenu";
import { Meta, StoryObj } from "@storybook/react";

const itemsMock = [
  { key: 1, text: "crypto" },
  { key: 2, text: "soccer" },
  { key: 3, text: "politics" },
];


const meta: Meta<typeof RecentSearchesMenu> = {
  title: "RecentSearchesMenu",
  component: RecentSearchesMenu,
};

export default meta;

type StoryType = StoryObj<typeof meta>;
export const RecentSearchesMenuTemplate: StoryType = {
  args: {
    items: itemsMock
  },
};


