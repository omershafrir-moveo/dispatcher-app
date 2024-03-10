import styled from "styled-components";
import { device } from "../../../util/breakpoints";

export const StyledTextField = styled.input`
  width: 100%;
  max-width: 424px;
  height: 40px;
  color: #5a5a89;
  padding: 0px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.25px;

  &::placeholder {
    color: rgba(90, 90, 137, 0.5);
  }
  border: none;
  outline: none;

  /* @media ${device.mobile} {
    height: 68px;
  } */
`;
