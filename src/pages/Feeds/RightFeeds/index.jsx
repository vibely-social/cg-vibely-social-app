import {Link} from "react-router-dom";
import {Button, Card, Col, Modal} from "react-bootstrap";
import "./index.css";
import {useEffect, useState} from "react";
import axios from "axios";
import { deleteSuggestionFriend, get20SuggestionFriends, selectSuggestionFriendsList } from "~/features/suggestionFriends";
import { useDispatch, useSelector } from "react-redux";

function RightFeed() {
  const FRIENDS_REQUEST_API =
    "https://64c7702c0a25021fde927b0e.mockapi.io/api/";

  const [friendRequests, setFriendRequests] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSeletedItem] = useState(null);
  const [isReload, setIsReload] = useState(false);

  const FRIENDS_SUGGESTION_API =
    "https://64c7702c0a25021fde927b0e.mockapi.io/api/";
  // const [friendSuggestions, setFriendSuggestions] = useState([]);
  const [showDeleteModalSuggestion, setShowDeleteModalSuggestion] = useState(false);
  const [suggestSelectedItem, setSuggestSelectedItem] = useState(null);
  const [isReloadSuggestion, setIsReloadSuggestion] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedConfirmItem, setSelectedConfirmItem] = useState(null);

  
  // -------------------------friend request delete----------------------------

  const handleDeleteClick = (item) => {
    setSeletedItem(item);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedItem) {
      axios
        .delete(`${FRIENDS_REQUEST_API}friends/${selectedItem?.id}`)
        .then((res) => {
          console.log(res.data)
          setIsReload(!isReload);
        })
        .catch((err) => {
          throw err;
        });
    }
    console.log("Deleted:", selectedItem);
    setShowDeleteModal(false);
  };

  useEffect(() => {
    axios
      .get(`${FRIENDS_REQUEST_API}/friends`)
      .then((res) => {
        setFriendRequests(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [isReload]);


const dispatch = useDispatch();
const friendSuggestions = useSelector(selectSuggestionFriendsList);


useEffect(() => {
  dispatch(get20SuggestionFriends());
}, [dispatch]);

  const handleDeleteClickSuggestion = (suggestion) => {
  setSuggestSelectedItem(suggestion);
  setShowDeleteModalSuggestion(true);
};

const handleConfirmDeleteSuggestion = () => {
  if (suggestSelectedItem) {
    dispatch(deleteSuggestionFriend(suggestSelectedItem));
    setShowDeleteModalSuggestion(false);
  }
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
            className="fw-600 ms-auto font-xssss text-primary"
          >
            See all
          </Link>
        </Card.Body>

        {/* ---------------------render data friend request---------------------- */}

        <div className="friend-requests-list">
          {friendRequests.map((item) => (
            <div key={item?.id}>
              <Card.Body className="d-flex pb-2 border-top-xs bor-0  friend-box pe-0">
                <figure className="avatar me-3">
                  <img
                    src={item?.avatar}
                    alt="image"
                    className=" shadow-sm rounded-circle w50"
                  />
                </figure>

                <h4 className="fw-700 text-grey-800 font-xss">
                  {item?.firstName}
                  {"  "}
                  {item?.lastName}
                  <span className="d-block mt-1 font-xssss fw-500 lh-3 text-grey-500">
                    12 mutual friends
                  </span>
                  <Button
                    href="#"
                    className="p-2 w90 mt-1 bg-primary-gradiant border-0 me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl"
                  >
                    Confirm
                  </Button>
                  <Button
                    href="#"
                    className="p-2 w90 bg-grey text-grey-800  
                  border-0 text-center font-xssss fw-600 ls-1 rounded-xl"
                    onClick={() => handleDeleteClick(item)}
                  >
                    Delete
                  </Button>
                </h4>
              </Card.Body>
            </div>
          ))}
        </div>
      </Card>

      {/* --------------------show pop up confirm delete from friend request-------------------- */}

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {selectedItem?.firstName}{" "}
          {selectedItem?.lastName}?{" "}
          <img
            src={selectedItem?.avatar}
            alt="image"
            className=" shadow-sm rounded-circle w50"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button 
          variant="secondary" 
          onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* -------------------------friend suggestion---------------------- */}
           

      <Card className="w-100 shadow-xss rounded-xxl border-0 mb-3 ">

        <Card.Body className="d-flex align-items-center">
          <h4 className="fw-700 mb-0 font-xsss text-grey-600">
            People You May Know
          </h4>
          <Link
            to="/friends"
            className="fw-600 ms-auto font-xssss text-primary"
          >
            See all
          </Link>
        </Card.Body>
      {/* ----------------------render data friend suggestion---------------- */}
        
        <div className="friend-requests-list">
        {friendSuggestions.map((suggestion) => (
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
              href="#"
              className="p-2 w90  mt-1 bg-primary-gradiant border-0 me-2 
              text-white text-center font-xssss fw-600 ls-1 rounded-xl"
              onClick={() => handleConfirmClick(item)}
            >
              Add Friend
            </Button>
            <Button
              // href="#"
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
      {/* ----------------show pop up confirm delete from friend suggestion----------- */}

      <Modal show={showDeleteModalSuggestion} onHide={() => setShowDeleteModalSuggestion(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {suggestSelectedItem?.firstName}{" "}
          {suggestSelectedItem?.lastName}?{" "}
          <img
            src={suggestSelectedItem?.avatar}
            alt="image"
            className=" shadow-sm rounded-circle w50"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button 
          variant="secondary" 
          onClick={() => setShowDeleteModalSuggestion(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDeleteSuggestion}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

{/* ----------------------------show pop up confirm friend suggestion------------------- */}
<Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Confirm Friend Suggestion</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Do you want to send request to?
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
      No
    </Button>
    <Button
      variant="primary"
      onClick={() => {
        setShowConfirmModal(false);
        
        // Call API to confirm friend request and update state
        // You can use a fetch or axios call to update the API here
      }}
    >
      Yes
    </Button>
  </Modal.Footer>
</Modal>
</Col>
  );
}

export default RightFeed;