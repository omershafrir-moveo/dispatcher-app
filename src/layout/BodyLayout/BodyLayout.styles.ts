import styled from "styled-components";
import { COLORS } from "../../global-data";

export const BodyLayoutContainer = styled.div<{ children?: React.ReactNode }>`
  background-color: ${COLORS.backgroundColor};
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const DataContainer = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptyStateContainer = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const TypoContainer = styled.div<{ children?: React.ReactNode }>`
  gap: 16px;
`;
