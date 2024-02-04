import DropdownOption from "../DropdownOption/DropdownOption";
import DropDownMenu from "../DropdownMenu/DropDownMenu";
import { noneOption } from "../../layout/BodyLayout/FiltersLayout/FilterLayout.types";
import { DateRangePicker } from "rsuite";
import { useState } from "react";
import Calender from "../Icons/Calender";
import "rsuite/DateRangeInput/styles/index.css";
import "./styles.css";
import StyledDatePicker from "./DatePicker.styles";

const DatePicker = () => {
  const [range, setRange] = useState<Date[]>([new Date(), new Date()]); // Initial date range

  return (
    // <DateRangePicker appearance="default" value={[value[0],value[1]]} onChange={() => {}} />
    <>
      <StyledDatePicker
        value={[range[0], range[1]]}
        // appearance="default"
        placeholder="Dates"
        style={{ width: "190px" }}
        showHeader={false}
        showOneCalendar={true}
        format="dd-MM-yyyy"
        caretAs={Calender}
        // onChange={(newRange:Date[]) => setRange(newRange)}
      />
    </>
  );
};

export default DatePicker;
