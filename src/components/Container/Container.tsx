import { Container as StyledContainer } from "./Container.styles";
import { StyledContainerProps } from "./Container.types";

const Container: React.FC<StyledContainerProps> = (props) => {
  return (
    <StyledContainer containerType={props.containerType}>
      {props.children}
    </StyledContainer>
  );
};

export default Container;
