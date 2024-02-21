import {
  Container,
  ArticlesContainer,
  Item,
  UpButtonWrapper,
  EndErrorContainer,
} from "./ArticlesLayout.styles";
import { ArticleProps } from "../../components/ArticleCard/ArticleCard";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { useRef, useState } from "react";
import IconButton from "../../components/IconButton/IconButton";
import UpArrowIcon from "../../components/Icons/UpArrowIcon";
import useDesktop from "../../hooks/useDesktop";
import FadeWrapper from "../../components/FadeWrapper/FadeWrapper";
import Typography from "../../components/Typography/Typography";
import { Status } from "../../util/apiService.types";

export type ArticlesLayoutProps = {
  articles: ArticleProps[];
  fetchNextPage: any;
  hasNextPage: boolean;
  errorMsg: string;
};

const ArticlesLayout: React.FC<ArticlesLayoutProps> = ({
  articles,
  fetchNextPage,
  hasNextPage,
  errorMsg,
}) => {
  const scrolledContainerRef = useRef<HTMLUListElement>(null);

  const handleScrollEnd = () => {
    if (scrolledContainerRef.current) {
      if (
        hasNextPage &&
        scrolledContainerRef.current.scrollTop ===
          scrolledContainerRef.current.scrollHeight -
            scrolledContainerRef.current.clientHeight
      ) {
        console.log("fetching!");

        fetchNextPage();
        scrolledContainerRef.current.scrollTo({
          top: scrolledContainerRef.current.scrollTop + 150,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <ArticlesContainer ref={scrolledContainerRef} onScroll={handleScrollEnd}>
      {articles?.map((article: ArticleProps, index) => (
        <Item key={index}>
          <FadeWrapper>
            <ArticleCard
              author={article.author}
              content={article.content}
              description={article.description}
              publishedAt={article.publishedAt}
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              source={article.source}
            />
          </FadeWrapper>
        </Item>
      ))}
      {errorMsg && (
        <EndErrorContainer className="EndErrorContainer">
          <Typography size="18px" color="#5A5A89" textAlign="center">
            {errorMsg}
          </Typography>
        </EndErrorContainer>
      )}
    </ArticlesContainer>
  );
};

export default ArticlesLayout;
