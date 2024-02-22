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
import { modeArray } from "../../global-data";
import FilterSelect from "../SearchBar/FilterSelect/FilterSelect";
import useTablet from "../../hooks/useTablet";

const MobileFiltersToolbar: React.FC<FiltersLayoutProps> = (props) => {
  const [isActiveFilters, setIsActiveFilters] = useState(false);
  const handleFilterClick = () => {
    setIsActiveFilters((prevState) => !prevState);
  };
  const { filterValue, handleFilterChange } = useSearchContext();
  const isTablet = useTablet();
  return (
    <MobileToolbarContainer className="MobileToolbarContainer">
      <MobileToolbarWrapper className="MobileToolbarWrapper">
        <FiltersWrapper className="FiltersWrapper" mode={filterValue}>
          {isTablet && (
            <FilterSelect
              defaultItemName={filterValue}
              itemsNames={[modeArray[0], modeArray[1]]}
              selectedOption={filterValue}
              handleSelectedOptionChange={handleFilterChange}
              theme="filter"
              disabled={false}
            />
          )}
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
