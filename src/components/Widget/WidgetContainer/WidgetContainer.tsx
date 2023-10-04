import { Container } from "./WidgetContainer.styles";

const WidgetContiner: React.FC<{ children?: React.ReactNode }> = (props) => {
  return <Container>{props.children}</Container>;
};

export default WidgetContiner;
