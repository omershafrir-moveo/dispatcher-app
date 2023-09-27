import RecentSearchesMenu from "./RecentSearchesMenu";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RecentSearchesMenu> = {
  title: "RecentSearchesMenu",
  component: RecentSearchesMenu,
};

export default meta;

type StoryType = StoryObj<typeof meta>;
export const RecentSearchesMenuTemplate: StoryType = {
  args: {},
};


