import { Container, ArticlesContainer, Item } from "./ArticlesLayout.styles";
import { ArticleProps } from "../../components/ArticleCard/ArticleCard";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Typography from "../../components/Typography/Typography";

export type ArticlesLayoutProps = {
  articles: ArticleProps[];
};

const ArticlesLayout: React.FC<ArticlesLayoutProps> = ({ articles }) => {
  // console.log(`'articles' value is: ,${JSON.stringify(articles)}`);

  return (
    <ArticlesContainer>
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
