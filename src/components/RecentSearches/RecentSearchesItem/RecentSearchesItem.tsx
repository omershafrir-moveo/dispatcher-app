import React from "react";
import {
  ItemContainer,
  DeleteButton,
  TextContainer,
} from "./RecentSearchesItem.styles";
import XIcon from "../../Icons/XIcon";
import { SearchItemProps } from "./RecentSearchItem.types";

const RecentSearchesItem: React.FC<SearchItemProps> = (props) => {
  return (
    <ItemContainer>
      <TextContainer text={props.text}>{props.text}</TextContainer>
      <DeleteButton onClick={props.handleDelete}>
        <XIcon />
      </DeleteButton>
    </ItemContainer>
  );
};

export default RecentSearchesItem;
