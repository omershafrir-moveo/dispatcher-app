import {
  MobileToolbarContainer,
  TopMobileContainer,
} from "./MobileToolbar.styles";
import SearchIcon from "../Icons/SearchIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import NotificationIcon from "../Icons/NotificationIcon";
import UserCircleIcon from "../Icons/UserCircleIcon";
import IconButton from "../IconButton/IconButton";
import { InputMobileWrapper } from "./MobileToolbar.styles";
import { useState } from "react";
import InputSearchBar from "../InputSearchBar/InputSearchBar";
import MobileFiltersToolbar from "../MobileFiltersToolbar/MobileFiltersToolbar";

const MobileToolbar = () => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const handleSearchClick = () => {
    setSearchOpen((prevState: boolean) => !prevState);
  };

  return (
    <TopMobileContainer className="TopMobileContainer">
      <MobileToolbarContainer className="MobileToolbarContainer">
        <IconButton handleClick={handleSearchClick}>
          <SearchIcon />
        </IconButton>
        <IconButton handleClick={() => {}}>
          <SettingsIcon />
        </IconButton>
        <IconButton handleClick={() => {}}>
          <NotificationIcon />
        </IconButton>
        <IconButton handleClick={() => {}}>
          <UserCircleIcon />
        </IconButton>
      </MobileToolbarContainer>
      {searchOpen && (
        <InputMobileWrapper className="InputMobileWrapper">
          <InputSearchBar />
        </InputMobileWrapper>
      )}
    </TopMobileContainer>
  );
};

export default MobileToolbar;
