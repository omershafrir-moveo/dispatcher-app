import { useContext, useEffect } from "react";
import Calender from "../Icons/Calender";
import "rsuite/DateRangeInput/styles/index.css";
import StyledDatePicker from "./DatePicker.styles";
import { SearchContext } from "../SearchContext/SearchContext";

const DatePicker = () => {
  const { datesRange, updateDatesRange } = useContext(SearchContext);
  useEffect(() => {
    const pickerPopupDiv = document.querySelector(
      '[data-testid="picker-popup"]'
    );
    console.log(pickerPopupDiv);
    const element = document.getElementById("picker-popup");
    if (element) {
      element.classList.add("shafrirshoter");
    }
  }, []);

  return (
    <StyledDatePicker
      value={datesRange}
      placeholder="Dates"
      style={{ width: "100%", maxWidth: "265px" }}
      showHeader={false}
      showOneCalendar={true}
      format="dd-MM-yy"
      caretAs={Calender}
      onChange={updateDatesRange}
    />
  );
};

export default DatePicker;
