import Box from "@mui/material/Box";
import MainSearchBox from "../MainSearchBox/MainSearchBox";
import headerStyle from "./styles";
import LogoIcon from "../../assets/svg/logoIcon.svg";

const Header = () => {
  return (
    <div>
      <Box sx={headerStyle}>
        <img src={LogoIcon} />
        <MainSearchBox />
      </Box>
    </div>
  );
};

export default Header;
