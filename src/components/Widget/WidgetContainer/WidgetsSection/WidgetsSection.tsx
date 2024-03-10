import PieGraph from "../../PieGraph/PieGraph";
import MonthsGraph from "../../MonthsGraph/MonthsGraph";
import WidgetContainer from "../WidgetContainer";
import { ArticleProps } from "../../../ArticleCard/ArticleCard";
import React from "react";
import { WidgetsSectionContainer } from "./WidgetsSection.styles";
import { Fade } from "react-awesome-reveal";

export type WidgetProps = {
  articles: ArticleProps[];
  isLoading: boolean;
  children?: React.ReactNode;
  tooltip?: boolean | undefined;
};

const WidgetsSection: React.FC<{
  articles: ArticleProps[];
  isLoading: boolean;
}> = ({ articles, isLoading }) => {
  return (
    <WidgetsSectionContainer className="WidgetsSectionContainer">
      <Fade>
        <PieGraph articles={articles} isLoading={isLoading} />
      </Fade>
      <Fade>
        <MonthsGraph articles={articles} isLoading={isLoading} tooltip/>
      </Fade>
    </WidgetsSectionContainer>
  );
};

export default WidgetsSection;
