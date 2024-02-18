import styled from "styled-components";
import { device } from "../../util/breakpoints";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #262146;

  @media ${device.mobile} {
    position: relative;
  }
`;

export const IconWrapper = styled.div`
  margin: 0;
  padding: 0;
  justify-content: center;
  display: flex;
`;

export const DataWrapper = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: row;
  width: calc(100% - 40px);
  height: 74px;
  justify-content: flex-start;
  z-index: 3;
  align-items: center;
  gap: calc(12.5% - 76px);

  @media ${device.mobile} {
    justify-content: space-between;
  }

  @media ${device.tablet} {
    gap: 50px;
  }
`;
export const InputWrapper = styled.div`
  width: 100%;
`;
