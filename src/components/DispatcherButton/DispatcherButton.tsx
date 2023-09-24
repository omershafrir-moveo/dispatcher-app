import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { buttonStyle } from "./styles";

const DispatcherButton: React.FC<{ text: string; handleClick: () => void }> = (
  props
) => {
  return (
    <Button
      variant="contained"
      sx={buttonStyle}
      endIcon={<ArrowForwardIcon />}
      onClick={props.handleClick}
    >
      {props.text}
    </Button>
  );
};

export default DispatcherButton;
