import { PieChart, Pie, Cell, Label } from "recharts";
import Legend from "./Legend/Legend";
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import Typography from "../../Typography/Typography";
import WidgetCard from "../WidgetCard/WidgetCard";
import HorizontalLine from "../../Icons/HorizontalLine";
import { WidgetProps } from "../WidgetsSection/WidgetsSection";
import NoData from "../../Icons/NoData";
import Spacer from "../../Container/Spacer/Spacer";

const PieGraph: React.FC<WidgetProps> = (props) => {
  const COLORS = ["#030035", "#343A6E", "#E8E8E8", "#FF9800"];
  const { data }: { data: { name: string; value: number }[] } = props;

  let contentFlag = data.length > 0;
  return (
    <WidgetCard type="pie">
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
