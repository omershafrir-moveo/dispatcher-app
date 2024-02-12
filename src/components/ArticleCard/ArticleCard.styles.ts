import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 100%;
  max-width: 988px;
  flex-direction: row;
  border-radius: 20px;
  gap: 17px;
  border: 1px solid #d9dbe9;
`;

export const PhotoContainer = styled.img<{ src: string; alt: string }>`
  border-radius: 20px 0px 0px 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-start;
  width: 100%;
`;

export const DataContainer = styled.div`
  border-radius: 0px 20px 20px 0px;
  width: 100%;
  border-left: none;
  display: flex;
  gap: 14px;
  flex-direction: column;
  align-items: flex-end;
`;
