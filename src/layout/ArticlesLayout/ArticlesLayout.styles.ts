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

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
    margin: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  ::-webkit-scrollbar-button {
    display: block;
    width: 35px;
    height: 5px;
  }
`;

export const Item = styled.li<{ children?: React.ReactNode }>`
  list-style-type: none;
`;

export const UpButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 50px;
  left: 50px;
  background-color: white;
  box-shadow: rgba(0, 0.6, 0.3, 0.6) 2px 4px 2px 0px;
  border-radius: 50%;

  @media ${device.mobile} {
    width: 40px;
    height: 40px;
    bottom: 40px;
    left: 40px;
  }
`;

export const EndErrorContainer = styled.div``;
