import {ImageGrid} from "react-fb-image-video-grid"
import { Card } from "react-bootstrap";




function Gallery({images}) {

    const imageStyle = {
        maxHeight: "500px",
        width: "auto",
        justifySelf: " center",
        objectFit: "contain"
    }
    alert(getAverageRGB(images[0]))
    const imageCardStyle = {
        width: "auto",
        display: "grid",
        border: 0,
        justifyContent: "center"
    }
    return ( 
        <Card style={imageCardStyle}>
            <Card.Body style={{padding : 0}}>
                <ImageGrid >
                    {images.map((image,index) => {return <img key={index} style={imageStyle}  src={image}/>})}
                </ImageGrid>
            </Card.Body> 
        </Card>
    );
}

export default Gallery;