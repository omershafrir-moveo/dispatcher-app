import {
  LegendContainer,
  LegendItem,
  LegendBullet,
  LegendText,
  LegendValue,
  LegendItemData,
} from "./Legend.styles";
// import { DataType } from "../PieGraph";

// export type DataType<T> = T & {color: string}

const Legend: React.FC<{ data: any[]; children?: React.ReactNode }> = (
  props
) => {
  return (
    <LegendContainer className="LegendContainer">
      {props.data.map((dataPoint, index) => (
        <LegendItem key={index}>
          <LegendBullet color={dataPoint.color} />
          <LegendItemData>
            <LegendText>{dataPoint.name}</LegendText>
            <LegendValue>{`${dataPoint.value}%`}</LegendValue>
          </LegendItemData>
        </LegendItem>
      ))}
    </LegendContainer>
  );
};

export default Legend;
