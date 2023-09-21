import styled from "styled-components";
import DownArrowIcon from "../../assets/svg/DownArrowIcon";

type StyledButtonProps = {
  isInputBox?: boolean; // Add your custom prop here
};

const StyledOption = styled.button<StyledButtonProps>`
  width: ${(props) => (props.isInputBox ? "190px" : "189px")};
  height: ${(props) => (props.isInputBox ? "47px" : "28px")};
  border-radius: ${(props) => (props.isInputBox ? "10px" : "none")};
  margin-bottom: ${(props) => (props.isInputBox ? "10px" : "none")};
  background-color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-family: ${(props) =>
    props.isInputBox ? "'Roboto', sans-serif" : "Mulish, sans-serif"};
  font-size: ${(props) => (props.isInputBox ? "14px" : "12px")};
  color: #5a5a89;
  padding: 15px;
  cursor: pointer;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  &:hover {
    background-color: ${(props) => (props.isInputBox ? "none" : "#DFE0EB69")};
  }
`;

export const DropdownOption: React.FC<{
  value: string;
  isInputBox: boolean;
  handleClick: () => void;
}> = (props) => {
  return (
    <StyledOption isInputBox={props.isInputBox} onClick={props.handleClick}>
      {props.value}
      {props.isInputBox && <DownArrowIcon />}
    </StyledOption>
  );
};

export default DropdownOption;
