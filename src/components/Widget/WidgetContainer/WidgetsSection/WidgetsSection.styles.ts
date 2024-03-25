import styled from "styled-components";
import { device } from "../../../../util/breakpoints";

export const WidgetsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: flex-start;

  @media ${device.tablet} {
    display: none;
  }
`;
