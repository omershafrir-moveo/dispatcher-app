import useViewport, { Viewport } from "./useViewport";

const useMobile = () => {
  const vp = useViewport();
  return Viewport.MOBILE == vp;
};

export default useMobile;
