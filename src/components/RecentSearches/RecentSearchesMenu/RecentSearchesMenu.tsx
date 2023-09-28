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

const RecentSearchesMenu: React.FC<{
  items: { key: number; text: string }[];
}> = (props) => {
  const [items, setItems] = useState(props.items);

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
      {items && (
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
      )}
      <FooterContainer />
    </Container>
  );
};

export default RecentSearchesMenu;
