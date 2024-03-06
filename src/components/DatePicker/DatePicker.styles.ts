import styled from "styled-components";
import { DateRangePicker } from "rsuite";
import Calender from "../Icons/Calender";
import "rsuite/DateRangeInput/styles/index.css";
import { device } from "../../util/breakpoints";

export const DatePickerWrapper = styled.div`
  position: relative;
  /* z-index: 120; */
  max-width: 175px;
  border-radius: 10px;
  @media ${device.tablet} {
    width: 25%;
    box-shadow: rgba(0, 0, 0, 0.15) 2px 4px 2px 0px;
  }
  @media ${device.mobile} {
    width: 25%;
  }
`;
const styledDatePicker = styled(DateRangePicker)`
  .rs-picker-popup {
    position: relative;
    z-index: 80;
    top: 200px;
  }

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
    color: #5a5a89;
    padding-top: 0px;
    padding-bottom: 0px;

    ::placeholder {
      color: #5a5a89;
      padding-left: 5px;
    }
    @media ${device.mobile} {
      display: none;
    }
  }
  .rs-input-group.rs-input-group-inside {
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }

  .rs-picker.rs-picker-daterange.rs-picker-default.rs-picker-toggle-wrapper.rs-picker-cleanable.rs-picker-error {
    max-width: 175px;
  }
`;

export default styledDatePicker;
