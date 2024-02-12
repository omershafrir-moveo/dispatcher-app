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
import WidgetsSection from "../../components/Widget/WidgetContainer/WidgetsSection/WidgetsSection";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../components/SearchContext/SearchContext";
import { getArticles, getParams, getSources } from "../../util/apiService";
import NoArticles from "../../components/Icons/NoArticles";
import { useQuery } from "@tanstack/react-query";
import { SelectOptionType } from "../../global-data";
import { noneOption } from "./FiltersLayout/FilterLayout.types";
import Loading from "../../components/Loading/Loading";
import useWidth from "../../hooks/useWidth";
import useViewport, { Viewport } from "../../hooks/useViewport";

const BodyLayout: React.FC = () => {
  const {
    searchValue,
    filterValue,
    filtersValues,
    datesRange,
    sortMode,
    updateSources,
  } = useContext(SearchContext);

  const fetchArticles = async () => {
    const params = getParams(
      filterValue,
      filtersValues,
      searchValue,
      datesRange,
      sortMode
    );
    const data = await getArticles(params);
    return data;
  };

  const articlesQuery = useQuery({
    queryFn: () => fetchArticles(),
    queryKey: [
      "articles",
      { searchValue, filterValue, filtersValues, datesRange, sortMode },
    ],
  });

  const articles = articlesQuery.data?.articles ?? [];
  const topHeadlinesCondition =
    articles.length != 0 &&
    filterValue.key == 0 &&
    filtersValues.category?.value == "none" &&
    filtersValues.sources?.value == "none" &&
    ["israel", "none"].includes(filtersValues.country!.value);
  const resultsCondition = !topHeadlinesCondition && articles.length != 0;

  const fetchSources = async () => {
    const data = await getSources();
    const sourcesArray: SelectOptionType[] = data.sources
      .map((source: { name: string; id: string }, idx: number) => {
        return { key: idx + 1, title: source.name, value: source.id };
      })
      .concat([noneOption]);

    updateSources(sourcesArray);
    return data;
  };

  const sourcesQuery = useQuery({
    queryFn: () => fetchSources(),
    queryKey: ["sources"],
  });

  const viewport = useViewport();
  console.log(`'viewport' value is: ,${viewport}`);

  const width = useWidth();
  return (
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
          {articlesQuery.isLoading && <Loading />}
          {!articlesQuery.isLoading && articles.length == 0 && (
            <EmptyStateContainer className="EmptyStateContainer">
              <NoArticles />
              <TypoContainer>
                <Typography size="18px" color="#5A5A89">
                  we couldn't find any matches for your query
                </Typography>
              </TypoContainer>
            </EmptyStateContainer>
          )}
          {articles.length != 0 && (
            <ArticlesLayout articles={articlesQuery.data.articles} />
          )}
        </DataContainer>
        {viewport == Viewport.DESKTOP && (
          <WidgetsSection
            articles={articles}
            isLoading={articlesQuery.isLoading}
          />
        )}
      </BodyLayoutContainer>
    </TopContainer>
  );
};

export default BodyLayout;
