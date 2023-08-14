import {motion} from "framer-motion";
import useViewport from "../../../../hooks/Viewport.jsx";
import {useEffect, useState} from "react";
import {selectSidebarPosition, toggle} from '~/store/slices/toggleSidebar/index.js'
import {useDispatch, useSelector} from "react-redux";
import MainNavigate from "../MainNavigate/index.jsx";


// eslint-disable-next-line react/prop-types
function MainSidebar({collapse = false}) {
    const viewPort = useViewport();
    const [isMobile, setIsMobile] = useState(false)
    const [sidebarHover, setSidebarHover] = useState(false)
    const position = useSelector(selectSidebarPosition)
    const dispatch = useDispatch()


    useEffect(() => {
        if (viewPort.width < 576) {
            dispatch(toggle(true))
            setIsMobile(true)
        } else if (viewPort.width >= 576 && viewPort.width < 1200) {
            dispatch(toggle(true))
        } else {
            setIsMobile(false)
            dispatch(toggle(collapse))
        }
    }, [viewPort.width])

    return (
        <motion.nav style={!isMobile ? {overflow: "visible", left: '-200px'} : {}}
                    animate={!isMobile ? {x: 200} : {}}
                    transition={!isMobile ? {duration: 0.8} : {}}
                    className={position ? "navigation scroll-bar menu-active" : "navigation scroll-bar"}
                    onMouseOver={() => setSidebarHover(true)}
                    onMouseOut={() => setSidebarHover(false)}>
            <MainNavigate sidebarHover={sidebarHover}/>
        </motion.nav>
    );
}

export default MainSidebar;