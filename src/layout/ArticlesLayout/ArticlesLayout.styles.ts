import styled from "styled-components";
import { COLORS } from "../../global-data";

export const Container = styled.div<{ children?: React.ReactNode }>`
`;

export const ArticlesContainer = styled.ul<{ children?: React.ReactNode }>`
  height: 1231px;
  max-height: 1231px; // for scrolling
  width: 988px;
  padding-left: 0;
  gap: 24px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const Item = styled.li<{ children?: React.ReactNode }>`
  list-style-type: none;
`;
