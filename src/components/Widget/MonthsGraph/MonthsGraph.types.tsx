import Typography from "../../Typography/Typography";
import { format } from "date-fns";
import {
  CustomMonthsTooltipProps,
  CustomTickMonthsProps,
} from "../Widget.types";
import { TooltipContainer, TooltipTextContainer } from "./MonthsGraph.styles";

export const CustomMonthsTooltip: React.FC<CustomMonthsTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  // if (active && payload && payload.length) {
  if (active && payload && payload.length) {
    return (
      <TooltipContainer className="TooltipContainer">
        <TooltipTextContainer className="TooltipTextContainer">
          <Typography color="#5A5A89">
            {" "}
            {`Articles published in ${format(label!, "MMM d")}`}
          </Typography>
          <Typography color="#5A5A89" weight="800">
            {" "}
            {payload[0].value}
          </Typography>
        </TooltipTextContainer>
      </TooltipContainer>
    );
  }

  return null;
};
export const CustomMonthsTick: React.FC<CustomTickMonthsProps> = ({
  x,
  y,
  payload,
}) => {
  return (
    <text x={x} y={y} dy={-10} fill="#666" fontSize={12} textAnchor="end">
      {payload}
    </text>
  );
};
