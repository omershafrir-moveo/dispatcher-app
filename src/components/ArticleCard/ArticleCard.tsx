import {
  Card,
  PhotoContainer,
  InfoContainer,
  DataContainer,
  ButtonWrapper,
} from "./ArticleCard.styles";
import Typography from "../Typography/Typography";
import DispatcherButton from "../DispatcherButton/DispatcherButton";
import { SelectOptionType } from "../../global-data";
import Image from "../Image/Image";
import Photograph from "../Photograph/Photograph";
import { formatDate } from "../../util/util";
import useMobile from "../../hooks/useMobile";

export type ArticleProps = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
  source: { id: string; name: string };
};

const ArticleCard: React.FC<ArticleProps> = (props) => {
  const isMobile = useMobile();
  return (
    <Card className="Card">
      <Image src={props.urlToImage} alt={props.title} />
      <DataContainer className="DataContainer">
        <InfoContainer className="InfoContainer">
          <Typography>{formatDate(props.publishedAt)}</Typography>
          <Typography
            color="#000000"
            weight="bold"
            size="18px"
            maxHeight={isMobile ? "63px" : "none"}
          >
            {props.title}
          </Typography>
          <Typography >{props.source.name}</Typography>
          <Typography color="#5A5A89">{props.content}</Typography>
          <ButtonWrapper className="ButtonWrapper">
            <DispatcherButton
              text="NAVIGATE TO DISPATCH"
              handleClick={() => {
                window.open(props.url, "_blank");
              }}
            />
          </ButtonWrapper>
        </InfoContainer>
      </DataContainer>
    </Card>
  );
};

export default ArticleCard;
