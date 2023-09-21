import {Container as StyledContainer, StyledContainerProps} from './Container.style'

const Container:React.FC<StyledContainerProps> = (props) => {
    return (<StyledContainer containerType={props.containerType}/>) 
}
 
export default Container;