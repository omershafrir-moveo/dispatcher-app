import {
  Card,
  PhotoContainer,
  InfoContainer,
  DataContainer,
} from "./ArticleCard.styles";
import Typography from "../Typography/Typography";
import DispatcherButton from "../DispatcherButton/DispatcherButton";
import Spacer from "../Container/Spacer/Spacer";

export type ArticleInfoProps = {
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
  info: ArticleInfoProps;
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
      <DataContainer>
        <InfoContainer>
          <Typography margin="17px 0px 0px 0px">{props.info.date}</Typography>
          <Spacer height="14px" />
          <Typography color="#000000" size="18px" width="470px" height="42px">
            {props.info.title}
          </Typography>
          <Spacer height="14px" />
          <Typography>{props.info.source}</Typography>
          <Spacer height="14px" />
          <Typography color="#5A5A89" width="711px" height="32px">
            {props.info.body}
          </Typography>
          <Spacer height="24px" />
        </InfoContainer>
        {props.info.button}
      </DataContainer>
    </Card>
  );
};

export default ArticleCard;
