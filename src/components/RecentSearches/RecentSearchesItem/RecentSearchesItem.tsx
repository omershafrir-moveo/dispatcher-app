import React from "react";
import {
  ItemContainer,
  DeleteButton,
  TextContainer,
} from "./RecentSearchesItem.styles";
import XIcon from "../../Icons/XIcon";

export type SearchItemProps = {
  text: string;
  handleDelete: () => void;
  handleClick: () => void;
  children?: React.ReactNode;
};

const RecentSearchesItem: React.FC<SearchItemProps> = (props) => {
  return (
    <ItemContainer onMouseDown={props.handleClick}>
      <TextContainer text={props.text}>{props.text}</TextContainer>
      <DeleteButton onClick={props.handleDelete}>
        <XIcon />
      </DeleteButton>
    </ItemContainer>
  );
};

export default RecentSearchesItem;
