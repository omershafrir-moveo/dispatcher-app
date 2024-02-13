import {
  FilterToolbarContainer,
  FiltersWrapper,
} from "./MobileFiltersToolbar.styles";
import { FiltersLayoutProps } from "../../layout/BodyLayout/FiltersLayout/FiltersLayout";
import FiltersIcon from "../Icons/FiltersIcon";
import IconButton from "../IconButton/IconButton";
import SortDropdown from "../SortDropdown/SortDropdown";
const MobileFiltersToolbar: React.FC<FiltersLayoutProps> = (props) => {
  const handleFilterClick = () => {};

  return (
    <FilterToolbarContainer className="FilterToolbarContainer">
      <FiltersWrapper className="FiltersWrapper">
        <SortDropdown />
        <IconButton handleClick={handleFilterClick}>
          <FiltersIcon />
        </IconButton>
      </FiltersWrapper>
    </FilterToolbarContainer>
  );
};

export default MobileFiltersToolbar;
