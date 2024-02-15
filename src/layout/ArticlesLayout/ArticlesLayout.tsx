import { Container, ArticlesContainer, Item } from "./ArticlesLayout.styles";
import { ArticleProps } from "../../components/ArticleCard/ArticleCard";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Typography from "../../components/Typography/Typography";
import { useRef } from "react";

export type ArticlesLayoutProps = {
  articles: ArticleProps[];
  fetchNextPage: any;
};

const ArticlesLayout: React.FC<ArticlesLayoutProps> = ({
  articles,
  fetchNextPage,
}) => {
  const scrolledContainerRef = useRef<HTMLUListElement>(null);
  const handleScrollEnd = () => {
    if (scrolledContainerRef.current) {
      if (
        scrolledContainerRef.current.scrollTop ===
        scrolledContainerRef.current.scrollHeight -
          scrolledContainerRef.current.clientHeight
      ) {
        console.log("ScrollEnd!");
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
    </ArticlesContainer>
  );
};

export default ArticlesLayout;
