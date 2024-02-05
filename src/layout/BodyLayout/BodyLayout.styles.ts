import styled from "styled-components";
import { COLORS } from "../../global-data";

export const Container = styled.div<{ children?: React.ReactNode }>`
  background-color: ${COLORS.backgroundColor};
  width: 1680px;
`;

export const DataContainer = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: row;
  gap: 42px;
  margin-top: 15px; // 15 px margin  + 5 px height of line = 20 px
`;
