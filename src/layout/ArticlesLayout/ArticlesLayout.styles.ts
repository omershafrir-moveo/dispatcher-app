import styled from "styled-components";
import { device } from "../../util/breakpoints";

export const Container = styled.div<{ children?: React.ReactNode }>``;

export const ArticlesContainer = styled.ul<{ children?: React.ReactNode }>`
  height: 100%;
  max-height: 1160px; // for scrolling
  width: 100%;
  padding-left: 0px;
  gap: 24px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Item = styled.li<{ children?: React.ReactNode }>`
  list-style-type: none;
`;

export const UpButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  position: fixed;
  bottom: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 4px 2px 0px;
  border-radius: 50%;
`;
