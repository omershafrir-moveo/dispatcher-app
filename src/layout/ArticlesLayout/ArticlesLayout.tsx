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
import Typography from "../../components/Typography/Typography";
import { Fade } from "react-awesome-reveal";

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
    <ArticlesContainer
      className="ArticlesContainer"
      ref={scrolledContainerRef}
      onScroll={handleScrollEnd}
    >
      {articles?.map((article: ArticleProps, index) => (
        <Item key={index}>
          <Fade>
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
          </Fade>
        </Item>
      ))}
      {errorMsg && (
        <Fade>
          <EndErrorContainer className="EndErrorContainer">
            <Typography size="18px" color="#5A5A89" textAlign="center">
              {errorMsg}
            </Typography>
          </EndErrorContainer>
        </Fade>
      )}
    </ArticlesContainer>
  );
};

export default ArticlesLayout;
