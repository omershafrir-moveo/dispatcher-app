import styled from "styled-components";

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px; /* Adjust the spacing between legend items */
`;

export const LegendBullet = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.color};
  margin-right: 4px; /* Adjust the spacing between the bullet and text */
`;

export const LegendText = styled.span`
  font-size: 14px;
`;

const Legend:React.FC<{data:any[], children?:React.ReactNode} = (props) => {
    return <LegendContainer>
    {
        props.data.map((dataPoint) => 
        (<LegendItem>
        <LegendBullet />
        <LegendText>
        {dataPoint}
        </LegendText>
        </LegendItem>
        )
    }
    </LegendContainer>
}
 
export default Legend;
