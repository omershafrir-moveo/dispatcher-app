import styled from "styled-components";
import { SelectOptionType } from "../../global-data";
import { device } from "../../util/breakpoints";

export const MobileToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 58px;
  gap: 12px;
  background-color: #ffffff;
  border-bottom: solid 1px #d9dbe9;

  /* @media ${device.tablet} {
    height: 44px;
  } */
`;

export const MobileToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 12px);
`;

export const FiltersWrapper = styled.div<{ mode: SelectOptionType }>`
  width: calc(100% - 24px);
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  z-index: 0;

  @media ${device.tablet} {
    justify-content: space-between;
    gap: 10px;
  }
`;

export const MobileFiltersToolbarWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  z-index: -1;
`;
