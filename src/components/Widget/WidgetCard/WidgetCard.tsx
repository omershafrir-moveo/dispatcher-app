import { Card } from "./WidgetCard.styles";

const WidgetCard: React.FC<{ children?: React.ReactNode }> = (props) => {
  return <WidgetCard>{props.children}</WidgetCard>;
};

export default WidgetCard;
