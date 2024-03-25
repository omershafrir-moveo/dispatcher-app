import {
  LegendContainer,
  LegendItem,
  LegendBullet,
  LegendText,
  LegendValue,
  LegendItemData,
} from "./Legend.styles";

const Legend: React.FC<{ data: any[]; children?: React.ReactNode }> = (
  props
) => {
  return (
    <LegendContainer className="LegendContainer">
      {props.data.map((dataPoint, index) => (
        <LegendItem className="LegendItem" key={index}>
          <LegendBullet className="LegendBullet" color={dataPoint.color} />
          <LegendItemData className="LegendItemData">
            <LegendText className="LegendText">{dataPoint.name}</LegendText>
            <LegendValue className="LegendValue">{`${dataPoint.value}%`}</LegendValue>
          </LegendItemData>
        </LegendItem>
      ))}
    </LegendContainer>
  );
};

export default Legend;
