import { Link } from "react-router-dom";
import { Col, Card, CardGroup, Button } from "react-bootstrap";
import "./index.css"

function RightFeed() {
    return ( <Col xl={4} xxl={3} lg={4} style={{paddingTop: '12px'}}  className="ps-3">
              <Card className="w-100 shadow-xss rounded-xxl border-0 mb-3">
                <Card.Body className="d-flex align-items-center  ">
                  <h4 className="fw-700 mb-0 font-xsss text-grey-600">Friend Request</h4>
                  <Link to="/friends" className="fw-600 ms-auto font-xssss text-primary">See all</Link>
                </Card.Body>
                <Card.Body className="d-flex pb-2 border-top-xs bor-0  friend-box pe-0">
                  <figure className="avatar me-3"><img src="https://via.placeholder.com/50x50.png" alt="image" className=" shadow-sm rounded-circle w65" /></figure>
                  <h4 className="fw-700 text-grey-800 font-xss">Huy Vu <span className="d-block mt-1 font-xssss fw-500 lh-3 text-grey-500">12 mutual friends</span>
                  <Button href="#" className="p-2 w90 mt-1 bg-primary-gradiant border-0 me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl">Confirm</Button>
                  <Button href="#" className="p-2 w90 bg-grey text-grey-800  border-0 text-center font-xssss fw-600 ls-1 rounded-xl ">Delete</Button></h4>
                </Card.Body>
                <Card.Body className="d-flex pb-2  friend-box pe-0">
                  <figure className="avatar me-3"><img src="https://via.placeholder.com/50x50.png" alt="image" className="shadow-sm rounded-circle w65" /></figure>
                  <h4 className="fw-700 text-grey-800  font-xss">Thanh Nguyen <span className="d-block mt-1 font-xssss fw-500 lh-3 text-grey-500">12 mutual friends</span>
                  <Button href="#" className="p-2 w90 mt-1 bg-primary-gradiant border-0 me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl">Confirm</Button>
                  <Button href="#" className="p-2 w90 bg-grey text-grey-800 border-0 text-center font-xssss fw-600 ls-1 rounded-xl ">Delete</Button></h4>
                </Card.Body>
                <Card.Body className="d-flex pb-2 friend-box pe-0">
                  <figure className="avatar me-3"><img src="https://via.placeholder.com/50x50.png" alt="image" className="shadow-sm rounded-circle w65" /></figure>
                  <h4 className="fw-700 text-grey-800  font-xss">Minh Tam <span className="d-block mt-1 font-xssss fw-500 lh-3 text-grey-500">12 mutual friends</span>
                  <Button href="#" className="p-2 w90 mt-1 bg-primary-gradiant border-0 me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl">Confirm</Button>
                  <Button href="#" className="p-2 w90 bg-grey text-grey-800 border-0 text-center font-xssss fw-600 ls-1 rounded-xl ">Delete</Button></h4>
                </Card.Body>
              </Card>
              <Card className="w-100 shadow-xss rounded-xxl border-0 mb-3 ">
                <Card.Body className="d-flex align-items-center  ">
                  <h4 className="fw-700 mb-0 font-xsss text-grey-600">People You May Know</h4>
                  <Link to="/friends" className="fw-600 ms-auto font-xssss text-primary">See all</Link>
                </Card.Body>
                <Card.Body className="d-flex pb-2 border-top-xs bor-0  friend-box pe-0">
                  <figure className="avatar me-3"><img src="https://via.placeholder.com/50x50.png" alt="image" className=" shadow-sm rounded-circle w65" /></figure>
                  <h4 className="fw-700 text-grey-800 font-xss">Huy Vu <span className="d-block mt-1 font-xssss fw-500 lh-3 text-grey-500">12 mutual friends</span>
                  <Button href="#" className="p-2 w90  mt-1 bg-primary-gradiant border-0 me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl">Add Friend</Button>
                  <Button href="#" className="p-2 w90 bg-grey text-grey-800  border-0 text-center font-xssss fw-600 ls-1 rounded-xl ">Delete</Button></h4>
                </Card.Body>
                <Card.Body className="d-flex pb-2 friend-box pe-0">
                  <figure className="avatar me-3"><img src="https://via.placeholder.com/50x50.png" alt="image" className="shadow-sm rounded-circle w65" /></figure>
                  <h4 className="fw-700 text-grey-800  font-xss">Thanh Nguyen <span className="d-block mt-1 font-xssss fw-500 lh-3 text-grey-500">12 mutual friends</span>
                  <Button href="#" className="p-2 w90 mt-1 bg-primary-gradiant border-0 me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl">Add Friend</Button>
                  <Button href="#" className="p-2 w90 bg-grey text-grey-800 border-0 text-center font-xssss fw-600 ls-1 rounded-xl ">Delete</Button></h4>
                </Card.Body>
                <Card.Body className="d-flex pb-2 friend-box pe-0">
                  <figure className="avatar me-3"><img src="https://via.placeholder.com/50x50.png" alt="image" className="shadow-sm rounded-circle w65" /></figure>
                  <h4 className="fw-700 text-grey-800  font-xss">Minh Tam <span className="d-block mt-1 font-xssss fw-500 lh-3 text-grey-500">12 mutual friends</span>
                  <Button href="#" className="p-2 w90 mt-1 bg-primary-gradiant border-0 me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl">Add Friend</Button>
                  <Button href="#" className="p-2 w90 bg-grey text-grey-800 border-0 text-center font-xssss fw-600 ls-1 rounded-xl ">Delete</Button></h4>
                </Card.Body>
              </Card>
            </Col>
     );
}

export default RightFeed;