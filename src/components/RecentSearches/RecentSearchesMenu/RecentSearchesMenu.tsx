import { ItemsList } from "./RecentSearchesMenu.styles";
import RecentSearchesItem from "../RecentSearchesItem/RecentSearchesItem";
import { useState } from "react";

const itemsMock = [
  { key: 1, text: "crypto" },
  { key: 2, text: "soccer" },
  { key: 3, text: "politics" },
];

const RecentSearchesMenu = () => {
  const [items, setItems] = useState(itemsMock);

  const deleteMock = (itemToDelete: { key: number; text: string }) => {
    console.log(`deleted ${itemToDelete.text}!`);
    setItems((oldItems) =>
      oldItems.filter((oldItem) => oldItem.key !== itemToDelete.key)
    );
  };

  return (
    <ItemsList>
      {items.map((item) => (
        <RecentSearchesItem
          key={item.key}
          text={item.text}
          handleDelete={() => deleteMock(item)}
        />
      ))}
    </ItemsList>
  );
};

export default RecentSearchesMenu;
