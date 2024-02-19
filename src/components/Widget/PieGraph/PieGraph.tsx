import { PieChart, Pie, Cell } from "recharts";
import Legend from "./Legend/Legend";
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import Typography from "../../Typography/Typography";
import WidgetCard from "../WidgetCard/WidgetCard";
import HorizontalLine from "../../Icons/HorizontalLine";
import { WidgetProps } from "../WidgetContainer/WidgetsSection/WidgetsSection";
import NoData from "../../Icons/NoData";
import Spacer from "../../Container/Spacer/Spacer";
import Loading from "../../Loading/Loading";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { round2decimal } from "../../../util/util";

const PieGraph: React.FC<WidgetProps> = ({ articles, isLoading }) => {
  const COLORS = [
    "#1f77b4",
    "#cdd9ea",
    "#ff7f0e",
    "#ffbb78",
    "#2ca02c",
    "#98df8a",
    "#460909",
    "#ff9896",
    "#9467bd",
    "#c5b0d5",
    "#8c564b",
    "#c49c94",
    "#e377c2",
    "#f7b6d2",
    "#7f7f7f",
    "#c7c7c7",
    "#bcbd22",
    "#dbdb8d",
    "#17becf",
    "#9edae5",
    "#393b79",
    "#020202",
    "#6b6ecf",
    "#9c9ede",
    "#637939",
    "#8ca252",
    "#b5cf6b",
    "#cedb9c",
    "#8c6d31",
    "#bd9e39",
  ];
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
    return sourceArray;
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
      <WidgetContainer>
        {isLoading && <LoadingSpinner />}
        {contentFlag && (
          <>
            <PieChart width={124} height={124}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={62}
                innerRadius={54}
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
                {articles.length}
              </text>
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
    </WidgetCard>
  );
};

export default PieGraph;
