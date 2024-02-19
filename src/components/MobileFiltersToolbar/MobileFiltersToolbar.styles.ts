import styled from "styled-components";
import { SelectOptionType } from "../../global-data";
import { device } from "../../util/breakpoints";

export const MobileToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: #ffffff;
  border-bottom: solid 1px #d9dbe9;

  @media ${device.tablet} {
    position: relative;
  }
`;

export const MobileToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 12px);

  @media ${device.tablet} {
    height: 65px;
  }
`;

export const FiltersWrapper = styled.div<{ mode: SelectOptionType }>`
  width: calc(100% - 24px);
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
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
