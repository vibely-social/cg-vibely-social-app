import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

function MediaTab() {
    const [images, setImages] = useState([]);

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
        <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
            <div className="card-body d-block p-4" style={{ height: 10 }}>
                <h4 className="fw-700 mb-3 font-xsss text-grey-900">Media List</h4>
            </div>
            <div className="card-body d-block pt-0 pb-2">
                <div className="row">
                    {images.map((image, index) => (
                        <div className={index % 2 === 0 ? "col-6 mb-2 ps-1" : "col-6 mb-2 pe-1"} key={image.id}>
                            <Link to={`/media/${image.id}`} data-lightbox="roadtrip">
                                <img src={image.imageUrl} alt="image" className="img-fluid rounded-3 w-100" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MediaTab;
