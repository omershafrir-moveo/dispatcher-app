import PieGraph from "../PieGraph/PieGraph";
import MonthsGraph from "../MonthsGraph/MonthsGraph";
import Spacer from "../../Container/Spacer/Spacer";
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import { sourcesDataMock, datesDataMock } from "../data";
export type WidgetProps = {
  data: any;
  isValid: boolean;
  children?: React.ReactNode;
};

const WidgetsSection = () => {
  return (
    <WidgetContainer>
      <PieGraph data={sourcesDataMock} isValid={sourcesDataMock.length > 0} />
      <Spacer height="24px" />
      <MonthsGraph data={datesDataMock} isValid={datesDataMock.length > 0} />
      <Spacer height="24px" />
    </WidgetContainer>
  );
};

export default WidgetsSection;
