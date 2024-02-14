import {
  MobileToolbarContainer,
  FiltersWrapper,
} from "./MobileFiltersToolbar.styles";
import FiltersLayout, {
  FiltersLayoutProps,
} from "../../layout/BodyLayout/FiltersLayout/FiltersLayout";
import FiltersIcon from "../Icons/FiltersIcon";
import IconButton from "../IconButton/IconButton";
import SortDropdown from "../SortDropdown/SortDropdown";
import { useState } from "react";
import { MobileFiltersToolbarWrapper } from "./MobileFiltersToolbar.styles";

import { useSearchContext } from "../SearchContext/SearchContext";
import useViewport, { Viewport } from "../../hooks/useViewport";

const MobileFiltersToolbar: React.FC<FiltersLayoutProps> = (props) => {
  const [isActiveFilters, setIsActiveFilters] = useState(false);
  const handleFilterClick = () => {
    setIsActiveFilters((prevState) => !prevState);
  };
  const vp = useViewport();
  const { filterValue } = useSearchContext();
  return (
    <MobileToolbarContainer className="MobileToolbarContainer">
      <FiltersWrapper className="FiltersWrapper">
        {filterValue.value == 'everything' && <SortDropdown />}
        <IconButton handleClick={handleFilterClick}>
          <FiltersIcon />
        </IconButton>
        {isActiveFilters && (
          <MobileFiltersToolbarWrapper className="MobileFiltersToolbarWrapper">
            <FiltersLayout mode={filterValue} />
          </MobileFiltersToolbarWrapper>
        )}
      </FiltersWrapper>
    </MobileToolbarContainer>
  );
};

export default MobileFiltersToolbar;
