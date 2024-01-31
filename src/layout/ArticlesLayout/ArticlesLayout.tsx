import { Container, ArticlesContainer, Item } from "./ArticlesLayout.styles";
import { ArticleProps } from "../../components/ArticleCard/ArticleCard";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Typography from "../../components/Typography/Typography";

export type ArticlesLayoutProps = {
  articles: ArticleProps[];
};

const ArticlesLayout: React.FC<ArticlesLayoutProps> = (props) => {
  return (
    <ArticlesContainer>
      {props.articles.map((article: ArticleProps, index) => (
        <Item key={index}>
          <ArticleCard photo={article.photo} info={article.info} />
        </Item>
      ))}
    </ArticlesContainer>
  );
};

export default ArticlesLayout;
