import styled from "styled-components";

export const ButtonContainer = styled.button<{ onClick: () => void }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
