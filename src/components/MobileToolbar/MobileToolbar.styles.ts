import styled from "styled-components";

export const MobileToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  height: 44px;
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
  background: red;
  z-index: 10;
`;
