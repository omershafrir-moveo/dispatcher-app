import {
  Container,
  ArticlesContainer,
  Item,
  UpButtonWrapper,
} from "./ArticlesLayout.styles";
import { ArticleProps } from "../../components/ArticleCard/ArticleCard";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { useRef, useState } from "react";
import IconButton from "../../components/IconButton/IconButton";
import UpArrowIcon from "../../components/Icons/UpArrowIcon";
import useDesktop from "../../hooks/useDesktop";
import FadeWrapper from "../../components/FadeWrapper/FadeWrapper";

export type ArticlesLayoutProps = {
  articles: ArticleProps[];
  fetchNextPage: any;
  hasNextPage: boolean;
};

const ArticlesLayout: React.FC<ArticlesLayoutProps> = ({
  articles,
  fetchNextPage,
  hasNextPage,
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
    </ArticlesContainer>
  );
};

export default ArticlesLayout;
