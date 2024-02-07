import styled from "styled-components";
import { COLORS } from "../../global-data";

export const Container = styled.div<{ children?: React.ReactNode }>`
  background-color: ${COLORS.backgroundColor};
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const DataContainer = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 42px;
  margin-top: 15px; // 15 px margin  + 5 px height of line = 20 px
`;

export const EmptyStateContainer = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TypoContainer = styled.div<{ children?: React.ReactNode }>`
  gap: 16px;
`;
