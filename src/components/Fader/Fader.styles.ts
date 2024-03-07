import styled from "styled-components";

export default styled.div<{ children?: React.ReactNode }>`
  opacity: 1;
  transition: opacity 0.5s ease-in-out; /* Adjust the duration and timing function as needed */
  /* &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
  } */
`;
