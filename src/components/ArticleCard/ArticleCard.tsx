import {
  Card,
  PhotoContainer,
  InfoContainer,
  DataContainer,
} from "./ArticleCard.styles";
import Typography from "../Typography/Typography";
import DispatcherButton from "../DispatcherButton/DispatcherButton";
import { SelectOptionType } from "../../global-data";

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

const noImageUrl =
  "https://usercontent.one/wp/www.vocaleurope.eu/wp-content/uploads/no-image.jpg?media=1642546813";
const imageValid = async (urlToImage: string) => {
  try {
    const response = await fetch(urlToImage, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    return false;
  }
};

const getPhoto = async (urlToImage: string): string => {
  try {
    const response = await fetch(urlToImage, { method: "HEAD" });
    return response.ok ? urlToImage : noImageUrl;
  } catch (error) {
    return noImageUrl;
  }
};

const ArticleCard: React.FC<ArticleProps> = (props) => {
  return (
    <Card>
      <PhotoContainer
        src={getPhoto(props.urlToImage)}
        // src={imageValid(props.urlToImage) ? props.urlToImage : noImageUrl }
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
