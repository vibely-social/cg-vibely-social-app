import { Link } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import "./index.css";
import { useEffect, useState } from "react";
import {
  deleteSuggestionFriend,
  getSuggestionFriends,
  selectGetSuggestionSuccess,
  selectSuggestionFriendsList,
} from "~/features/suggestionFriends";
import { useDispatch, useSelector } from "react-redux";
import {
  getRequestFriends,
  selectRequestFriendsList,
  selectRequestFriendSuccess,
  acceptRequestFriend
} from "~/features/requestFriends";


function RightFeed() {
  const dispatch = useDispatch();

  const [friendRequests, setFriendRequests] = useState([]);
  const friendRequestList = useSelector(selectRequestFriendsList);
  const successRequest = useSelector(selectRequestFriendSuccess);

  const [friendSuggests, setFriendSuggests] = useState([]);
  const friendSuggestions = useSelector(selectSuggestionFriendsList);
  const successSuggestion = useSelector(selectGetSuggestionSuccess);

  useEffect(() => {
    console.log("friendRequests");
     if (successRequest) setFriendRequests(friendRequestList);
  }, [friendRequestList]);

  useEffect(() => {
    dispatch(getSuggestionFriends());
  }, []);

  useEffect(() => {
    console.log("friendSuggestions");
     if (successSuggestion) setFriendSuggests(friendSuggestions);
  }, [friendSuggestions]);

  useEffect(() => {
    dispatch(getRequestFriends());
  }, []);

  const handleDeleteClickSuggestion = (suggestion) => {
    dispatch(deleteSuggestionFriend(suggestion));
  };

  const handleAcceptFriendRequest = (id) => {
    console.log('dispatch accept fr with id: ' + id);
    dispatch(acceptRequestFriend(id))
  }
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
                <figure className="avatar me-3">
                  <img
                    src={item?.avatarUrl}
                    alt="image"
                    className=" shadow-sm rounded-circle w50"
                  />
                </figure>
                <h4 className="fw-700 text-grey-800 font-xss">
                  {item?.name}
                  <span className="d-block mt-1 font-xssss fw-500 lh-3 text-grey-500">
                    12 mutual friends
                  </span>
                  <Button
                    onClick={() => handleAcceptFriendRequest(item.userId)}
                    className="p-2 w90 mt-1 bg-primary-gradiant border-0 me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl"
                  >
                    Confirm
                  </Button>
                  <Button
                    href="#"
                    className="p-2 w90 bg-grey text-grey-800 border-0 text-center font-xssss fw-600 ls-1 rounded-xl"
                    onClick={() => handleDeleteClickRequest(item)}
                  >
                    Delete
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
        <div className="friend-requests-list">
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
                  {suggestion?.firstName}
                  {"  "}
                  {suggestion?.lastName}
                  <span className="d-block mt-1 font-xssss fw-500 lh-3 text-grey-500">
                    {suggestion?.numberMutualFriend} mutual friends
                  </span>
                  <Button
                    className="p-2 w90  mt-1 bg-primary-gradiant border-0 me-2
                              text-white text-center font-xssss fw-600 ls-1 rounded-xl"
                    // onClick={() => handleConfirmClick(item)}
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
