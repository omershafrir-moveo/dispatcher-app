import { Card } from "./WidgetCard.styles";

const WidgetCard:React.FC<{children?: React.ReactNode}> = (props) => {
    return <Card> {props.children} </Card>
}
 
export default WidgetCard;