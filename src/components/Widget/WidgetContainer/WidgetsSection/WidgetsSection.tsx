import PieGraph from "../../PieGraph/PieGraph";
import MonthsGraph from "../../MonthsGraph/MonthsGraph";
import WidgetContainer from "../WidgetContainer";
import { ArticleProps } from "../../../ArticleCard/ArticleCard";
import React from "react";
import { WidgetsSectionContainer } from "./WidgetsSection.styles";
export type WidgetProps = {
  articles: ArticleProps[];
  isLoading: boolean;
  children?: React.ReactNode;
};

const WidgetsSection: React.FC<{
  articles: ArticleProps[]; 
  isLoading: boolean;
}> = ({ articles, isLoading }) => {
  return (
    <WidgetsSectionContainer>
      <PieGraph articles={articles} isLoading={isLoading} />
      <MonthsGraph articles={articles} isLoading={isLoading} />
    </WidgetsSectionContainer>
  );
};

export default WidgetsSection;
