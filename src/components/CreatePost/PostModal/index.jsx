import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from "framer-motion"
import { Button, Form, ListGroup } from 'react-bootstrap';
import "./index.css"
import Logo from "../../../assets/img/new_post_icons/Logo.png"
import Gallery from "../../../assets/img/new_post_icons/gallery.svg"
import Tag from "../../../assets/img/new_post_icons/tag.svg"
import Emoji from "../../../assets/img/new_post_icons/emoji.svg"
import Theme from "../../../assets/img/new_post_icons/theme.svg"
import Smile from "../../../assets/img/new_post_icons/smile.svg"
import More from "../../../assets/img/new_post_icons/more.svg"
import Mic from "../../../assets/img/new_post_icons/mic.svg"
import { useState, useRef , useEffect } from 'react'
import addImage from "../../../assets/img/new_post_icons/add-image.png"
// import Photogrid from "react-facebook-photo-grid";
import toBase64 from '../../../hooks/toBase64.js';
import Photogrid from "react-facebook-photo-grid";


  const dialogStyle = {
	position: 'fixed',
	alignItems:"center",
	justifyContent:'center',
	zIndex: "1000",
	width:'100%',
	height:'100%' , 
	top: "0%", right: "0%",
	backdropFilter: 'blur(5px)',
	overflow: "visible"
}

const addImageButtonStyle = {
	border: "none",
	height: '220px',
	width: '500px',
	color: 'black',
	display: 'table-cell'
}

function NewPostModal({ isOpen,closeModal }) {

	const [postContent,setPostContent] = useState("");
	const [postImage,setPostImage] = useState([]);
	const [postTag,setPostTag] = useState([]);
	const [postPrivacy,setPostPrivacy] = useState("public");
	const [newImages,setNewImages] = useState([])

	const [allowPost, setAllowPost] = useState(true)
	const [isAddImage,setIsAddImage] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('https://64c0caa50d8e251fd1129902.mockapi.io/api/v1/post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(createPost),
			});

			if (response.ok) {
				console.log('Post created successfully!');
			} else {
				console.error('Failed to create post');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};



	useEffect(() => {
        if(newImages.length != 0){
			setIsAddImage(false);
			let importImages = [...postImage]
			for(let i = 0 ; i < newImages.length ; i++){
				toBase64(newImages[i]).then((result) => {
				importImages.push(result)
				setPostImage(importImages)
				})
			}
			setNewImages([])
		}
    },[newImages]);


    return (
        <AnimatePresence>
				{isOpen && (<Dialog
					open={isOpen}
					onClose={() =>  closeModal }
					as="div"
					className="d-flex justify-content-center "
					style={dialogStyle}>
						<motion.div
							className="d-flex items-end justify-center dialog-post  pt-3 px-1 text-center "
							initial={{
								opacity: 0,
								scale: 0.75,
							}}
							animate={{
								opacity: 1,
								scale: 1,
								transition: {
									ease: "easeOut",
									duration: 0.45,
								},
							}}
							exit={{
								opacity: 0,
								scale: 0.75,
								transition: {
									ease: "easeIn",
									duration: 0.30,
								},
							}}
						>
						<div className="dialog-post-wrapper">
							<section className="post-content">
							<div className="header-dialog">
								Create Post
									<Button 
										className='bg-grey feather-x rounded-circle text-grey-700 p-1 border w35 font-xs' 
										style={{float:'right',marginRight: "20px"}} 
										onClick={closeModal}/>
							</div>
							<Form onSubmit={handleSubmit}>
									<Form.Group className="content-dialog">
										<img src={Logo} alt="logo" />
										<div className="details">
											<p>Thanh Nguyen</p>
											<Form.Select className="privacy">
												<option value="public">🌐 Public</option>
												<option value="friend">👫 Friends</option>
												<option value="private">🔒 Only me</option>
											</Form.Select>
										</div>
									</Form.Group>
										<input 
											accept="image/*"
											type="file"
											multiple
											id="select-image"
											style={{ display: "none" }}
											onChange={(e) =>  setNewImages(Array.from(e.target.files))}
										/>					
											<textarea 
												placeholder="What's on your mind ?" 
												style={(isAddImage || postImage.length > 0 ) ? {maxHeight: "80px"} : {}}
												spellCheck="false" 
												defaultValue={""} 
												onChange={(e) => setPostContent(e.target.value)}/>

													{postImage.length > 0 && 
															<motion.div
																initial={{ scale: 0 }}
																animate={{ rotate: 0, scale: 1 }}
																className='border border-1 p-2 rounded-xxxl position-relative'
															> 
																<Button 
																		as='label' 
																		htmlFor="select-image"
																	style={{
																		left: "20px",
																		top:"15px",
																		maxWidth:"190px",
																		maxHeight:"38px", 
																		position:"absolute",
																		alignItems:"start"}} 
																	className='bg-grey rounded-md text-grey-700 p-0 border font-xsss mt-1' 
																>
																	<div 
																		style={{marginTop: "-5px",
																				marginLeft: "-5px",
																				paddingRight:"5px"}}>
																		<img 
																			src={addImage} 
																			style={{scale:"0.6"}}
																	/>Add Photos/Videos</div>
																</Button>									
																<Button 
																	onClick={() => setPostImage([])} 
																	style={{right: "20px",
																			top:"15px", 
																			position:"absolute"}}  
																	className='bg-grey feather-x  rounded-circle text-grey-700 p-1 border w35 font-xs' 
																	/>
														<Photogrid
														images={postImage} 
														maxWidth={500}
													/>	</motion.div>}

													{isAddImage && <motion.div className='border border-1 p-2 rounded-xxxl'
														initial={{ scale: 0 }}
														animate={{ rotate: 0, scale: 1 }}> 
														<Button 
																as='label' 
																htmlFor="select-image" 
																id="upload-btn" 
																style={addImageButtonStyle}>
															<img src={addImage} style={{scale:"1"}}/>
															<p className='font-xsss mt-1'>Add Photos/Videos</p>
														</Button>
												</motion.div>}


										<div className="theme-emoji">
											<img src={Theme} alt="theme" />
											<img src={Smile} alt="smile" />
										</div>
									<Form.Group className="options">
										<p>Add to Your Post</p>
										<ListGroup as="ul" className="list-items-post">
											<ListGroup.Item 
												as="li" 
												onClick={() => {if(postImage.length == 0) setIsAddImage(!isAddImage)}}>
													<img src={Gallery}/>
											</ListGroup.Item>
											<ListGroup.Item as="li"><img src={Tag} /></ListGroup.Item>
											<ListGroup.Item as="li"><img src={Emoji} /></ListGroup.Item>
											<ListGroup.Item as="li"><img src={Mic} /></ListGroup.Item>
											<ListGroup.Item as="li"><img src={More} /></ListGroup.Item>
										</ListGroup>
									</Form.Group>
								<Button type='submit' style={{background: !allowPost && "#e4e6ebff"}} disabled={!allowPost && true} className='border-0 button-post shadow-xss mt-2'>Post</Button>
							</Form>
							</section>
						</div>
						</motion.div>
				</Dialog>)}
		</AnimatePresence>
	)
}

export default NewPostModal;