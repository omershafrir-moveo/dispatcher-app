import styled from "styled-components";
type containerType = "itemsList" | "dropdownMenu";

type StyledContainerProps = {
  containerType: containerType;
};

export const Container = styled.div<StyledContainerProps>`
  background-color: ${(props) => (props.containerType === 'itemsList' ? "#ffffff" : "transparent")};
  display: inline-block;
  border-radius: 10px;
  box-shadow: ${(props) => (props.containerType === 'itemsList' ? "0px 4px 12px 0px rgba(0, 0, 0, 0.08)" : "none")};
  margin: 0px;
  padding-top: ${(props) => (props.containerType === 'itemsList' ? "10px" : "none")};
  padding-bottom: ${(props) => (props.containerType === 'itemsList' ? "10px" : "none")};
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
