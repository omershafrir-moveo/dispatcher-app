import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Legend from "./Legend/Legend";
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import Typography from "../../Typography/Typography";
import WidgetCard from "../WidgetCard/WidgetCard";
import HorizontalLine from "../../Icons/HorizontalLine";
import { WidgetProps } from "../WidgetContainer/WidgetsSection/WidgetsSection";
import NoData from "../../Icons/NoData";
import Spacer from "../../Container/Spacer/Spacer";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { round2decimal } from "../../../util/util";
import { TooltipContainer, TooltipTextContainer } from "./PieGraph.styles";
import { CustomPiechartTooltipProps } from "../Widget.types";

const CustomPiechartTooltip: React.FC<CustomPiechartTooltipProps> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    return (
      <TooltipContainer className="TooltipContainer">
        <TooltipTextContainer className="TooltipTextContainer">
          <Typography color="#5A5A89" width="200px">
            {" "}
            {payload[0].name != "Other"
              ? `Articles published by ${payload[0].name}`
              : `Articles published by other sources`}
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

const PieGraph: React.FC<WidgetProps> = ({ articles, isLoading }) => {
  const COLORS = ["#030235", "#fa9802", "#343a6e", "#ddf3fe", "#6f706f"];
  let contentFlag = articles.length > 0;

  const computeData = () => {
    const sourceCounts: { [name: string]: number } = {};

    articles.forEach((article) => {
      const sourceName = article.source.name;
      sourceCounts[sourceName] = (sourceCounts[sourceName] || 0) + 1;
    });

    const sourceArray: { name: string; value: number }[] = Object.keys(
      sourceCounts
    ).map((name) => ({
      name,
      value: sourceCounts[name],
    }));
    sourceArray.sort(
      (
        dataPointA: { name: string; value: number },
        dataPointB: { name: string; value: number }
      ) => dataPointB.value - dataPointA.value
    );
    const sourceArrayPre = sourceArray.slice(0, 4);
    const sourceArrayPost = sourceArray.slice(4, sourceArray.length);
    const OtherValue = sourceArrayPost
      .map((dataPoint) => dataPoint.value)
      .reduce((curr, acc) => (acc += curr), 0);
    return OtherValue > 0
      ? sourceArrayPre.concat({ name: "Other", value: OtherValue })
      : sourceArrayPre;
  };
  const data = computeData();
  const totalNumOfArticles = data
    .map((point) => point.value)
    .reduce((acc, curr) => (acc = acc + curr), 0);

  return (
    <WidgetCard type={data.length > 0 ? "pie" : "no-data"}>
      <Typography color="#000000" size="24px" weight="700">
        Sources
      </Typography>
      <HorizontalLine />
      <ResponsiveContainer>
        <WidgetContainer>
          {isLoading && <LoadingSpinner />}
          {contentFlag && (
            <>
              <PieChart width={124} height={120}>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={52}
                  innerRadius={44}
                  stroke=""
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <text
                  x={62}
                  y={62}
                  fontFamily="Mulish, sans-serif"
                  color="#030035"
                  fontSize={12}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <tspan x={62} dy={-8} fontSize={16}>
                    {articles.length}
                  </tspan>
                  <tspan x={62} dy={15} fontSize={12}>
                    Articles
                  </tspan>
                </text>
                <Tooltip
                  viewBox={{ x: 0, y: 0, width: 200, height: 30 }}
                  cursor={{ stroke: "#5A5A89", strokeWidth: 0.2 }}
                  content={<CustomPiechartTooltip />}
                  position={{ x: 130, y: 30 }}
                />
              </PieChart>
              <Legend
                data={data.map((p, index) => ({
                  name: p.name,
                  value: round2decimal((p.value / totalNumOfArticles) * 100),
                  color: COLORS[index % COLORS.length],
                }))}
              />
            </>
          )}
          {!contentFlag && !isLoading && (
            <>
              <Spacer height="59.5px" />
              <NoData />
            </>
          )}
        </WidgetContainer>
      </ResponsiveContainer>
    </WidgetCard>
  );
};

export default PieGraph;
