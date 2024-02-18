import styled from "styled-components";
import SeparatorLine from "../../../components/Icons/SeparatorLine";
import { COLORS } from "../../../global-data";
import { device } from "../../../util/breakpoints";
export const PageContainer = styled.div<{ children?: React.ReactNode }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: red;
  gap: 20px;

  @media ${device.tablet} {
    gap: 0px;
  }
`;

export const BodyContainer = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: column;
  width: calc(100% - 480px);
  height: 100%;
  background-color: transparent;
  gap: 20px;

  @media ${device.tablet} {
    width: 100%;
    gap: 12px;
    align-items: center;
  }

  @media ${device.mobile} {
    gap: 16px;
  }

`;
