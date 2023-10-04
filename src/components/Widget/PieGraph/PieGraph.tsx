import { PieChart, Pie, Cell, Label } from "recharts";
import { sourcesDataMock as data } from "../data";
import Legend from "./Legend/Legend";
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import Typography from "../../Typography/Typography";
import WidgetCard from "../WidgetCard/WidgetCard";

const PieGraph = () => {
  const COLORS = ["#030035", "#343A6E", "#E8E8E8", "#FF9800"];

  return <div>23</div>
  // return (
  //   <WidgetCard>
  //     {/* <Typography color="#000000" size="24px" weight="700">
  //       Sources
  //     </Typography> */}
  //     {/* <WidgetContainer>
  //       <PieChart width={124} height={124}>
  //         <Pie
  //           data={data}
  //           dataKey="value"
  //           nameKey="name"
  //           cx="50%"
  //           cy="50%"
  //           outerRadius={62}
  //           innerRadius={54}
  //           stroke=""
  //         >
  //           {data.map((entry, index) => (
  //             <Cell
  //               key={`cell-${index}`}
  //               fill={COLORS[index % COLORS.length]}
  //             />
  //           ))}
  //         </Pie>
  //         <text
  //           x={62}
  //           y={62}
  //           fontFamily="Mulish, sans-serif"
  //           color="#030035"
  //           fontSize={12}
  //           textAnchor="middle"
  //           dominantBaseline="middle"
  //         >
  //           Sum
  //         </text>
  //       </PieChart>
  //       <Legend
  //         data={data.map((p, index) => ({
  //           ...p,
  //           color: COLORS[index % COLORS.length],
  //         }))}
  //       />
  //     </WidgetContainer> */}
  //   </WidgetCard>
  // );
};

export default PieGraph;
