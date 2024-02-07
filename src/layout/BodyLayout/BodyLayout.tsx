import {
  BodyLayoutContainer,
  DataContainer,
  EmptyStateContainer,
  TypoContainer,
} from "./BodyLayout.styles";
import ArticlesLayout from "../ArticlesLayout/ArticlesLayout";
import Typography from "../../components/Typography/Typography";
import WidgetsSection from "../../components/Widget/WidgetsSection/WidgetsSection";
import ArticleCard, {
  ArticleProps,
} from "../../components/ArticleCard/ArticleCard";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../components/SearchContext/SearchContext";
import { getArticles } from "../../util/apiService";
import NoData from "../../components/Icons/NoData";
import NoArticles from "../../components/Icons/NoArticles";

const BodyLayout: React.FC = () => {
  const { filterValue, filtersValues } = useContext(SearchContext);
  const [articles, setArticles] = useState([]);
  const topHeadlinesCondition =
    articles.length != 0 &&
    filterValue.key == 0 &&
    ["israel", "none"].includes(filtersValues.country!.value);
  const resultsCondition = !topHeadlinesCondition && articles.length != 0;

  // const [x, setX] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const xxx = await getArticles();
  //     setX(xxx);
  //   };
  //   fetchData();
  // }, []);
  // console.log(x);

  return (
    <BodyLayoutContainer className="BodyLayoutContainer">
      <DataContainer className="DataContainer">
        {articles.length == 0 && (
          <EmptyStateContainer className="EmptyStateContainer">
            <NoArticles />
            <TypoContainer>
              <Typography size="18px" color="#5A5A89">
                we couldn't find any matches for your query
              </Typography>
            </TypoContainer>
          </EmptyStateContainer>
        )}
        {topHeadlinesCondition && (
          <Typography color="#262146" size="24px" weight="medium">
            Top Headlines in Israel
          </Typography>
        )}
        {resultsCondition && (
          <Typography size="14px" weight="regular" letterSpacing="0.25px">
            {`${articles.length} Total Results`}
          </Typography>
        )}
        {articles.length != 0 && <ArticlesLayout articles={articles} />}
      </DataContainer>
      <WidgetsSection />
    </BodyLayoutContainer>
  );
};

export default BodyLayout;
