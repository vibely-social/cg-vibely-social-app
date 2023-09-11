import {Button, Card, Col, Modal, Row} from "react-bootstrap";
import {motion} from "framer-motion";
import "./index.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSuggestionFriend,
  getSuggestionFriends,
  selectGetSuggestionSuccess,
  selectSuggestionFriendsList,
  createRequestFriend,
} from "~/features/suggestionFriends";

import {
  getRequestFriends,
  selectRequestFriendsList,
  selectRequestFriendSuccess,
  acceptRequestFriend,
  deleteRequestFriend,
} from "~/features/requestFriends";
import {Link} from "react-router-dom";

function Friends() {
  const dispatch = useDispatch();

  const [friendRequests, setFriendRequests] = useState([]);
  const friendRequestList = useSelector(selectRequestFriendsList);
  const successRequest = useSelector(selectRequestFriendSuccess);

  const [friendSuggests, setFriendSuggests] = useState([]);
  const friendSuggestions = useSelector(selectSuggestionFriendsList);
  const successSuggestion = useSelector(selectGetSuggestionSuccess);

  useEffect(() => {
    if (successRequest) setFriendRequests(friendRequestList);
  }, [friendRequestList]);

  useEffect(() => {
    dispatch(getRequestFriends());
  }, []);

  useEffect(() => {
    if (successSuggestion) setFriendSuggests(friendSuggestions);
  }, [friendSuggestions]);

  useEffect(() => {
    dispatch(getSuggestionFriends());
  }, []);

  const handleAcceptFriendRequest = (id) => {
    dispatch(acceptRequestFriend(id)).then(() => {
      const updatedFriendRequests = friendRequests.filter(
        (request) => request.friendId !== id
      );
      setFriendRequests(updatedFriendRequests);
    });
  };
  const handleDeleteClickRequest = (friendRequest) => {
    dispatch(deleteRequestFriend(friendRequest)).then(() => {
      const updatedFriendRequests = friendRequests.filter(
        (request) => request.friendId !== friendRequest
      );
      setFriendRequests(updatedFriendRequests);
    });
  };

  const handleAddingFriend = (suggestion) => {
    dispatch(createRequestFriend(suggestion.id));
  };
  const handleDeleteClickSuggestion = (suggestion) => {
    dispatch(deleteSuggestionFriend(suggestion));
  };

  return (
    <>
      {/* --friend request-- */}
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
                          src={friend?.avatarUrl}
                          className="bg-white avatar w-100 shadow-xss border border-light"
                          style={{ minHeight: "220px", maxHeight: "220px" }}
                        />
                        <h4 className="fw-600 font-xs mt-2 mb-1 ms-2 text-center">
                          <Link to={`/profile/${friend.friendId}`}>{friend?.firstName} {friend?.lastName}</Link>
                        </h4>
                        <p className="fw-500 font-xsss text-grey-500 mt-0 ms-2 mb-1 text-center">
                          {friend?.mutualFriends} mutual friends
                        </p>
                        <Button
                          className=" border-0 pt-2 pb-2 pe-3 ps-3 lh-20 me-1 ls-3 mb-2  rounded-sm bg-primary-gradiant font-xssss fw-700 text-white"
                          style={{ width: "80%" }}
                          onClick={() =>
                            handleAcceptFriendRequest(friend.friendId)
                          }
                        >
                          Confirm
                        </Button>
                        <Button
                          className=" border-0 pt-2 pb-2 pe-3 ps-3 lh-20 me-1 ls-3  rounded-sm bg-grey font-xssss fw-700 ls-lg text-grey-800"
                          style={{ width: "80%" }}
                          onClick={() =>
                            handleDeleteClickRequest(friend.friendId)
                          }
                        >
                          Deny
                        </Button>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>

      <Row className="border-top border-5"></Row>
      {/* --friend suggestion-- */}
      <Row className="float-left w-100 d-flex flex-wrap ">
        <Col style={{ display: "grid", gridTemplateRows: "repeat" }}>
          <Card className="w-100 d-block d-flex border-0 bg-transparent p-4 mb-1">
            <Card.Body className="d-flex align-items-center p-0">
              <h2 className="fw-700 mb-0 mt-0 font-md text-grey-700">
                People You May Know
              </h2>
            </Card.Body>
          </Card>
          <Row className="pe-2 ps-2 smooth-transition">
            {friendSuggests.map((friend, index) => {
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
                        <h4 className="mont-font fw-600 font-xs mt-2 mb-1 ms-2 text-center">
                          <Link to={`/profile/${friend.id}`}>{friend?.firstName} {friend?.lastName}</Link>
                        </h4>
                        <p className="fw-500 font-xsss text-grey-500 mt-0 ms-2 mb-1 text-center">
                          {friend?.numberMutualFriend} mutual friends
                        </p>
                        <Button
                          className=" border-0 pt-2 pb-2 pe-3 ps-3 lh-20 me-1 ls-3 mb-2  rounded-sm bg-primary-gradiant font-xssss fw-700 text-white"
                          style={{ width: "80%" }}
                          onClick={() => handleAddingFriend(friend)}
                        >
                          Add friend
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
        </Col>
      </Row>
    </>
  );
}

export default Friends;
