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

export type RecentSearchesItem = {
  key: number;
  text: string;
};

export type RecentSearchesMenuProps = {
  items: RecentSearchesItem[];
  handleClick: (item: RecentSearchesItem) => void;
  handleDelete: (item: RecentSearchesItem) => void;
  handleClear: () => void;
};

const RecentSearchesMenu: React.FC<RecentSearchesMenuProps> = (props) => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderTitleContainer>RECENT SEARCHES</HeaderTitleContainer>
        <ClearButton onClick={props.handleClear}>CLEAR</ClearButton>
      </HeaderContainer>
      {props.items && (
        <ItemsList>
          {props.items.map((item) => (
            <RecentSearchesItem
              key={item.key}
              text={item.text}
              handleDelete={() => props.handleDelete(item)}
              handleClick={() => props.handleClick(item)}
            />
          ))}
        </ItemsList>
      )}
      <FooterContainer />
    </Container>
  );
};

export default RecentSearchesMenu;
