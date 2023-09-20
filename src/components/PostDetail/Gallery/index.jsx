import { Card } from "react-bootstrap";
import {ImageGrid} from "react-fb-image-video-grid";

function Gallery({images=[]}) {

    const imageStyle = {
        maxHeight:((images.length > 2) ? "100%" : "450px"),
        width: "auto",
        justifySelf: ((images.length > 2) ? "stretch" : "center"),
        objectFit: ((images.length > 2) ? "cover" : "contain")
    }
    const imageCardStyle = {
        width: "auto",
        display: "grid",
        border: 0,
        justifyContent: "center",
        marginTop: 10,
    }
    return ( 
        <Card style={imageCardStyle}>
            <Card.Body style={{padding : 0}}>
                <ImageGrid showModal={false}>
                    {images.map((image,index) => <img key={index} style={imageStyle} className="rounded"  src={image} alt='img'/>)}
                </ImageGrid>
            </Card.Body>
        </Card>
    );
}

export default Gallery;