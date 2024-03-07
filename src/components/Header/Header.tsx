import InputSearchBar from "../InputSearchBar/InputSearchBar";
import LogoIcon from "../Icons/LogoIcon";
import { Container, IconWrapper, InputWrapper } from "./Header.styles";

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
