import styled from "styled-components";
import { COLORS } from "../../global-data";
import { device } from "../../util/breakpoints";

export const TopContainer = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: calc(100% - 67px); // 47+20 = 67 for articles

  @media ${device.tablet} {
    gap: 12px;
    width: calc(100% - 60px);
  }
  @media ${device.mobile} {
    gap: 16px;
    width: calc(100% - 32px);
  }
`;
export const BodyLayoutContainer = styled.div<{ children?: React.ReactNode }>`
  background-color: ${COLORS.backgroundColor};
  height: calc(100% - 34px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  background-color: transparent;
`;

export const DataContainer = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
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
  @media ${device.tablet} {
    text-align: center;
  }
`;

export const HeadlinesContainer = styled.div<{ children?: React.ReactNode }>`
  @media ${device.tablet} {
    text-align: center;
  }
`;

export const Loading = styled.h1`
  align-self: center;
  color: rgb(90, 90, 137);
  font-family: "Roboto", sans-serif;
`;

export const ErrorHeadlinesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
