type themeProperty = (theme: themeOption) => any;
type themeType = {
  width: themeProperty;
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
};

const THEMES: themeType = {
  width: (theme: themeOption) =>
    theme === "defaultInputOption"
      ? "190px"
      : theme === "defaultOption"
      ? "189px"
      : theme === "filterInputOption"
      ? "138px"
      : theme === "filterOption"
      ? "138px"
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
      ? "#ffffff"
      : theme === "defaultOption"
      ? "#ffffff"
      : theme === "filterInputOption"
      ? "#ffffff"
      : theme === "filterOption"
      ? "#ffffff"
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
      ? "#DFE0EB69"
      : theme === "filterInputOption"
      ? "none"
      : theme === "filterOption"
      ? "#DFE0EB69"
      : undefined,
      
};

export default THEMES;
