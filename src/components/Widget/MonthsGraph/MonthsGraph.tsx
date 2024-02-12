import { AreaChart, Area, XAxis } from "recharts";
import WidgetCard from "../WidgetCard/WidgetCard";
import Typography from "../../Typography/Typography";
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import { format } from "date-fns";
import HorizontalLine from "../../Icons/HorizontalLine";
import Spacer from "../../Container/Spacer/Spacer";
import { WidgetProps } from "../WidgetContainer/WidgetsSection/WidgetsSection";
import NoData from "../../Icons/NoData";
import Loading from "../../Loading/Loading";
const MonthsGraph: React.FC<WidgetProps> = ({ articles, isLoading }) => {
  let contentFlag = articles.length > 0;

  const computeData = () => {
    const sortFunc = (
      obj1: { date: Date; value: number },
      obj2: { date: Date; value: number }
    ) => {
      const timestamp1 = obj1.date.getTime();
      const timestamp2 = obj2.date.getTime();

      return timestamp1 - timestamp2;
    };

    const dateCounts: { [date: string]: number } = {};

    articles.forEach((article) => {
      const month = `${article.publishedAt.substring(0, 7)}-01`;
      dateCounts[month] = (dateCounts[month] || 0) + 1;
    });
    const monthsArray: { date: Date; value: number }[] = Object.keys(
      dateCounts
    ).map((date) => {
      return {
        date: new Date(date),
        value: dateCounts[date],
      };
    });
    monthsArray.sort(sortFunc);
    return monthsArray;
  };

  const data = computeData();
  return (
    <WidgetCard type={data.length > 0 ? "monthes" : "no-data"}>
      <div>
        <Typography color="#14142B" size="24px" weight="700">
          Dates
        </Typography>
        <HorizontalLine />
      </div>
      <WidgetContainer>
        {isLoading && <Loading />}
        {contentFlag && (
          <>
            <AreaChart
              width={438}
              height={250}
              data={data}
              margin={{
                top: 0,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <XAxis
                dataKey="date"
                domain={["dataMin", "dataMax"]}
                tickFormatter={(date) => format(date, "MMM")}
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
                  <stop
                    offset="0.3125"
                    stopColor="#0058B9"
                    stopOpacity="0.30"
                  />
                  <stop offset="1" stopColor="#00B9FF" stopOpacity="0" />
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
