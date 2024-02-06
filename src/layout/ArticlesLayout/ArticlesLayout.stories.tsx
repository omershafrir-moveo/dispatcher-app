import ArticlesLayout from "./ArticlesLayout";
import { Meta, StoryObj } from "@storybook/react";
import { ArticleProps } from "../../components/ArticleCard/ArticleCard";
import DispatcherButton from "../../components/DispatcherButton/DispatcherButton";

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

const articlesArrayMock: ArticleProps[] = [
  articleMock,
  articleMock,
  articleMock,
  articleMock,
  articleMock,
  articleMock,
];


const meta: Meta<typeof ArticlesLayout> = {
  title: "ArticlesLayout",
  component: ArticlesLayout,
};

export default meta;

type StoryType = StoryObj<typeof meta>;
export const ArticlesLayoutTemplate: StoryType = {
  args: {
    articles: articlesArrayMock,
  },
};
