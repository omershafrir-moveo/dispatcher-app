import { Card } from "./WidgetCard.styles";

const WidgetCard: React.FC<{
  type: "pie" | "monthes" | "no-data";
  children?: React.ReactNode;
}> = (props) => {
  return (
    <Card className="Card" type={props.type}>
      {" "}
      {props.children}{" "}
    </Card>
  );
};

export default WidgetCard;
