import { AreaChart, Area, XAxis } from "recharts";
import WidgetCard from "../WidgetCard/WidgetCard";
import Typography from "../../Typography/Typography";
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import { format } from "date-fns";
import HorizontalLine from "../../Icons/HorizontalLine";
import Spacer from "../../Container/Spacer/Spacer";
import { WidgetProps } from "../WidgetsSection/WidgetsSection";
import NoData from "../../Icons/NoData";

const MonthsGraph: React.FC<WidgetProps> = (props) => {
  const {
    data,
    isValid,
  }: { data: { date: Date; value: number }[]; isValid: boolean } = props;

  return (
    <WidgetCard type="monthes">
      <div>
        <Typography color="#14142B" size="24px" weight="700">
          Dates
        </Typography>
        <HorizontalLine />
      </div>
      <WidgetContainer>
        {isValid && (
          <>
            <Spacer height="80px" />
            <AreaChart
              width={382}
              height={250}
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 20,
              }}
            >
              <XAxis
                dataKey="date"
                scale="time"
                domain={["dataMin", "dataMax"]}
                tickFormatter={(date) => format(date, "MMM")}
                tickLine={false}
                axisLine={false}
                style={{
                  fontWeight: "700",
                  fontFamily: "'Roboto', sans-serif",
                  color: "#FFFFFF",
                }}
              />
              <defs>
                <linearGradient
                  id="grad"
                  x1="191.129"
                  y1="0"
                  x2="191.585"
                  y2="154.843"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0.3125"
                    stop-color="#0058B9"
                    stop-opacity="0.30"
                  />
                  <stop offset="1" stop-color="#00B9FF" stop-opacity="0" />
                </linearGradient>
              </defs>
              <Area
                type="basis"
                dataKey="value"
                fill={`url(#grad)`}
                stroke="#0058B9"
                strokeWidth="4px"
              />
            </AreaChart>
          </>
        )}
        {!isValid && (
          <>
            <Spacer height="59.5px" />
            <NoData />
          </>
        )}
      </WidgetContainer>
    </WidgetCard>
  );
};

export default MonthsGraph;
