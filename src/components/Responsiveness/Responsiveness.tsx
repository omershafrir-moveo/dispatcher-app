import React from "react";
import Header from "../Header/Header";
import FiltersLayout from "../../layout/BodyLayout/FiltersLayout/FiltersLayout";
import { modeArray } from "../../global-data";
import MobileFiltersToolbar from "../MobileFiltersToolbar/MobileFiltersToolbar";
import styled from "styled-components";
import { COLORS } from "../../global-data";
import BodyLayout from "../../layout/BodyLayout/BodyLayout";
import { PageContainer } from "../../layout/BodyLayout/PageLayout/PageLayout.styles";

const Container = styled.div`
  background-color: ${COLORS.backgroundColor};
  height: 2000px;
`;

const Responsiveness: React.FC = () => {
  return (
    // <Container className="ResponsivenessContainer">
    <PageContainer />
    // </Container>
  );
};

export default Responsiveness;
