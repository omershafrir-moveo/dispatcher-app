import { PieChart, Pie, Cell } from "recharts";
import Legend from "./Legend/Legend";
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import Typography from "../../Typography/Typography";
import WidgetCard from "../WidgetCard/WidgetCard";
import HorizontalLine from "../../Icons/HorizontalLine";
import { WidgetProps } from "../WidgetsSection/WidgetsSection";
import NoData from "../../Icons/NoData";
import Spacer from "../../Container/Spacer/Spacer";
import { ArticleProps } from "../../ArticleCard/ArticleCard";

const PieGraph: React.FC<WidgetProps> = ({ articles }) => {
  const COLORS = ["#030035", "#343A6E", "#E8E8E8", "#FF9800"];
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

  return (
    <WidgetCard type={data.length > 0 ? "pie" : "no-data"}>
      <Typography color="#000000" size="24px" weight="700">
        Sources
      </Typography>
      <HorizontalLine />
      <WidgetContainer>
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
                Sum
              </text>
            </PieChart>
            <Legend
              data={data.map((p, index) => ({
                ...p,
                color: COLORS[index % COLORS.length],
              }))}
            />
          </>
        )}
        {!contentFlag && (
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
