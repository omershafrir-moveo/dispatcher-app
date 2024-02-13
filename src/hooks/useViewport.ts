import useWidth from "./useWidth";

export enum Viewport {
  DESKTOP = "DESKTOP",
  TABLET = "TABLET",
  MOBILE = "MOBILE",
}

const useViewport = (): Viewport => {
  const width = useWidth();
  return width > 726
    ? Viewport.DESKTOP
    : 374 < width && width <= 726
    ? Viewport.TABLET
    : Viewport.MOBILE;
};
export default useViewport;
