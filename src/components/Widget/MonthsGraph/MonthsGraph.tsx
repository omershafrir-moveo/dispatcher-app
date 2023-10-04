import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import WidgetCard from "../WidgetCard/WidgetCard";
import Typography from "../../Typography/Typography";
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import {
  datesDataMock as data,
  dateObj,
  datesDataMock,
  sortFunc,
} from "../data";

const monthAbbreviations = (date: dateObj) => {
  switch (date.month) {
    case 1:
      return 'JAN';
    case 2:
      return 'FEB';
    case 3:
      return 'MAR';
    case 4:
      return 'APR';
    case 5:
      return 'MAY';
    case 6:
      return 'JUN';
    case 7:
      return 'JUL';
    case 8:
      return 'AUG';
    case 9:
      return 'SEP';
    case 10:
      return 'OCT';
    case 11:
      return 'NOV';
    case 12:
      return 'DEC';
  }
};
// const monthAbbreviations = (str: string) => {
//   const date = new Date(str);
//   return date.toLocaleString("default", { month: "short" });
// };

const MonthsGraph = () => {
  data.sort(sortFunc);

  return (
    <WidgetCard>
      <Typography color="#000000" size="24px" weight="700">
        Dates
      </Typography>
      <WidgetContainer>
        <AreaChart
          width={382}
          height={149}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          {" "}
          <XAxis dataKey="date" tickFormatter={monthAbbreviations} />
          <Tooltip />
          <Area type="monotone" dataKey="value" fill="#8884d8" />
        </AreaChart>
      </WidgetContainer>
    </WidgetCard>
  );
};

export default MonthsGraph;
