import {
  Container,
  ArticlesContainer,
  Item,
  UpButtonWrapper,
} from "./ArticlesLayout.styles";
import { ArticleProps } from "../../components/ArticleCard/ArticleCard";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Typography from "../../components/Typography/Typography";
import { useRef } from "react";
import IconButton from "../../components/IconButton/IconButton";
import UpArrowIcon from "../../components/Icons/UpArrowIcon";

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
    if (scrolledContainerRef.current && hasNextPage) {
      if (
        scrolledContainerRef.current.scrollTop ===
        scrolledContainerRef.current.scrollHeight -
          scrolledContainerRef.current.clientHeight
      ) {
        fetchNextPage();
      }
    }
  };

  return (
    <ArticlesContainer ref={scrolledContainerRef} onScroll={handleScrollEnd}>
      {articles?.map((article: ArticleProps, index) => (
        <Item key={index}>
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
        </Item>
      ))}
      <UpButtonWrapper>
        <IconButton
          handleClick={() => {
            if (scrolledContainerRef.current) {
              scrolledContainerRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
            window.scrollTo(0, 0);
          }}
        >
          <UpArrowIcon />
        </IconButton>
      </UpButtonWrapper>
    </ArticlesContainer>
  );
};

export default ArticlesLayout;
