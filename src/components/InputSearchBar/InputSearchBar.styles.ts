import React from "react";
import styled from "styled-components";
import { device } from "../../util/breakpoints";

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 663px;

  @media ${device.mobile} {
    height: 100%;
    justify-content: center;
  }
`;
