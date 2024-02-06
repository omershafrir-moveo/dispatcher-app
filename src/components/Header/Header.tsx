import InputSearchBar from "../InputSearchBar/InputSearchBar";
import LogoIcon from "../Icons/LogoIcon";
import { Container, IconWrapper, InputWrapper } from "./Header.styles";
import {
  InputProvider,
  SearchContextProps,
} from "../SearchContext/SearchContext";
import { RecentSearchesItem } from "../RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import React from "react";
import SearchContextApi from "../../api/SearchContextApi";

const Header = () => {
  return (
    <Container>
      <IconWrapper>
        <LogoIcon />
      </IconWrapper>
      <InputWrapper>
        <InputSearchBar />
      </InputWrapper>
    </Container>
  );
};

export default Header;
