import PieGraph from "../PieGraph/PieGraph";
import MonthsGraph from "../MonthsGraph/MonthsGraph";
import Spacer from "../../Container/Spacer/Spacer";
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import { ArticleProps } from "../../ArticleCard/ArticleCard";
import { sourcesDataMock, datesDataMock } from "../data";
import React from "react";

export type WidgetProps = {
  articles: ArticleProps[];
  children?: React.ReactNode;
};

const WidgetsSection: React.FC<{ articles: ArticleProps[] }> = ({
  articles,
}) => {
  return (
    <WidgetContainer>
      <PieGraph articles={articles} />
      <Spacer height="24px" />
      <MonthsGraph articles={articles} />
      <Spacer height="24px" />
    </WidgetContainer>
  );
};

export default WidgetsSection;
