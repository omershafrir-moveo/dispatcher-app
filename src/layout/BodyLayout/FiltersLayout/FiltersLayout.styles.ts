import styled from "styled-components";
import { COLORS } from "../../../global-data";
import { device } from "../../../util/breakpoints";

export const FiltersToolbar = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  justify-content: flex-start;
  height: 47px;
  width: 100%;
  background-color: transparent;
  gap: 20px;
  z-index: 180;

  @media ${device.tablet} {
    padding-left: 10px;
    justify-content: flex-start;
    width: auto;
    flex-grow: 1;
  }
`;
