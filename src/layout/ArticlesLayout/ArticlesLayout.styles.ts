import styled from "styled-components";

export const Container = styled.div<{ children?: React.ReactNode }>``;

export const ArticlesContainer = styled.ul<{ children?: React.ReactNode }>`
  height: 1231px;
  max-height: 1231px; // for scrolling
  width: 990px;
  padding-left: 0px;
  gap: 24px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Item = styled.li<{ children?: React.ReactNode }>`
  list-style-type: none;
`;
