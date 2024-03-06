import styled from "styled-components";
import { device } from "../../util/breakpoints";

export const Container = styled.div<{ children?: React.ReactNode }>``;

export const ArticlesContainer = styled.ul<{ children?: React.ReactNode }>`
  height: calc(100% - 60px);
  width: 100%;
  padding-left: 0px;
  gap: 24px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  position: relative;

  ::-webkit-scrollbar {
    position: absolute;
    width: 10px;
    height: 10px;
    right: -10; /* Position scrollbar to the right */
  }

  ::-webkit-scrollbar-thumb {
    background: #9ea1bb;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  ::-webkit-scrollbar-button {
    display: block;
  }
`;
export const ArticlesDataContainer = styled.div``;
export const Item = styled.li<{ children?: React.ReactNode }>`
  list-style-type: none;
  z-index: 2;
  position: relative;
`;

export const EndErrorContainer = styled.div``;
