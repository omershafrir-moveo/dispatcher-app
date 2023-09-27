import {
  ItemsList,
  HeaderContainer,
  HeaderTitleContainer,
  FooterContainer,
  Container,
  ClearButton,
} from "./RecentSearchesMenu.styles";
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
  const clearMock = () => {
    console.log("cleared all");
    setItems([]);
  };
  const clickMock = (itemClicked: { key: number; text: string }) => {
    console.log(`clicked ${itemClicked.text}!`);
  };

  
  return (
    <Container>
      <HeaderContainer>
        <HeaderTitleContainer>RECENT SEARCHES</HeaderTitleContainer>
        <ClearButton onClick={clearMock}>CLEAR</ClearButton>
      </HeaderContainer>
      <ItemsList>
        {items.map((item) => (
          <RecentSearchesItem
            key={item.key}
            text={item.text}
            handleDelete={() => deleteMock(item)}
            handleClick={() => clickMock(item)}
          />
        ))}
      </ItemsList>
      <FooterContainer />
    </Container>
  );
};

export default RecentSearchesMenu;
