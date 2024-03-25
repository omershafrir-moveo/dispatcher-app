import { TooltipProps } from "rsuite";
export type MonthsDataPoint = {
  date: Date;
  value: number;
};
export type PiechartDataPoint = {
  name: string;
  value: number;
};

export interface CustomPiechartTooltipProps extends TooltipProps {
  active?: boolean;
  payload?: PiechartDataPoint[];
}

export interface CustomMonthsTooltipProps extends TooltipProps {
  active?: boolean;
  payload?: MonthsDataPoint[];
  label?: Date;
}

export type CustomTickMonthsProps = {
  x?: number;
  y?: number;
  payload: any;
};
