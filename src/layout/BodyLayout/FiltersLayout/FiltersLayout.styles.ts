import styled from "styled-components";
import { COLORS } from "../../../global-data";

export const FiltersToolbar = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  height: 47px;
  width: 100%;
  background-color: ${COLORS.backgroundColor};
  gap: 20px;
  margin-top: 20px;
  z-index: 1;
`;

export default true;
