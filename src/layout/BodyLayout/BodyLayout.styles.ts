import styled from "styled-components";
import { COLORS } from "../../global-data";

export const Container = styled.div<{ children?: React.ReactNode }>`
  background-color: ${COLORS.backgroundColor};
`;

export const DataContainer = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: row;
  gap: 42px;
  margin-top: 20px;
`;
