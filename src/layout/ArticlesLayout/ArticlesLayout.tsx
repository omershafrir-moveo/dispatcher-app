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
  const [isAtTop, setIsAtTop] = useState(true);
  const isDesktop = useDesktop();
  const handleScrollEnd = () => {
    if (scrolledContainerRef.current) {
      setIsAtTop(scrolledContainerRef.current.scrollTop === 0);
      if (
        hasNextPage &&
        scrolledContainerRef.current.scrollTop ===
          scrolledContainerRef.current.scrollHeight -
            scrolledContainerRef.current.clientHeight
      ) {
        fetchNextPage();
      }
    }
  };
  const handleTopArrowClick = () => {
    if (scrolledContainerRef.current) {
      scrolledContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    window.scrollTo(0, 0);
  };

  const shouldDisplayArrow = () => {
    if (scrolledContainerRef.current)
      return scrolledContainerRef.current.scrollTop != 0;
  };
  return (
    <ArticlesContainer ref={scrolledContainerRef} onScroll={handleScrollEnd}>
      {articles?.map((article: ArticleProps, index) => (
        <FadeWrapper>
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
        </FadeWrapper>
      ))}
      {!isDesktop && !isAtTop && (
        <FadeWrapper>
          <UpButtonWrapper>
            <IconButton handleClick={handleTopArrowClick}>
              <UpArrowIcon />
            </IconButton>
          </UpButtonWrapper>
        </FadeWrapper>
      )}
    </ArticlesContainer>
  );
};

export default ArticlesLayout;
