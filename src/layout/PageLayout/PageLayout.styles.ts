import styled from "styled-components";
import SeparatorLine from "../../components/Icons/SeparatorLine";
import { COLORS } from "../../global-data";
export const PageContainer = styled.div<{ children?: React.ReactNode }>`
  width: 1920px;
  height: 100%;
  background-color: ${COLORS.backgroundColor};
`;

export const BodyContainer = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: column;
  width: 1680px;
  position: absolute;
  background-color: ${COLORS.backgroundColor};
  padding-left: 240px;
  z-index: -1;
`;

export const Line = styled.div<{ children?: React.ReactNode }>`
  margin-top: 5px; //5 px + 15 px (height of line) = 20 px margin
`;
