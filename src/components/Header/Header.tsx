import Box from "@mui/material/Box";
import headerStyle from "./styles";
import LogoIcon from "../../assets/svg/logoIcon.svg";

const Header = () => {
  return (
    <div>
      <Box sx={headerStyle}>
        <img src={LogoIcon} />
      </Box>
    </div>
  );
};

export default Header;
