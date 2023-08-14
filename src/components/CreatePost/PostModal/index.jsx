import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from 'react-bootstrap';



function NewPostModal({ isOpen,closeModal }) {


    return (
        <AnimatePresence>
				<Dialog
					open={isOpen}
					onClose={closeModal}
					as="div"
					className="d-flex justify-content-center overflow-y-auto"
                    style={{position: 'fixed',alignItems:"center",justifyContent:'center',zIndex: "1000",width:'100%',height:'100%' , top: "0%", right: "0%",backdropFilter: 'blur(5px)'}}
				>
					<div className="flex flex-col py-8 px-4 text-center">
						<motion.div
							className="d-flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
							initial={{
								opacity: 0,
								scale: 0.75,
							}}
							animate={{
								opacity: 1,
								scale: 1,
								transition: {
									ease: "easeOut",
									duration: 0.75,
								},
							}}
							exit={{
								opacity: 0,
								scale: 0.75,
								transition: {
									ease: "easeIn",
									duration: 0.15,
								},
							}}
						>

							<div
								className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all"
								role="dialog"
								aria-modal="true"
								aria-labelledby="modal-headline"
							>
								<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
									
										</div>
										<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
											<Dialog.Title
												as="h3"
												className="text-lg leading-6 font-medium text-gray-900"
												id="modal-headline"
											>
												Deactivate account
											</Dialog.Title>
											<div className="mt-2">
												<Dialog.Description
													as="p"
													className="text-sm text-gray-500"
												>
													Are you sure you want to deactivate your account? All
													of your data will be permanently removed. This action
													cannot be undone.
												</Dialog.Description>
											</div>
										</div>
									</div>
								</div>
								<div className=" px-4 py-3 d-flex justify-content-center">
									<Button
										type="button"
										className="w-full  bg-primary-gradiant rounded-md border-0 shadow-sm px-4 py-2 font-medium"
										onClick={closeModal}
									>
										Post
									</Button>
								</div>
							</div>
						</motion.div>
					</div>
				</Dialog>
		</AnimatePresence>
	)
}

export default NewPostModal;