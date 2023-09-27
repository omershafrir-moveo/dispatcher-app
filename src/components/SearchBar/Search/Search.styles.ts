import styled from "styled-components";

export const StyledTextField = styled.input`
  width: 424px;
  height: 40px;
  padding: 0px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: rgba(90, 90, 137, 0.5);
  &::placeholder {
    color: rgba(90, 90, 137, 0.5);
  }
  border: none;
  outline: none;
`;
