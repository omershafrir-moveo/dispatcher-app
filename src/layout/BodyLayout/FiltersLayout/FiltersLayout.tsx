import { FiltersToolbar } from "./FiltersLayout.styles";
import DropDownMenu from "../../../components/DropdownMenu/DropDownMenu";
import { modeArray, filterArray } from "./FilterLayout.types";
import { SelectOptionType } from "../../../global-data";
import { dataMock, noneOption } from "./FilterLayout.types";

export type FiltersLayoutProps = {
  mode: SelectOptionType;
};

const FiltersLayout: React.FC<FiltersLayoutProps> = (props) => {
  const filters: SelectOptionType[] =
    props.mode.key == 1
      ? [filterArray[2], filterArray[3], filterArray[0]]
      : [filterArray[0], filterArray[1]];

  return (
    <FiltersToolbar>
      {filters.map((f: SelectOptionType, index: number) => (
        <DropDownMenu
          defaultItemName={f}
          handleSelectedOptionChange={() => {}}
          itemsNames={
            f.value == "language"
              ? dataMock.language
              : f.value == "category"
              ? dataMock.category
              : dataMock.country
          }
          selectedOption={noneOption}
          theme="default"
          key={index}
        />
      ))}
    </FiltersToolbar>
  );
};

export default FiltersLayout;
