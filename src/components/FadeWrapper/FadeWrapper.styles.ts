import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Wrapper = styled.div<{ visible: boolean }>`
  animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 0.5s ease-in-out;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;
