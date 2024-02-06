import { Container, DataContainer } from "./BodyLayout.styles";
import ArticlesLayout from "../ArticlesLayout/ArticlesLayout";
import Typography from "../../components/Typography/Typography";
import WidgetsSection from "../../components/Widget/WidgetsSection/WidgetsSection";
import ArticleCard, {
  ArticleProps,
} from "../../components/ArticleCard/ArticleCard";
import DispatcherButton from "../../components/DispatcherButton/DispatcherButton";
import { useContext } from "react";
import { SearchContext } from "../../components/SearchContext/SearchContext";

const articleMock: ArticleProps = {
  photo: {
    src: "https://a.espncdn.com/photo/2021/0801/r889086_1296x729_16-9.jpg",
    alt: "SEAN STRICKLAND",
  },
  info: {
    date: "Friday Jun 25, 2021",
    body: "There's nothing flashy about Sean Strickland, unless you're counting the punches he relentlessly flashes into the face of his opponent. Strickland won his fifth fight in a row on Saturday night, ove… [+1595 chars]",
    source: "Jeff Wagenheim, ESPN",
    title:
      "Sean Strickland dominates Uriah Hall in unanimous decision for 5th straight win - ESPN",
    button: (
      <DispatcherButton text="NAVIGATE TO DISPATCH" handleClick={() => {}} />
    ),
  },
};

export const articlesArrayMock: ArticleProps[] = [
  articleMock,
  articleMock,
  articleMock,
  articleMock,
  articleMock,
  articleMock,
];

const BodyLayout: React.FC<{ articles: ArticleProps[] }> = ({articles}) => {
  const { filterValue, filtersValues } = useContext(SearchContext);
  const topHeadlinesCondition =
    filterValue.key == 0 &&
    ["israel", "none"].includes(filtersValues.country!.value);
  return (
    <Container>
      {topHeadlinesCondition && (
        <Typography color="#262146" size="24px" weight="medium">
          Top Headlines in Israel
        </Typography>
      )}
      {!topHeadlinesCondition && (
        <Typography size="14px" weight="regular" letterSpacing="0.25px">
          {`${articles.length} Total Results`}
        </Typography>
      )}
      <DataContainer>
        <ArticlesLayout articles={articles} />
        <WidgetsSection />
      </DataContainer>
    </Container>
  );
};

export default BodyLayout;
