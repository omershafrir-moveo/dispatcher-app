import InputSearchBar from "../InputSearchBar/InputSearchBar";
import LogoIcon from "../Icons/LogoIcon";
import {
  HeaderContainer,
  DataWrapper,
  IconWrapper,
  InputWrapper,
} from "./Header.styles";
import useViewport, { Viewport } from "../../hooks/useViewport";
import MobileToolbar from "../MobileToolbar/MobileToolbar";

const Header = () => {
  const vp = useViewport();
  console.log(vp);
  return (
    <HeaderContainer className="HeaderContainer">
      <DataWrapper className="DataWrapper">
        <IconWrapper className="IconWrapper">
          <LogoIcon />
        </IconWrapper>
        {[Viewport.DESKTOP, Viewport.TABLET].includes(vp) ? (
          <InputWrapper className="InputWrapper">
            <InputSearchBar />
          </InputWrapper>
        ) : (
          <MobileToolbar />
        )}
      </DataWrapper>
    </HeaderContainer>
  );
};

export default Header;
