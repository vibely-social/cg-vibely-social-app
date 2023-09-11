import { Card } from "react-bootstrap";
import Photogrid from "react-facebook-photo-grid";




function Gallery({images}) {

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
        justifyContent: "center"
    }
    return ( 
        <Card>
            <Card.Body style={{padding : 0
                                 ,maxHeight: "500px"}}>
                {/*<ImageGrid >*/}
                {/*    {images.map((image,index) => {return <img key={index} style={imageStyle}  src={image}/>})}*/}
                {/*</ImageGrid>*/}
                <Photogrid images={images}></Photogrid>
            </Card.Body>
        </Card>
    );
}

export default Gallery;