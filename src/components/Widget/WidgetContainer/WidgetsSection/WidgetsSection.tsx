import PieGraph from "../../PieGraph/PieGraph";
import MonthsGraph from "../../MonthsGraph/MonthsGraph";
import WidgetContainer from "../WidgetContainer";
import { ArticleProps } from "../../../ArticleCard/ArticleCard";
import React from "react";
import { WidgetsSectionContainer } from "./WidgetsSection.styles";
import useViewport, { Viewport } from "../../../../hooks/useViewport";
import useTablet from "../../../../hooks/useTablet";
import useDesktop from "../../../../hooks/useDesktop";
import FadeWrapper from "../../../FadeWrapper/FadeWrapper";
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
    <WidgetsSectionContainer className="WidgetsSectionContainer">
      <FadeWrapper>
        <PieGraph articles={articles} isLoading={isLoading} />
      </FadeWrapper>
      <FadeWrapper>
        <MonthsGraph articles={articles} isLoading={isLoading} />
      </FadeWrapper>
    </WidgetsSectionContainer>
  );
};

export default WidgetsSection;
