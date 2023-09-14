import { Link } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import "./index.css";
import { useEffect, useState } from "react";
import {
  deleteSuggestionFriend,
  getSuggestionFriends,
  selectGetSuggestionSuccess,
  selectSuggestionFriendsList,
  createRequestFriend,
} from "~/features/suggestion_friends";

import { useDispatch, useSelector } from "react-redux";
import {
  getRequestFriends,
  selectRequestFriendsList,
  selectRequestFriendSuccess,
  acceptRequestFriend,
  deleteRequestFriend,
} from "~/features/request_friends";

function RightFeed() {
  const dispatch = useDispatch();

  const [friendRequests, setFriendRequests] = useState([]);
  const friendRequestList = useSelector(selectRequestFriendsList);
  const successRequest = useSelector(selectRequestFriendSuccess);

  const [friendSuggests, setFriendSuggests] = useState([]);
  const friendSuggestions = useSelector(selectSuggestionFriendsList);
  const successSuggestion = useSelector(selectGetSuggestionSuccess);

  useEffect(() => {
    setFriendRequests(friendRequestList);
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
    <Col xl={4} xxl={3} lg={4} className="ps-3">
      <Card className="w-100 shadow-xss rounded-xxl border-0 mb-3">
        <Card.Body className="d-flex align-items-center  ">
          <h4 className="fw-700 mb-0 font-xsss text-grey-600">
            Friend Request
          </h4>
          <Link
            to="/friends"
            className="fw-600 ms-auto font-xssss text-primary see-all-btn"
          >
            See all
          </Link>
        </Card.Body>
        {/*friend request render data */}
        <div className="friend-requests-list">
          {friendRequests.map((item = {}) => (
            <div key={item?.id}>
              <Card.Body className="d-flex pb-2 border-top-xs bor-0  friend-box pe-0">
                <figure className="avatar me-3 d-flex align-items-center">
                  <img
                    src={item?.avatarUrl}
                    alt="image"
                    className="shadow-sm avatar-45"
                  />
                </figure>
                <h4 className="fw-700 text-grey-800 font-xss">
                  <Link to={`/profile/${item.friendId}`}>{`${item?.firstName}`} {`${item?.lastName}`}</Link>
                  <span className="d-block mt-1 font-xssss fw-500 lh-3 text-grey-500">
                    12 mutual friends
                  </span>
                  <Button
                    className="p-2 w90 mt-1 bg-primary-gradiant border-0 me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl"
                    onClick={() => handleAcceptFriendRequest(item.friendId)}>
                    Accept
                  </Button>
                  <Button
                    className="p-2 w90 bg-grey text-grey-800 border-0 text-center font-xssss fw-600 ls-1 rounded-xl"
                    onClick={() => handleDeleteClickRequest(item.friendId)}>
                    Deny
                  </Button>
                </h4>
              </Card.Body>
            </div>
          ))}
        </div>
      </Card>
      {/* friend suggestion */}
      <Card className="w-100 shadow-xss rounded-xxl border-0 mb-3 ">
        <Card.Body className="d-flex align-items-center">
          <h4 className="fw-700 mb-0 font-xsss text-grey-600">
            People You May Know
          </h4>
          <Link
            to="/friends"
            className="fw-600 ms-auto font-xssss text-primary see-all-btn"
          >
            See all
          </Link>
        </Card.Body>
        {/* render data friend suggestion */}
        <div className="friend-requests-list scroll-bar">
          {friendSuggests?.map((suggestion) => (
            <div key={suggestion?.id}>
              <Card.Body className="d-flex pb-2 border-top-xs bor-0  friend-box pe-0">
                <figure className="avatar me-3">
                  <img
                    src={suggestion?.avatar}
                    alt="image"
                    className=" shadow-sm rounded-circle w50"
                  />
                </figure>
                <h4 className="fw-700 text-grey-800 font-xss">
                  <Link to={`/profile/${suggestion.id}`}>{`${suggestion?.firstName}`} {`${suggestion?.lastName}`}</Link>
                  <span className="d-block mt-1 font-xssss fw-500 lh-3 text-grey-500">
                    {suggestion?.numberMutualFriend} mutual friends
                  </span>
                  <Button
                    className="p-2 w90  mt-1 bg-primary-gradiant border-0 me-2
                              text-white text-center font-xssss fw-600 ls-1 rounded-xl"
                    onClick={() => handleAddingFriend(suggestion)}
                  >
                    Add Friend
                  </Button>
                  <Button
                    className="p-2 w90 bg-grey text-grey-800  border-0 text-center font-xssss fw-600 ls-1 rounded-xl "
                    onClick={() => handleDeleteClickSuggestion(suggestion)}
                  >
                    Delete
                  </Button>
                </h4>
              </Card.Body>
            </div>
          ))}
        </div>
      </Card>
    </Col>
  );
}

export default RightFeed;
