import useViewport , {Viewport} from "./useViewport"

const useDesktop = () => {
    const vp = useViewport()
    return Viewport.DESKTOP == vp
}

export default useDesktop