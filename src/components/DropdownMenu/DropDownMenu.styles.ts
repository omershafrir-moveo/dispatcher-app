import styled from "styled-components";

type StyledMenuProps = {
  numOfItems: number; // Add your custom prop here
};

export const StyledMenu = styled.ul<StyledMenuProps>`
  padding: 0;
  margin: 0;
  align-items: left;
  max-height: 118px; // 4 * height of a single option
  overflow-x: hidden;
  overflow-y: scroll;
`;
