import InputSearchBar from "../InputSearchBar/InputSearchBar";
import LogoIcon from "../Icons/LogoIcon";
import {
  Container,
  DataWrapper,
  IconWrapper,
  InputWrapper,
} from "./Header.styles";
import useViewport, { Viewport } from "../../hooks/useViewport";
import MobileToolbar from "../MobileToolbar/MobileToolbar";

const Header = () => {
  const vp = useViewport();

  return (
    <Container className="Container">
      <DataWrapper className="DataWrapper">
        <IconWrapper>
          <LogoIcon />
        </IconWrapper>
        {vp == Viewport.DESKTOP || vp == Viewport.TABLET ? (
          <InputWrapper className="InputWrapper">
            <InputSearchBar />
          </InputWrapper>
        ) : (
          <MobileToolbar />
        )}
      </DataWrapper>
    </Container>
  );
};

export default Header;
