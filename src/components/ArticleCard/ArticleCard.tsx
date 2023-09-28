import { Card, PhotoContainer, TextContainer } from "./ArticleCard.styles";
import Typography from "../Typography/Typography";
import DispatcherButton from "../DispatcherButton/DispatcherButton";
import Spacer from "../Container/Spacer/Spacer";

export type ArticleTextProps = {
  date: string;
  title: string;
  source: string;
  body: string;
  button: React.ReactNode;
};

export type ArticlePhotoProps = {
  src: string;
  alt: string;
};

export type ArticleProps = {
  photo: ArticlePhotoProps;
  text: ArticleTextProps;
};

const ArticleCard: React.FC<ArticleProps> = (props) => {
  return (
    <Card>
      <PhotoContainer
        src={props.photo.src}
        alt={props.photo.alt}
        width="244px"
        height="242px"
      />
      <TextContainer>
        <Typography margin="17px 0px 0px 0px">{props.text.date}</Typography>
        <Spacer height="14px" />
        <Typography color="#000000" size="18px" width="470px" height="42px">
          {props.text.title}
        </Typography>
        <Spacer height="14px" />
        <Typography>{props.text.source}</Typography>
        <Spacer height="14px" />
        <Typography color="#5A5A89" width="711px" height="32px">
          {props.text.body}
        </Typography>
        <Spacer height="20px" />
        {props.text.button}
      </TextContainer>
    </Card>
  );
};

export default ArticleCard;
