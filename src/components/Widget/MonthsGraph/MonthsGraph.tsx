import { AreaChart, Area, XAxis, ResponsiveContainer, Tooltip } from "recharts";
import { useMemo } from "react";
import WidgetCard from "../WidgetCard/WidgetCard";
import Typography from "../../Typography/Typography";
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import { format } from "date-fns";
import HorizontalLine from "../../Icons/HorizontalLine";
import Spacer from "../../Container/Spacer/Spacer";
import { WidgetProps } from "../WidgetContainer/WidgetsSection/WidgetsSection";
import NoData from "../../Icons/NoData";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { CustomTooltipProps } from "./MonthsGraph.types";
import { HeadlineContainer, TooltipContainer, TooltipTextContainer } from "./MonthsGraph.styles";
const MonthsGraph: React.FC<WidgetProps> = ({ articles, isLoading }) => {
  let contentFlag = articles.length > 0;

  const computeData = (): {
    date: Date;
    value: number;
  }[] => {
    const dateCounts: { [date: string]: number } = {};

    articles.forEach((article) => {
      const articleDate = `${article.publishedAt.substring(0, 10)}`;
      dateCounts[articleDate] = (dateCounts[articleDate] || 0) + 1;
    });

    const datesArray: { date: Date; value: number }[] = Object.keys(
      dateCounts
    ).map((date) => {
      return {
        date: new Date(date),
        value: dateCounts[date],
      };
    });
    datesArray.sort((a, b) => a.date.getTime() - b.date.getTime());
    return datesArray;
  };

  const data: { date: Date; value: number }[] = computeData();

  const firstDatesArray: Date[] = useMemo(() => {
    const returnArray: Date[] = [];
    const dates: Date[] = data.map((dataPoint) => dataPoint.date);
    for (let month = 0; month < 12; month++) {
      const firstDate = dates.find((date) => date.getMonth() == month);
      if (firstDate) returnArray.push(firstDate);
    }
    return returnArray;
  }, [data]);

  const CustomTooltip: React.FC<CustomTooltipProps> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      return (
        <TooltipContainer className="TooltipContainer">
          <TooltipTextContainer className="TooltipTextContainer">
            <p className="label">{`Articles published in ${format(
              label!,
              "d, MMM"
            )} : ${payload[0].value}`}</p>
          </TooltipTextContainer>
        </TooltipContainer>
      );
    }

    return null;
  };

  return (
    <WidgetCard type={data.length > 0 ? "monthes" : "no-data"}>
      <HeadlineContainer className="HeadlineContainer">
        <Typography color="#14142B" size="24px" weight="700">
          Dates
        </Typography>
        <HorizontalLine />
      </HeadlineContainer>
      <WidgetContainer>
        {isLoading && <LoadingSpinner />}
        {contentFlag && (
          <AreaChart
            width={438}
            height={250}
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <XAxis
              className="XAxis"
              dataKey="date"
              tickFormatter={(date: Date) => {
                if (firstDatesArray.includes(date)) {
                  console.log(date);
                  return format(date, "MMM");
                } else return "";
              }}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
              style={{
                fontWeight: "700",
              }}
              tick={{ fill: "#5A5A89" }}
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
                <stop offset="0.3125" stopColor="#0058B9" stopOpacity="0.30" />
                <stop offset="1" stopColor="#00B9FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <Tooltip
              viewBox={{ x: 0, y: 0, width: 200, height: 30 }}
              content={<CustomTooltip />}
            />
            <Area
              type="basis"
              dataKey="value"
              fill={`url(#grad)`}
              stroke="#0058B9"
              strokeWidth="4px"
            />
          </AreaChart>
        )}
        {!contentFlag && !isLoading && (
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
