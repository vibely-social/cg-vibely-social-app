import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

function MediaTab() {
    const [images, setImages] = useState([{
        id: '',
        imageUrl: 'https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png'
    }])

    useEffect(() => {
        axios.get("http://localhost:8080/api/mediatab/1")
            .then(response => {
                setImages(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3 ">
            <div className="card-body d-block p-4" style={{height: 10}}>
                <h4 className="fw-700 mb-3 font-xsss text-grey-900">Media List</h4>
            </div>
            <div className="card-body d-block pt-0 pb-2">
                <div className="row">
                    {/*each row have 4 images*/}
                    {images.map((image) => (
                        <div className={'card col-3 p-1'} key={image.id}>
                            <Link to={`/media/${image.id}`} data-lightbox="roadtrip">
                                <div className='' style={{
                                    width: '100%',
                                    height: '200px',
                                    backgroundImage: `url(${image.imageUrl})`,
                                    backgroundSize: "cover",
                                    backgroundPosition:"center",
                                }}>

                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MediaTab;
