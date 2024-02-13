import styled from "styled-components";

export const FilterToolbarContainer = styled.div<{
  children?: React.ReactNode;
}>`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const FiltersWrapper = styled.div`
  width: calc(100% - 24px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
