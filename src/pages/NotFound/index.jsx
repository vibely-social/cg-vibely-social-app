import "./index.scss"
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

function NotFound() {
    const navigate= useNavigate()
    return (
        <div className="bg-vite-gradient d-flex" style={{
            height: '100vh'
        }}>
            <div className="d-flex pos-fixed " style={{display: "flex", position: "fixed" , left: "calc(50% - 242px)", top:"calc(50% - 180px)"}}>
                <h1 style={{fontSize: 300}} className={'text-danger'}>404</h1>
            </div>
            <div className="input-container"
                 style={{display: "flex", position: "fixed" , left: "calc(46%)", top:"calc(80%)"}}>

                <Button onClick={() => navigate("/")} className="d-flex bg-grey border-light justify-content-center">Back to home</Button>
            </div>
        </div>
    );
}

export default NotFound;