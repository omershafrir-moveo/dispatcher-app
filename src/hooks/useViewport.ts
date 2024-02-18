import useWidth from "./useWidth";
import { size_numbers } from "../util/breakpoints";

export enum Viewport {
  DESKTOP = "DESKTOP",
  TABLET = "TABLET",
  MOBILE = "MOBILE",
}

const useViewport = (): Viewport => {
  const width = useWidth();
  return width > size_numbers.tablet
    ? Viewport.DESKTOP
    : size_numbers.mobile < width && width <= size_numbers.tablet
    ? Viewport.TABLET
    : Viewport.MOBILE;
};
export default useViewport;
