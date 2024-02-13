import React from "react";
import Header from "../DropdownMenu/Header/Header";
import FiltersLayout from "../../layout/BodyLayout/FiltersLayout/FiltersLayout";
import { modeArray } from "../../layout/BodyLayout/FiltersLayout/FilterLayout.types";
const Responsiveness: React.FC = () => {
  return (
    <>
      <Header />
      {/* <FiltersLayout mode={modeArray[0]} /> */}
    </>
  );
};

export default Responsiveness;
