import styled from "styled-components";
import { ArticlePhotoProps } from "./ArticleCard";

export const Card = styled.div`
  display: flex;
  height: 242px;
  width: 986;
`;

export const PhotoContainer = styled.img<ArticlePhotoProps>`
  border-radius: 20px 0px 0px 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 741px;
`;

export const DataContainer = styled.div`
  padding: 0px 16px 0px 17px;
  background-color: #ffffff;
  height: 242px;
  width: 741px;
  border-radius: 0px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
