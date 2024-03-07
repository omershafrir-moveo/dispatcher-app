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
import { useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../../components/SearchContext/SearchContext";
import { getArticles, getParams, getSources } from "../../util/apiService";
import NoArticles from "../../components/Icons/NoArticles";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { SelectOptionType } from "../../global-data";
import { noneOption } from "../../global-data";
import { validateParams } from "../../util/apiService";
import { ArticleProps } from "../../components/ArticleCard/ArticleCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Fade } from "react-awesome-reveal";
import { Status } from "../../util/apiService.types";
import { AxiosError } from "axios";

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

  const errorCodeInterpreter = (code: string): string => {
    switch (code) {
      case "parametersMissing":
        if (filterValue.key == 0)
          return `Required parameters are missing.\nPlease set any of the following parameters: country/category/source or enter a query.`;
        else
          return `Required parameters are missing.\nPlease choose a source or enter a query.`;
      case "noResults":
        return "we couldn't find any matches for your query";
      case "rateLimited":
        return `Unfortunately you have reached the maximal number of requests allowed to a free user.\nIf you wish to view more articles please consider upgrading your plan.`;
      case "maximumResultsReached":
        return "Unfortunately you have reached the maximal number of requests allowed to a free user.\n If you wish to view more articles please consider upgrading your plan.";
      default:
        return "";
    }
  };
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [responseStatus, setResponseStatus] = useState<Status>(Status.SUCCESS);
  const params = getParams(
    filterValue,
    filtersValues,
    searchValueCopy,
    datesRange,
    sortMode
  );

  const fetchArticles = async ({ pageParam = 1 }) => {
    const {
      data,
      responseStatus: ResponseStatus,
      errorMsg: errorCode,
    } = await getArticles(pageParam, params);
    if (errorCode) {
      setErrorMsg(errorCodeInterpreter(errorCode));
    }
    setResponseStatus(ResponseStatus);
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
    retry: false,
  });

  const numOfResults = useRef<number>(0);
  const articles =
    infiniteArticlesQuery.status == "success" &&
    infiniteArticlesQuery.data?.pages.flat().length != 0
      ? (infiniteArticlesQuery.data?.pages
          ?.map((res) => {
            if (res?.articles && res.articles.length > 0) {
              numOfResults.current = res.totalResults;
              return res?.articles;
            } else return [];
          })
          .flat() as ArticleProps[])
      : [];

  // console.log(`'errorMSg' value is: ,${errorMsg}`);
  // console.log(`'articles.length' value is: ,${articles.length}`);

  // if (
  //   errorMsg == "" &&
  //   responseStatus == Status.SUCCESS &&
  //   articles.length == 0
  // ) {
  //   console.log("!@!");

  //   setErrorMsg("we couldn't find any matches for your query");
  // }
  const topHeadlinesCondition =
    articles.length != 0 &&
    filterValue.key == 0 &&
    filtersValues.category?.value == "none" &&
    filtersValues.sources?.value == "none" &&
    filtersValues.country?.value == "il";
  const resultsCondition = articles.length != 0;

  const fetchSources = async () => {
    const { data } = await getSources();
    const sourcesArray: SelectOptionType[] = [noneOption].concat(
      data.sources.map((source: { name: string; id: string }, idx: number) => {
        return { key: idx + 1, title: source.name, value: source.id };
      })
    );
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
            {`${articles.length} of ${numOfResults.current} total results`}
          </Typography>
        )}
      </HeadlinesContainer>
      <BodyLayoutContainer className="BodyLayoutContainer">
        <DataContainer className="DataContainer">
          <ErrorHeadlinesContainer className="ErrorHeadlinesContainer">
            {infiniteArticlesQuery.isLoading && <LoadingSpinner />}
            {!infiniteArticlesQuery.isLoading && articles.length == 0 && (
              <EmptyStateContainer className="EmptyStateContainer">
                <Fade>
                  <NoArticles />
                </Fade>
                <TypoContainer className="TypoContainer">
                  <Typography size="18px" color="#5A5A89" textAlign="center">
                    {errorMsg}
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
              responseStatus={responseStatus}
              errorMsg={errorMsg}
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
