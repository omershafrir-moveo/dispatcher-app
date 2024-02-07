import RecentSearchesMenu from "./RecentSearchesMenu";
import { Meta } from "@storybook/react";
import {
  RecentSearchesItem,
  RecentSearchesMenuProps,
} from "./RecentSearchesMenu";
import { useState } from "react";


const meta: Meta<typeof RecentSearchesMenu> = {
  title: "RecentSearchesMenu",
  component: RecentSearchesMenu,
};
export default meta;


export const RecentSearchesMenuWithState: React.FC = () => {
  const itemsMock = [
    "crypto" ,
    "soccer" ,
    "politics" ,
  ];

  const [items, setItems] = useState(itemsMock);

  const clickMock = (itemClicked: string) => {
    console.log(`clicked ${itemClicked}!`);
  };

  const deleteMock = (itemToDelete: string) => {
    console.log(`deleted ${itemToDelete}!`);
    setItems((oldItems) =>
      oldItems.filter((oldItem) => oldItem !== itemToDelete)
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
