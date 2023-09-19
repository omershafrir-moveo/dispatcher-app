import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Dispatch, SetStateAction } from "react";
import DownArrowIcon from "../assets/svg/DownArrowIcon.svg"
import * as sx from "../styles";
import { useState } from "react";

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
    <FormControl>
      <Select
        value={props.selectedOption}
        onChange={handleChange}
        renderValue={(val) => <InputLabel>{val}</InputLabel>}
        sx={props.sx}
      >
        {props.itemsNames.map((itemName, index) => (
          <MenuItem key={index} value={itemName}>
            {itemName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DispatcherDropdown;
