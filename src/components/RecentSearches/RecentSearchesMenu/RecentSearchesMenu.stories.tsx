import RecentSearchesMenu from "./RecentSearchesMenu";
import { Meta, StoryObj } from "@storybook/react";
import {
  RecentSearchesItem,
  RecentSearchesMenuProps,
} from "./RecentSearchesMenu";
import { useState } from "react";

// const clickMock = (itemClicked: RecentSearchesItem) => {
//   console.log(`clicked ${itemClicked.text}!`);
// };
// const deleteMock = (itemToDelete: RecentSearchesItem) => {
//   console.log(`deleted ${itemToDelete.text}!`);
//   setItems((oldItems) =>
//     oldItems.filter((oldItem) => oldItem.key !== itemToDelete.key)
//   );
// };
// const clearMock = () => {
//   console.log("cleared all");
//   setItems([]);
// };

const meta: Meta<typeof RecentSearchesMenu> = {
  title: "RecentSearchesMenu",
  component: RecentSearchesMenu,
};

export default meta;

// type StoryType = StoryObj<typeof meta>;
// export const RecentSearchesMenuTemplate: StoryType = {
//   args: {
//     items: itemsMock,
//     handleClick: clickMock,
//     handleDelete: deleteMock,
//     handleClear: clearMock
//   },
// };

export const RecentSearchesMenuWithState: React.FC = () => {
  const itemsMock = [
    { key: 1, text: "crypto" },
    { key: 2, text: "soccer" },
    { key: 3, text: "politics" },
  ];

  const [items, setItems] = useState(itemsMock);

  const clickMock = (itemClicked: RecentSearchesItem) => {
    console.log(`clicked ${itemClicked.text}!`);
  };

  const deleteMock = (itemToDelete: RecentSearchesItem) => {
    console.log(`deleted ${itemToDelete.text}!`);
    setItems((oldItems) =>
      oldItems.filter((oldItem) => oldItem.key !== itemToDelete.key)
    );
  };

  const clearMock = () => {
    console.log("cleared all");
    setItems([]);
  };

  return (
    <RecentSearchesMenu
      items={items}
      handleClick={clickMock}
      handleDelete={deleteMock}
      handleClear={clearMock}
    />
  );
};
