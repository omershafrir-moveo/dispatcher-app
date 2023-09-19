import Box from "@mui/material/Box";
import MainSearchBox from "./MainSearchBox";
import * as sx from "../styles";
import LogoIcon from "../assets/svg/logoIcon.svg";
const Header = () => {
  return (
    <div>
      <Box sx={sx.header}>
      <img src={LogoIcon} />
        <MainSearchBox />
      </Box>
    </div>
  );
};

export default Header;
