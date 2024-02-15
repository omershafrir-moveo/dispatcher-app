import styled from "styled-components";
import { SelectOptionType } from "../../global-data";

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
  /* justify-content: ${(props) =>
    props.mode.value == "everything" ? "space-between" : "flex-end"}; */
  justify-content: flex-end;
  position: relative;
  z-index: 0;
`;

export const MobileFiltersToolbarWrapper = styled.div`
  position: absolute;
  /* top: 100%; */
  width: 100%;
  left: 0;
  z-index: -1;
`;
