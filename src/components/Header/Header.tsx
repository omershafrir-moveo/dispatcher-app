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
import TabletToolbar from "../TabletToolbar/TabletToolbar";

const Header = () => {
  const vp = useViewport();
  return (
    <HeaderContainer className="HeaderContainer">
      <DataWrapper className="DataWrapper">
        <IconWrapper className="IconWrapper">
          <LogoIcon />
        </IconWrapper>
        {vp == Viewport.DESKTOP ? (
          <InputWrapper className="InputWrapper">
            <InputSearchBar />
          </InputWrapper>
        ) : vp == Viewport.TABLET ? (
          <TabletToolbar />
        ) : (
          <MobileToolbar />
        )}
      </DataWrapper>
    </HeaderContainer>
  );
};

export default Header;
