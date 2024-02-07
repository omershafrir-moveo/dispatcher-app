import {
  Card,
  PhotoContainer,
  InfoContainer,
  DataContainer,
} from "./ArticleCard.styles";
import Typography from "../Typography/Typography";
import DispatcherButton from "../DispatcherButton/DispatcherButton";

export type sourceProps = {
  id: string;
  name: string;
};

export type ArticleProps = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
  source: sourceProps;
};

const ArticleCard: React.FC<ArticleProps> = (props) => {
  return (
    <Card>
      <PhotoContainer
        src={props.urlToImage}
        alt={props.title}
        width="244px"
        height="242px"
      />
      <DataContainer>
        <InfoContainer>
          <Typography margin="17px 0px 0px 0px">{props.publishedAt}</Typography>
          <Typography
            color="#000000"
            weight="bold"
            size="18px"
            width="470px"
            height="42px"
          >
            {props.title}
          </Typography>
          <Typography>{props.source.name}</Typography>
          <Typography color="#5A5A89" width="711px" height="32px">
            {props.content}
          </Typography>
        </InfoContainer>
        <DispatcherButton
          text="NAVIGATE TO DISPATCH"
          handleClick={() => {
            window.open(props.url, "_blank");
          }}
        />
      </DataContainer>
    </Card>
  );
};

export default ArticleCard;
