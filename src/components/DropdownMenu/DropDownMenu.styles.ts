import styled from "styled-components";

type StyledMenuProps = {
  numOfItems: number; // Add your custom prop here
};

export const StyledMenu = styled.ul<StyledMenuProps>`
  padding: 0;
  margin: 0;
  align-items: left;
  max-height: 112px; // 4 * height of a single option
  overflow-x: hidden; 
  overflow-y: scroll; 

  &::-webkit-scrollbar-track {
    background: transparent; /* Background color of the track */
  }

  &::-webkit-scrollbar-thumb {
    background: #eee !important; /* Change this to your desired color */
    border-radius: 5px !important; /* Adjust the border-radius as needed */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
