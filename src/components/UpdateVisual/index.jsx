import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {memo, useRef, useState} from "react";
import {updateAvatarApi} from "~/api/updateAvatarApi.js";
import {selectUserInfo, setUserInfo} from "~/features/user_info/userInfoSlice.js";
import {selectUserData, setUser} from "~/features/user_account/index.js";
import {getStoredUserData} from "~/service/accountService.js";
import {updateBackgroundApi} from "~/api/updateBackgroundApi.js";

// eslint-disable-next-line react/prop-types
function UpdateVisual({show = false, handleClose, type = 'avatar'}) {
    const dispatch = useDispatch();
    const images = useSelector(state => state.media.images)
    const [selected, setSelected] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const userInfo = useSelector(selectUserInfo)
    const user = useSelector(selectUserData)
    const fileInput = useRef();

    const handleClick = (url) => {
        setSelected(true)
        setSelectedFile(null)
        setSelectedImage(url)
    }
    const handleFileChange = () => {
        const value = fileInput.current.files[0]
        if (value) {
            const url = URL.createObjectURL(value);
            setSelectedImage(null)
            setSelectedFile(url)
            setSelected(true)
        }
    }
    const handleCancel = () => {
        setSelected(false);
        setSelectedFile(null)
        setSelectedImage(null)
        handleClose()
    }
    const handleSave = () => {
        const body = {
            file: fileInput.current.files[0],
            fileName: selectedImage ? getFileName(selectedImage) : null
        }
        const update = type === "avatar" ? updateAvatarApi(body) : updateBackgroundApi(body);
        update.then(data => {
            const field = type === "avatar" ? 'avatarUrl' : 'background';

            if (data) {
                const newInfo = {
                    ...userInfo,
                    [field]: data
                }
                dispatch(setUserInfo(newInfo))
                dispatch(setUser({
                    ...user,
                    [field]: data
                }))
                const storedUser = getStoredUserData()
                localStorage.setItem('user', JSON.stringify({
                    ...storedUser,
                    [field]: data
                }))
            }
        })
        handleCancel()
    }

    function getFileName(url = '') {
        const length = url.length;
        const fileNameLength = 39;
        const tail = 10;
        return url.substring(length - fileNameLength - tail, length - tail)
    }

    return (
        <Modal show={show}
               onHide={handleClose} centered
               className={'scroll-bar overflow-y-auto'}
               style={{backgroundColor: "#ffffff33"}}>
            <Modal.Header closeButton>
                <Modal.Title className='font-lg fw-400'>{`Update ${type}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{height: '70vh'}}>
                <input type="file" accept="image" hidden ref={fileInput} onChange={handleFileChange}/>
                <button className='btn btn-outline-success w-100'
                        onClick={() => fileInput.current.click()}>
                    <i className='feather-file-plus'></i>
                    Upload
                </button>
                <div className='d-flex flex-column border rounded mt-2'
                     style={{height: 'calc(100% - 0.5rem - 40px)'}}>
                    <div hidden={selected} className='text-center font-sm'>Suggest images</div>
                    <div hidden={selected} className='container-fluid row mx-0 px-0 scroll-bar'>
                        {images.map((image,index) => {
                            return (
                                        <div className={'col-4 col-lg-3 mb-3 pe-2'} key={index}>
                                            <img
                                                className="rounded-3 my-0 border border-1 border-gray shadow-md image-hover-effect"
                                                src={image.imageUrl}
                                                style={{
                                                    objectFit: "cover",
                                                    width: "100%",
                                                    maxHeight: 100,
                                                    minHeight: 100,
                                                    cursor: "pointer"
                                                }}
                                                alt="picture"
                                                onClick={() => handleClick(image.imageUrl)}
                                            />
                                        </div>
                                    );
                                })
                        }
                    </div>
                    <div hidden={!selected}
                         style={{marginLeft: 'calc((100% - 400px) / 2)'}}
                         className='justify-content-center align-items-center scroll-bar'>
                        <img src={selectedImage ? selectedImage : selectedFile} alt="image"
                             className='w400 h400 object-fit-cover rounded'/>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button variant="success" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default memo(UpdateVisual);