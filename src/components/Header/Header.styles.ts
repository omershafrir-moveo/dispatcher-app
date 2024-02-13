import styled from "styled-components";
import { device } from "../../util/breakpoints";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #262146;
`;

export const IconWrapper = styled.div``;

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
`;
export const InputWrapper = styled.div`
  width: 100%;
`;
