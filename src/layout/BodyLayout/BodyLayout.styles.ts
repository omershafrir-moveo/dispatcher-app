import styled from "styled-components";
import { COLORS } from "../../global-data";

export const TopContainer = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const BodyLayoutContainer = styled.div<{ children?: React.ReactNode }>`
  background-color: ${COLORS.backgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
`;

export const DataContainer = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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

export const HeadlinesContainer = styled.div<{ children?: React.ReactNode }>``;
