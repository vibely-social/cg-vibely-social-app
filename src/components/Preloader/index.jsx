import RingLoader from "react-spinners/RingLoader"
import './index.css'

function PreLoader() {

    const loaderStyle = {
        scale: "4"
    }

    return (     
    <div className="preloader">
     <RingLoader cssOverride={loaderStyle} color="#36d7b7" />
    </div> 
  );
}

export default PreLoader;