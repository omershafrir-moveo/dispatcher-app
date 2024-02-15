import {
  MobileToolbarContainer,
  FiltersWrapper,
  MobileToolbarWrapper,
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
      <MobileToolbarWrapper className="MobileToolbarWrapper">
        <FiltersWrapper className="FiltersWrapper" mode={filterValue}>
          {isActiveFilters && <FiltersLayout mode={filterValue} />}
        </FiltersWrapper>
        <IconButton handleClick={handleFilterClick}>
          <FiltersIcon />
        </IconButton>
      </MobileToolbarWrapper>
    </MobileToolbarContainer>
  );
};

export default MobileFiltersToolbar;
