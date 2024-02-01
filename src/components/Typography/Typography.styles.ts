import styled from "styled-components";
import { TypeographyProps } from "./Typography";

export default styled.div<TypeographyProps>`
  font-family: ${(props) => (props.font ? props.font : "'Roboto', sans-serif")};
  font-size: ${(props) => (props.size ? props.size : "14px")};
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : "normal")};
  color: ${(props) => (props.color ? props.color : "rgba(90, 90, 137, 0.5)")};
  letter-spacing: ${(props) => (props.letterSpacing ? props.letterSpacing : "0px")};
  text-align: "left";
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  height: ${(props) => (props.height ? props.height : "none")};
  width: ${(props) => (props.width ? props.width : "none")};
`;
