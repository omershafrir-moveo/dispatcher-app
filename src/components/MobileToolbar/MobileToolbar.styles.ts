import styled from "styled-components";
import { device } from "../../util/breakpoints";

export const MobileToolbarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  height: 56px;
`;

export const TopMobileContainer = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: column;
`;

export const InputMobileWrapper = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0px;
  z-index: 10;
  height: 60px;
  background-color: #ffffff;
`;
