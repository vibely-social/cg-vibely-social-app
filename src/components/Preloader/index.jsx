import RingLoader from "react-spinners/RingLoader"
import './index.css'

function PreLoader() {

    const loaderStyle = {
        scale: "3",
        visibility: "visible",
        opacity: 1,
        transition: 'invisible 0s 2s, opacity 2s linear'
    }

    return (     
    <div className="preloader"  >
     <RingLoader cssOverride={loaderStyle} color="#36d7b7" />
    </div> 
  );
}

export default PreLoader;