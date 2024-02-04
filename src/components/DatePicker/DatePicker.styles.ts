import styled from "styled-components";
import { DateRangePicker } from "rsuite";
import Calender from "../Icons/Calender";
import "rsuite/DateRangeInput/styles/index.css";

const styledDatePicker = styled(DateRangePicker)`
  .rs-input-group rs-input-group-inside {
    border: none;
  }

  .rs-input-group-addon {
    height: 47px;
    border-radius: 0px 10px 10px 0px;
    background-color: #ffffff !important;
    font-family: "'Roboto', sans-serif";
    font-size: 14px;
    border: none;
  }

  .rs-input-group.rs-input-group-inside .rs-input {
    border-radius: 0px;
    border-radius: 10px 0px 0px 10px;
    background-color: #ffffff;
    border: none;
  }
  .rs-input-group.rs-input-group-inside {
    border: none;
    border-radius: 10px;
  }
`;

export default styledDatePicker;
