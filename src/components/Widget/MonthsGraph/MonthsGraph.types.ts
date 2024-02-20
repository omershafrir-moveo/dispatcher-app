import { TooltipProps } from "rsuite";

export type DataPoint = {
    date:Date,
    value:number
  }

export interface CustomTooltipProps extends TooltipProps {
    active?: boolean;
    payload?: DataPoint[];
    label?: Date;
  }