import styled from "styled-components";

export const Container = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  margin: 0px;
  padding: 0px;
  background-color: #262146;
  width: 1920px;
  height: 74px;
  justify-content: left;
  /* align-items: center; */
`;

export const IconWrapper = styled.div<{ children?: React.ReactNode }>`
  margin: 12px 154px 0px 20px;
`;

export const InputWrapper = styled.div<{ children?: React.ReactNode }>`
  margin-top: 12px;
`;
