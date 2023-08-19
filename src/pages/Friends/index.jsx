import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Friends() {
  // const friendsData = [
  //   {
  //     email: "chphungphat@gmail.com",
  //     avatar:
  //       "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
  //     mutualFriends: 10,
  //     username: "test",
  //   },
  //   {
  //     email: "blackgemcp2@gmail.com",
  //     avatar:
  //       "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/366348238_2171933089864277_2962341750518570036_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=svmS3UxE1twAX9tiiXs&_nc_ht=scontent.fhan3-4.fna&oh=00_AfBJOfNNdo0j4u8mJG7cARKhHWtfYfuo6VuATBlrqxeWXQ&oe=64DED8A7",
  //     mutualFriends: 10,
  //     username: "Thanh Nguyen",
  //   },
  //   {
  //     email: "blackgemcp2@gmail.com",
  //     avatar:
  //       "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/366348238_2171933089864277_2962341750518570036_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=svmS3UxE1twAX9tiiXs&_nc_ht=scontent.fhan3-4.fna&oh=00_AfBJOfNNdo0j4u8mJG7cARKhHWtfYfuo6VuATBlrqxeWXQ&oe=64DED8A7",
  //     mutualFriends: 10,
  //     username: "Thanh Nguyen",
  //   },
  //   {
  //     email: "blackgemcp2@gmail.com",
  //     avatar:
  //       "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/366348238_2171933089864277_2962341750518570036_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=svmS3UxE1twAX9tiiXs&_nc_ht=scontent.fhan3-4.fna&oh=00_AfBJOfNNdo0j4u8mJG7cARKhHWtfYfuo6VuATBlrqxeWXQ&oe=64DED8A7",
  //     mutualFriends: 10,
  //     username: "Thanh Nguyen",
  //   },
  //   {
  //     email: "blackgemcp2@gmail.com",
  //     avatar:
  //       "https://media.discordapp.net/attachments/1113385012763557902/1140501474326102076/image.png?width=169&height=661",
  //     mutualFriends: 10,
  //     username: "Thanh Nguyen",
  //   },
  //   {
  //     email: "blackgemcp2@gmail.com",
  //     avatar:
  //       "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  //     mutualFriends: 10,
  //     username: "Thanh Nguyen",
  //   },
  //   {
  //     email: "blackgemcp2@gmail.com",
  //     avatar:
  //       "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
  //     mutualFriends: 10,
  //     username: "Thanh Nguyen",
  //   },
  //   {
  //     email: "blackgemcp2@gmail.com",
  //     avatar:
  //       "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  //     mutualFriends: 10,
  //     username: "Thanh Nguyen",
  //   },
  //   {
  //     email: "blackgemcp2@gmail.com",
  //     avatar:
  //       "https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp",
  //     mutualFriends: 10,
  //     username: "Thanh Nguyen",
  //   },
  //   {
  //     email: "blackgemcp2@gmail.com",
  //     avatar:
  //       "https://media.discordapp.net/attachments/1113385012763557902/1137714018015002684/image.png?width=1178&height=662",
  //     mutualFriends: 10,
  //     username: "Thanh Nguyen",
  //   },
  //   {
  //     email: "blackgemcp2@gmail.com",
  //     avatar:
  //       "https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp",
  //     mutualFriends: 10,
  //     username: "Thanh Nguyen",
  //   },
  //   {
  //     email: "blackgemcp2@gmail.com",
  //     avatar:
  //       "https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp",
  //     mutualFriends: 10,
  //     username: "Thanh Nguyen",
  //   },
  // ];

  // ----------------------friend request----------------------------

  const FRIENDS_REQUEST_API =
    "https://64c7702c0a25021fde927b0e.mockapi.io/api/";

  const [friendRequests, setFriendRequests] = useState([]);
  const [showDeleteModalRequest, setShowDeleteModalRequest] = useState(false);
  const [selectedItemRequest, setSeletedItemRequest] = useState(null);
  const [isReloadRequest, setIsReloadRequest] = useState(false);

  const handleDeleteClickRequest = (friend) => {
    setSeletedItemRequest(friend);
    setShowDeleteModalRequest(true);
  };

  const handleConfirmDeleteRequest = () => {
    if (selectedItemRequest) {
      axios
        .delete(`${FRIENDS_REQUEST_API}friends/${selectedItemRequest?.id}`)
        .then((res) => {
          console.log("res.data");
          console.log(res.data);
          setIsReloadRequest(!isReloadRequest);
        })
        .catch((err) => {
          throw err;
        });
    }
    console.log("Deleted:", selectedItemRequest);
    setShowDeleteModalRequest(false);
  };

  useEffect(() => {
    axios
      .get(`${FRIENDS_REQUEST_API}/friends`)
      .then((res) => {
        setFriendRequests(res.data);
        console.log(friendRequests);
      })

      .catch((err) => {
        throw err;
      });
  }, [isReloadRequest]);

  // ------------------------friend suggestion----------------------

  const FRIENDS_SUGGESTION_API =
    "https://64c7702c0a25021fde927b0e.mockapi.io/api/";

  const [friendSuggestion, setFriendSuggestion] = useState([]);
  const [showDeleteModalSuggestion, setShowDeleteModalSuggestion] =
    useState(false);
  const [selectedItemSuggestion, setSeletedItemSuggestion] = useState(null);
  const [isReloadSuggestion, setIsReloadSuggestion] = useState(false);

  const handleDeleteClickSuggestion = (friend) => {
    setSeletedItemSuggestion(friend);
    setShowDeleteModalSuggestion(true);
  };

  useEffect(() => {
    axios
      .get(`${FRIENDS_SUGGESTION_API}/friends`)
      .then((res) => {
        setFriendSuggestion(res.data);
        console.log(friendSuggestion);
      })

      .catch((err) => {
        throw err;
      });
  }, [isReloadSuggestion]);

  const handleConfirmDeleteSuggestion = () => {
    if (selectedItemSuggestion) {
      axios
        .delete(
          `${FRIENDS_SUGGESTION_API}friends/${selectedItemSuggestion?.id}`
        )
        .then((res) => {
          console.log("res.data");
          console.log(res.data);
          setIsReloadSuggestion(!isReloadSuggestion);
        })
        .catch((err) => {
          throw err;
        });
    }
    console.log("Deleted:", selectedItemSuggestion);
    setShowDeleteModalSuggestion(false);
  };

  return (
    <>
      {/* ----------------------friend request-------------------- */}

      <Row className="float-left w-100 d-flex flex-wrap ">
        <Col style={{ display: "grid", gridTemplateRows: "repeat" }}>
          <Card className="w-100 d-block d-flex border-0 bg-transparent p-4 mb-1">
            <Card.Body className="d-flex align-items-center p-0">
              <h2 className="fw-700 mb-0 mt-0 font-md text-grey-700">
                Friend Requests
              </h2>
            </Card.Body>
          </Card>

          <Row className="pe-2 ps-2">
            {friendRequests.map((friend, index) => {
              return (
                <Col
                  className="flex-grow-1 w-100 pb-2 p-0 text-center "
                  key={index}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.3,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <Card
                      className="d-block border-0 shadow-xss rounded-3  overflow-hidden"
                      style={{ width: "220px", height: "380px" }}
                    >
                      <Card.Body className="d-block p-0">
                        <img
                          src={friend?.avatar}
                          className="bg-white avatar w-100 shadow-xss border border-dark"
                          style={{ minHeight: "220px", maxHeight: "220px" }}
                        />
                        <h4 className="fw-600 font-xs mt-2 mb-1 ms-2 text-left">
                          {friend?.username}{" "}
                        </h4>
                        <p className="fw-500 font-xsss text-grey-500 mt-0 ms-2 mb-1 text-left">
                          {friend?.mutualFriends} mutual friends
                        </p>
                        <Button
                          className=" border-0 pt-2 pb-2 pe-3 ps-3 lh-20 me-1 ls-3 mb-2  rounded-sm bg-primary-gradiant font-xssss fw-700 text-white"
                          style={{ width: "80%" }}
                        >
                          Confirm
                        </Button>
                        <Button
                          className=" border-0 pt-2 pb-2 pe-3 ps-3 lh-20 me-1 ls-3  rounded-sm bg-grey font-xssss fw-700 ls-lg text-grey-800"
                          style={{ width: "80%" }}
                          onClick={() => handleDeleteClickRequest(friend)}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              );
            })}
          </Row>

          {/* -------------------show pop up delete friend request----------------- */}

          <Modal
            show={showDeleteModalRequest}
            onHide={() => setShowDeleteModalRequest(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete {selectedItemRequest?.firstName}{" "}
              {selectedItemRequest?.lastName}?{" "}
              <img
                src={selectedItemRequest?.avatar}
                alt="image"
                className=" shadow-sm rounded-circle w50"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowDeleteModalRequest(false)}
              >
                Cancel
              </Button>
              <Button variant="danger" onClick={handleConfirmDeleteRequest}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>

      <Row className="border-top border-5"></Row>

      {/* ---------------------friend suggestion------------------- */}

      <Row className="float-left w-100 d-flex flex-wrap ">
        <Col style={{ display: "grid", gridTemplateRows: "repeat" }}>
          <Card className="w-100 d-block d-flex border-0 bg-transparent p-4 mb-1">
            <Card.Body className="d-flex align-items-center p-0">
              <h2 className="fw-700 mb-0 mt-0 font-md text-grey-700">
                People You May Know
              </h2>
            </Card.Body>
          </Card>
          <Row className="pe-2 ps-2">
            {friendSuggestion.map((friend, index) => {
              return (
                <Col
                  className="flex-grow-1 w-100 pb-2 p-0 text-center "
                  key={index}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.3,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <Card
                      className="d-block border-0 shadow-xss rounded-3  overflow-hidden"
                      style={{ width: "220px", height: "380px" }}
                    >
                      <Card.Body className="d-block p-0">
                        <img
                          src={friend?.avatar}
                          className="bg-white avatar w-100 shadow-xss border border-dark"
                          style={{ minHeight: "220px", maxHeight: "220px" }}
                        />
                        <h4 className="fw-600 font-xs mt-2 mb-1 ms-2 text-left">
                          {friend?.username}{" "}
                        </h4>
                        <p className="fw-500 font-xsss text-grey-500 mt-0 ms-2 mb-1 text-left">
                          {friend?.mutualFriends} mutual friends
                        </p>
                        <Button
                          className=" border-0 pt-2 pb-2 pe-3 ps-3 lh-20 me-1 ls-3 mb-2  rounded-sm bg-primary-gradiant font-xssss fw-700 text-white"
                          style={{ width: "80%" }}
                        >
                          Confirm
                        </Button>
                        <Button
                          className=" border-0 pt-2 pb-2 pe-3 ps-3 lh-20 me-1 ls-3  rounded-sm bg-grey font-xssss fw-700 ls-lg text-grey-800"
                          style={{ width: "80%" }}
                          onClick={() => handleDeleteClickSuggestion(friend)}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
            {/* ----------------------show pop up delete friend suggestion-------------   */}
            <Modal
            show={showDeleteModalSuggestion}
            onHide={() => setShowDeleteModalSuggestion(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete {selectedItemSuggestion?.firstName}{" "}
              {selectedItemSuggestion?.lastName}?{" "}
              <img
                src={selectedItemSuggestion?.avatar}
                alt="image"
                className=" shadow-sm rounded-circle w50"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowDeleteModalSuggestion(false)}
              >
                Cancel
              </Button>
              <Button variant="danger" onClick={handleConfirmDeleteSuggestion}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>

        </Col>
      </Row>
    </>
  );
}

export default Friends;
