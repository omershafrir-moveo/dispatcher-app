import styled from "styled-components";
import { ArticleProps } from "./ArticleCard";

export const Card = styled.div`
  display: flex;
  height: 242px;
  width: 955px;
  border-radius: 20px;
`;

export const PhotoContainer = styled.img<{src:string, alt:string}>`
  border-radius: 20px 0px 0px 20px;
  border: 1px solid #d9dbe9;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-start;
  width: 711px;
`;

export const DataContainer = styled.div`
  padding: 0px 16px 0px 17px;
  background-color: #ffffff;
  height: 242px;
  border-radius: 0px 20px 20px 0px;
  border: 1px solid #d9dbe9;
  border-left: none;
  display: flex;
  gap: 14px;
  flex-direction: column;
  align-items: flex-end;
`;
