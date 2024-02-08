import {
  BodyLayoutContainer,
  DataContainer,
  EmptyStateContainer,
  HeadlinesContainer,
  TopContainer,
  TypoContainer,
} from "./BodyLayout.styles";
import ArticlesLayout from "../ArticlesLayout/ArticlesLayout";
import Typography from "../../components/Typography/Typography";
import WidgetsSection from "../../components/Widget/WidgetsSection/WidgetsSection";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../components/SearchContext/SearchContext";
import { getArticles, getParams } from "../../util/apiService";
import NoArticles from "../../components/Icons/NoArticles";
import { useQuery } from "@tanstack/react-query";

const BodyLayout: React.FC = () => {
  const { searchValue, filterValue, filtersValues, datesRange, sortMode } =
    useContext(SearchContext);
  const [articles, setArticles] = useState([]);
  const topHeadlinesCondition =
    articles.length != 0 &&
    filterValue.key == 0 &&
    ["israel", "none"].includes(filtersValues.country!.value);
  const resultsCondition = !topHeadlinesCondition && articles.length != 0;

  const fetchData = async () => {
    const params = getParams(
      filterValue,
      filtersValues,
      searchValue,
      datesRange,
      sortMode
    );
    const data = await getArticles(params);
    setArticles(data.articles);
    return data;
  };

  const query = useQuery({
    queryFn: () => fetchData(),
    queryKey: [
      "articles",
      { searchValue, filterValue, filtersValues, datesRange, sortMode },
    ],
  });

  return (
    <>
      <TopContainer className="TopContainer">
        <HeadlinesContainer className="HeadlinesContainer">
          {topHeadlinesCondition && (
            <Typography color="#262146" size="24px" weight="bold">
              Top Headlines in Israel
            </Typography>
          )}
          {resultsCondition && (
            <Typography size="14px" weight="regular" letterSpacing="0.25px">
              {`${articles.length} Total Results`}
            </Typography>
          )}
        </HeadlinesContainer>
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
            {articles.length != 0 && <ArticlesLayout articles={articles} />}
          </DataContainer>
          <WidgetsSection />
        </BodyLayoutContainer>
      </TopContainer>
    </>
  );
};

export default BodyLayout;
