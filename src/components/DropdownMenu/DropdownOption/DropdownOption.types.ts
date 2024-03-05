import { COLORS } from "../../../global-data";
type themeProperty = (theme: themeOption) => any;
type themeType = {
  maxWidth: themeProperty;
  height: themeProperty;
  borderRadius: themeProperty;
  marginBottom: themeProperty;
  backgroundColor: themeProperty;
  fontFamily: themeProperty;
  fontSize: themeProperty;
  onHover: themeProperty;
};

export type themeOption =
  | "defaultInputOption"
  | "defaultOption"
  | "filterInputOption"
  | "filterOption";

export type StyledButtonProps = {
  isInputBox?: boolean;
  theme: themeOption;
  isFilled?: boolean;
  isChosen?: boolean;
};

const THEMES: themeType = {
  maxWidth: (theme: themeOption) =>
    theme === "defaultInputOption"
      ? "189px"
      : theme === "defaultOption"
      ? "189px"
      : theme === "filterInputOption"
      ? "175px"
      : theme === "filterOption"
      ? "175px"
      : undefined,
  height: (theme: themeOption) =>
    theme === "defaultInputOption"
      ? "47px"
      : theme === "defaultOption"
      ? "28px"
      : theme === "filterInputOption"
      ? "50px"
      : theme === "filterOption"
      ? "28px"
      : undefined,
  borderRadius: (theme: themeOption) =>
    theme === "defaultInputOption"
      ? "10px"
      : theme === "defaultOption"
      ? "none"
      : theme === "filterInputOption"
      ? "0px 10px 10px 0px"
      : theme === "filterOption"
      ? "none"
      : undefined,
  marginBottom: (theme: themeOption) =>
    theme === "defaultInputOption"
      ? "10px"
      : theme === "defaultOption"
      ? "none"
      : theme === "filterInputOption"
      ? "10px"
      : theme === "filterOption"
      ? "none"
      : undefined,
  backgroundColor: (theme: themeOption) =>
    theme === "defaultInputOption"
      ? COLORS.primaryLightColor
      : theme === "defaultOption"
      ? COLORS.primaryLightColor
      : theme === "filterInputOption"
      ? COLORS.primaryLightColor
      : theme === "filterOption"
      ? COLORS.primaryLightColor
      : undefined,
  fontFamily: (theme: themeOption) =>
    theme === "defaultInputOption"
      ? "'Roboto', sans-serif"
      : theme === "defaultOption"
      ? "Mulish, sans-serif"
      : theme === "filterInputOption"
      ? "'Roboto', sans-serif"
      : theme === "filterOption"
      ? "Mulish, sans-serif"
      : undefined,
  fontSize: (theme: themeOption) =>
    theme === "defaultInputOption"
      ? "14px"
      : theme === "defaultOption"
      ? "12px"
      : theme === "filterInputOption"
      ? "14px"
      : theme === "filterOption"
      ? "12px"
      : undefined,
  onHover: (theme: themeOption) =>
    theme === "defaultInputOption"
      ? "none"
      : theme === "defaultOption"
      ? "#f2f2f7"
      : theme === "filterInputOption"
      ? "none"
      : theme === "filterOption"
      ? "#f2f2f7"
      : undefined,
};

export default THEMES;
