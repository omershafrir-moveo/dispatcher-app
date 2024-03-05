import StyledOption, { TextContainer } from "./DropdownOption.styles";
import DownArrowIcon from "../../Icons/DownArrowIcon";
import { themeOption } from "./DropdownOption.types";
import { OptionDataContainer } from "./DropdownOption.styles";
import { SelectOptionType } from "../../../global-data";
import { IconWrapper } from "../../Container/IconContainer";
import useMobile from "../../../hooks/useMobile";
import lodash from "lodash";
import LanguageIcon from "@mui/icons-material/Language";
import TranslateIcon from "@mui/icons-material/Translate";
import SourceIcon from "@mui/icons-material/Source";
import CategoryIcon from "@mui/icons-material/Category";
import SortIcon from "@mui/icons-material/Sort";
import { getIconByFilter } from "../../../util/util";

export const DropdownOption: React.FC<{
  value: SelectOptionType;
  isInputBox: boolean;
  handleClick: () => void;
  handleBlur?: () => void;
  theme: themeOption;
  disabled?: boolean;
  filterType: string;
}> = (props) => {
  const isMobile = useMobile();
  console.log(`'props.value' value is: ,${props.value.value}`);

  return (
    <StyledOption
      className="StyledOption"
      isInputBox={props.isInputBox}
      onMouseDown={props.handleClick}
      onBlur={props.handleBlur}
      theme={props.theme}
      disabled={props.disabled}
      isFilled={
        ![
          "none",
          "country",
          "sources",
          "language",
          "category",
          "top-headlines",
          "everything",
          "sort-by",
          "relevency",
          "popularity",
          "publishedAt",
        ].includes(props.value.value) && props.isInputBox
      }
    >
      <OptionDataContainer
        className="OptionDataContainer"
        isInputBox={props.isInputBox}
      >
        {isMobile &&
        props.isInputBox &&
        !["top-headlines", "everything"].includes(props.value.value) ? (
          props.filterType == "language" ? (
            <TranslateIcon />
          ) : props.filterType == "country" ? (
            <LanguageIcon />
          ) : props.filterType == "sources" ? (
            <SourceIcon />
          ) : props.filterType == "category" ? (
            <CategoryIcon />
          ) : props.filterType == "sortBy" ? (
            <SortIcon />
          ) : null
        ) : (
          <TextContainer className="TextContainer">
            {props.value.title}
          </TextContainer>
        )}
        {props.isInputBox && !isMobile && (
          <IconWrapper>
            <DownArrowIcon />
          </IconWrapper>
        )}
      </OptionDataContainer>
    </StyledOption>
  );
};

export default DropdownOption;
