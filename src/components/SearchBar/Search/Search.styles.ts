import styled from "styled-components";

export const StyledTextField = styled.input`
  width: 424px;
  height: 50px;
  padding-left: 16px;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: rgba(90, 90, 137, 0.5);
  &::placeholder {
    color: rgba(90, 90, 137, 0.5);
  }
  /* background-image: url("../../assets/svg/DownArrowIcon");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center; */
`;

export const StyledLabel = styled.label`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 20px;
    background-image: url("./DownArrowIcon.svg");
  }
`;
