import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { deleteSuggestionFriend, selectSuggestionFriendsList } from "~/features/suggestionFriends";
import { useDispatch, useSelector } from "react-redux";

function Friends() {
  
  const FRIENDS_REQUEST_API =
    "https://localhost:8080/api/";

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
      setIsReloadRequest(!isReloadRequest);
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

  const [showDeleteModalSuggestion, setShowDeleteModalSuggestion] = useState(false);
  const [selectedItemSuggestion, setSelectedItemSuggestion] = useState(null);

  const dispatch = useDispatch();
  const friendSuggestion = useSelector(selectSuggestionFriendsList);
  
  const handleDeleteClickSuggestion = (suggestion) => {
    setSelectedItemSuggestion(suggestion);
    setShowDeleteModalSuggestion(true);
  };
  const handleConfirmDeleteSuggestion = () => {
    if (selectedItemSuggestion) {
      dispatch(deleteSuggestionFriend(selectedItemSuggestion));
      setShowDeleteModalSuggestion(false);
    }
  }

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
                          className="bg-white avatar w-100 shadow-xss border border-light"
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
                          className="bg-white avatar w-100 shadow-xss border border-light"
                          style={{ minHeight: "220px", maxHeight: "220px" }}
                        />
                        <h4 className="fw-600 font-xs mt-2 mb-1 ms-2 text-left">
                          {friend?.firstName}{" "}{friend?.lastName}
                        </h4>
                        <p className="fw-500 font-xsss text-grey-500 mt-0 ms-2 mb-1 text-left">
                          {friend?.numberMutualFriend} mutual friends
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
