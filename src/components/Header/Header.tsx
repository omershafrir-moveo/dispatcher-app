import InputSearchBar from "../InputSearchBar/InputSearchBar";
import LogoIcon from "../Icons/LogoIcon";
import { Container, IconWrapper, InputWrapper } from "./Header.styles";
import { InputProvider, SearchContext } from "../SearchContext/SearchContext";
const Header = () => {
  return (
    <Container>
      <InputProvider>
        <IconWrapper>
          <LogoIcon />
        </IconWrapper>
        <InputWrapper>
          <InputSearchBar />
        </InputWrapper>
      </InputProvider>
    </Container>
  );
};

export default Header;
