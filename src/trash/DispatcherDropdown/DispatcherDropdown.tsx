import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Menu from "@mui/material/Menu";
import FormControl from "@mui/material/FormControl";
import { Dispatch, SetStateAction } from "react";
import DownArrowIcon from "../../assets/svg/DownArrowIcon";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";

import {
  dropdownStyle,
  menuItemStyle,
  inputLabelStyle,
  formControlStyle,
} from "./styles";
import { useRef, useEffect } from "react";

const DispatcherDropdown: React.FC<{
  triggerItemName: string;
  itemsNames: string[];
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  sx: {};
}> = (props) => {
  const handleChange = (event: SelectChangeEvent) => {
    props.setSelectedOption(event.target.value as string);
  };

  return (
    <FormControl sx={formControlStyle}>
      <Select 
        value={props.selectedOption}
        onChange={handleChange}
        renderValue={(val) => (
          <InputLabel sx={inputLabelStyle}>{val}</InputLabel>
        )}
        sx={dropdownStyle}
        autoFocus={false}
        IconComponent={DownArrowIcon}
      >
        {props.itemsNames.map((itemName, index) => (
          <MenuItem key={index} value={itemName} sx={menuItemStyle}>
            {itemName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DispatcherDropdown;
