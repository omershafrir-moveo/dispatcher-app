import { Container } from "./WidgetContainer.styles";

const WidgetContainer: React.FC<{ children?: React.ReactNode }> = (props) => {
  return <Container className="Container">{props.children}</Container>;
};

export default WidgetContainer;
