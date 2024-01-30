import { Card } from "./WidgetCard.styles";

const WidgetCard:React.FC<{type:'pie'|'monthes', children?: React.ReactNode}> = (props) => {
    return <Card type={props.type}> {props.children} </Card>
}
 
export default WidgetCard;