import React from "react";
import Header from "../DropdownOption/Header/Header";
import FiltersLayout from "../../layout/BodyLayout/FiltersLayout/FiltersLayout";
import { modeArray } from "../../global-data";
import MobileFiltersToolbar from "../MobileFiltersToolbar/MobileFiltersToolbar";
import styled from "styled-components";
import { COLORS } from "../../global-data";
const Container = styled.div`
  background-color: ${COLORS.backgroundColor};
  height: 2000px;
`;

const Responsiveness: React.FC = () => {
  return (
    <Container className="ResponsivenessContainer">
      <Header />
      <MobileFiltersToolbar mode={modeArray[0]} />
    </Container>
  );
};

export default Responsiveness;
