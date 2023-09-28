import styled from "styled-components";
import { ArticlePhotoProps, ArticleTextProps } from "./ArticleCard";

export const Card = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  /* background-color: #ffffff; */
  height: 242px;
  width: 986;
`;

export const PhotoContainer = styled.img<ArticlePhotoProps>`
  border-radius: 20px 0px 0px 20px;
`;

export const TextContainer = styled.div<{ children?: React.ReactNode }>`
  padding: 0px 16px 0px 17px;
  background-color: #ffffff;
  height: 242px;
  width: 741px;
  border-radius: 0px 20px 20px 0px;
  display: flex;
  flex-direction: column;
`;
