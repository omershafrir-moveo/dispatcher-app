import {
  BodyLayoutContainer,
  DataContainer,
  EmptyStateContainer,
  HeadlinesContainer,
  TopContainer,
  TypoContainer,
  ErrorHeadlinesContainer,
} from "./BodyLayout.styles";
import ArticlesLayout from "../ArticlesLayout/ArticlesLayout";
import Typography from "../../components/Typography/Typography";
import WidgetsSection from "../../components/Widget/WidgetContainer/WidgetsSection/WidgetsSection";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../components/SearchContext/SearchContext";
import { getArticles, getParams, getSources } from "../../util/apiService";
import NoArticles from "../../components/Icons/NoArticles";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { SelectOptionType } from "../../global-data";
import { noneOption } from "../../global-data";
import Loading from "../../components/Loading/Loading";
import { validateParams } from "../../util/apiService";
import { ArticleProps } from "../../components/ArticleCard/ArticleCard";
import FadeWrapper from "../../components/FadeWrapper/FadeWrapper";

export type ArticlesResponseType = {
  status: string;
};

const BodyLayout: React.FC = () => {
  const {
    searchValueCopy,
    filterValue,
    filtersValues,
    datesRange,
    sortMode,
    updateSources,
  } = useContext(SearchContext);

  const params = getParams(
    filterValue,
    filtersValues,
    searchValueCopy,
    datesRange,
    sortMode
  );

  const fetchArticles = async ({ pageParam = 1 }) => {
    const data = await getArticles(pageParam, params);
    return data;
  };

  const infiniteArticlesQuery = useInfiniteQuery({
    queryFn: fetchArticles,
    queryKey: [
      "articles",
      { searchValueCopy, filterValue, filtersValues, datesRange, sortMode },
    ],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) return undefined;
      else return allPages.length + 1;
    },
  });

  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    setErrorMsg(validateParams(params));
  }, [searchValueCopy, filterValue, filtersValues]);

  const articles =
    infiniteArticlesQuery.status == "success" &&
    infiniteArticlesQuery.data?.pages.flat().length != 0
      ? (infiniteArticlesQuery.data?.pages
          ?.map((res) =>
            res?.articles && res.articles.length > 0 ? res?.articles : []
          )
          .flat() as ArticleProps[])
      : [];

  const topHeadlinesCondition =
    articles.length != 0 &&
    filterValue.key == 0 &&
    filtersValues.category?.value == "none" &&
    filtersValues.sources?.value == "none" &&
    filtersValues.country?.value == "israel";
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
          <ErrorHeadlinesContainer className="ErrorHeadlinesContainer">
            {infiniteArticlesQuery.isLoading && <Loading />}
            {!infiniteArticlesQuery.isLoading && articles.length == 0 && (
              <EmptyStateContainer className="EmptyStateContainer">
                <FadeWrapper>
                  <NoArticles />
                </FadeWrapper>
                <TypoContainer className="TypoContainer">
                  <Typography size="18px" color="#5A5A89">
                    {errorMsg
                      ? errorMsg
                      : "we couldn't find any matches for your query"}
                  </Typography>
                </TypoContainer>
              </EmptyStateContainer>
            )}
          </ErrorHeadlinesContainer>
          {articles.length != 0 && (
            <ArticlesLayout
              articles={articles}
              fetchNextPage={infiniteArticlesQuery.fetchNextPage}
              hasNextPage={infiniteArticlesQuery.hasNextPage}
            />
          )}
        </DataContainer>

        <WidgetsSection
          articles={articles}
          isLoading={infiniteArticlesQuery.isLoading}
        />
      </BodyLayoutContainer>
    </TopContainer>
  );
};

export default BodyLayout;
