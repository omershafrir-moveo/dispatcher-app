import { InputWrapper } from "../Header/Header.styles";
import IconButton from "../IconButton/IconButton";
import NotificationIcon from "../Icons/NotificationIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import UserCircleIcon from "../Icons/UserCircleIcon";
import InputSearchBar from "../InputSearchBar/InputSearchBar";
import { TabletSearchBarWrapper } from "./TabletToolbar.styles";
import {
  TabletToolbarContainer,
  TopTabletContainer,
} from "./TabletToolbar.styles";

const TabletToolbar = () => {
  return (
    <TopTabletContainer className="TopTabletContainer">
      <TabletSearchBarWrapper className="TabletSearchBarWrapper">
        <InputSearchBar />
      </TabletSearchBarWrapper>
      <TabletToolbarContainer className="TabletToolbarContainer">
        <IconButton handleClick={() => {}}>
          <SettingsIcon />
        </IconButton>
        <IconButton handleClick={() => {}}>
          <NotificationIcon />
        </IconButton>
        <IconButton handleClick={() => {}}>
          <UserCircleIcon />
        </IconButton>
      </TabletToolbarContainer>
    </TopTabletContainer>
  );
};

export default TabletToolbar;
