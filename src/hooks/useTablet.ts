import useViewport, { Viewport } from "./useViewport";

const useMobile = () => {
  const vp = useViewport();
  return Viewport.TABLET == vp;
};

export default useMobile;
