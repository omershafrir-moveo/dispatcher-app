import styled from "styled-components";
import { COLORS } from "../../../global-data";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLORS.primaryLightColor};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 80%;
`;
export const FilterContainer = styled.div`
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  max-width: 663px;
  margin: 0px;
  background-color: ${COLORS.primaryLightColor};
  border-radius: 10px;
`;

export const SearchIconWrapper = styled.div`
  padding-right: 14.79px;
  padding-left: 15.75px;
`;
