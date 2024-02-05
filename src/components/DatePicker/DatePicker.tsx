import { useContext } from "react";
import Calender from "../Icons/Calender";
import "rsuite/DateRangeInput/styles/index.css";
import StyledDatePicker from "./DatePicker.styles";
import { SearchContext } from "../SearchContext/SearchContext";

const DatePicker = () => {
  const { datesRange, updateDatesRange } = useContext(SearchContext);

  return (
    <StyledDatePicker
      value={datesRange}
      placeholder="Dates"
      style={{ width: "190px" }}
      showHeader={false}
      showOneCalendar={true}
      format="dd-MM-yyyy"
      caretAs={Calender}
      onChange={updateDatesRange}
    />
  );
};

export default DatePicker;
