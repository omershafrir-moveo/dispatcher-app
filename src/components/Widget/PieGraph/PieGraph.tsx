import { ResponsiveContainer, PieChart, Pie, Cell, Label} from "recharts";
import { sourcesDataMock as data } from "../data";
import { Height } from "@mui/icons-material";
import styled from "styled-components";
import Legend from './Legend'

const PieGraph = () => {
  const COLORS = ["#030035", "#343A6E", "#E8E8E8", "#FF9800"];

  return (
    <div>
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
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Label position="inside">Sum</Label>
        {/* <Label position="inside" content={<button> Sum</button>}/> */}
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
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieGraph;
