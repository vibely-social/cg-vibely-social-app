import "./index.scss"
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

function NotFound() {
    const navigate= useNavigate()
    return (
        <>

            <div className="text"><p>404</p></div>
            <div className="container">
                <div className="caveman">
                    <div className="leg">
                        <div className="foot">
                            <div className="fingers"></div>
                        </div>
                    </div>
                    <div className="leg">
                        <div className="foot">
                            <div className="fingers"></div>
                        </div>
                    </div>
                    <div className="shape">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="head">
                        <div className="eye">
                            <div className="nose"></div>
                        </div>
                        <div className="mouth"></div>
                    </div>
                    <div className="arm-right">
                        <div className="club"></div>
                    </div>
                </div>
                <div className="caveman">
                    <div className="leg">
                        <div className="foot">
                            <div className="fingers"></div>
                        </div>
                    </div>
                    <div className="leg">
                        <div className="foot">
                            <div className="fingers"></div>
                        </div>
                    </div>
                    <div className="shape">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="head">
                        <div className="eye">
                            <div className="nose"></div>
                        </div>
                        <div className="mouth"></div>
                    </div>
                    <div className="arm-right">
                        <div className="club"></div>
                    </div>
                </div>
            </div>

            <div className="input-container"
                 style={{display: "flex", position: "fixed" , left: "calc(46%)", top:"calc(80%)"}}>
                <Button onClick={() => navigate("/")} className="d-flex bg-grey border-light justify-content-center">Back to home</Button>
            </div>
        </>
    );
}

export default NotFound;