import { MobileToolbarContainer } from "./MobileToolbar.styles";
import SearchIcon from "../Icons/SearchIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import NotificationIcon from "../Icons/NotificationIcon";
import UserCircleIcon from "../Icons/UserCircleIcon";
import IconButton from "../IconButton/IconButton";

const MobileToolbar = () => {
  const handleSearchClick = () => {
    console.log("search click!");
  };

  return (
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
  );
};

export default MobileToolbar;
