import { FiltersToolbar } from "./FiltersLayout.styles";
import DropDownMenu from "../../../components/DropdownMenu/DropDownMenu";
import { filterType } from "./FilterLayout.types";

export type FiltersLayoutProps = {
  mode: searchMode;
};
export type searchMode = "TOP-HEADLINES" | "EVERYTHING";

const FiltersLayout: React.FC<FiltersLayoutProps> = (props) => {
  const filters: filterType[] =
    props.mode == "EVERYTHING"
      ? ["DATES", "SOURCES", "LANGUAGE"]
      : ["COUNTRY", "CATEGORY", "SOURCES"];

  return (
    <FiltersToolbar>
      {/* {filters.map((f: filterType, index: number) => (
        <DropDownMenu />
      ))} */}
    </FiltersToolbar>
  );
};

export default FiltersLayout;
