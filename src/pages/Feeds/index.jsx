import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Feeds() {
  const [show, setShow] = useState(false);
  const [showComment, setShowComment] = useState(false);

  const [isClicked, setIsClicked] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowComment = () => {
    setShowComment(!showComment);
  };

  return (
    <div className="color-theme-green">
      <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
        <div className="card-body p-0"></div>
        <div className="card-body p-0 mt-3 positclassNameNamion-relative">
          <div className="d-flex align-items-center">
            <figure className="avatar ms-2 me-2">
              <img
                src="https://via.placeholder.com/50x50.png"
                alt="image"
                className="shadow-sm rounded-circle w30"
              />
            </figure>

            <textarea
              name="message"
              className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg"
              cols="30"
              rows="10"
              placeholder="What's on your mind?"
              onClick={handleShow}
              readOnly
            ></textarea>
          </div>
          {/* -------------------add your new post------------------- */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Create your post here</Modal.Title>
            </Modal.Header>
            <div className="d-flex align-items-center">
              <figure className="avatar me-3">
                <img
                  src="https://via.placeholder.com/50x50.png"
                  alt="image"
                  className="shadow-sm rounded-circle w45"
                />
              </figure>
              <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                Phuong Thao
              </h4>
            </div>
            <div>
              <textarea
                name="message"
                className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg"
                cols="30"
                rows="10"
                placeholder="What's on your mind?"
                onClick={handleShow}
              ></textarea>
            </div>

            <Modal.Body>
              {/* Woohoo, you are reading this text in a modal! */}
              <div className="col-xs-4 col-sm-4 p-1">
                <a
                  href="https://via.placeholder.com/1200x800.png"
                  data-lightbox="roadtrip"
                >
                  <img
                    src="https://via.placeholder.com/1200x800.png"
                    className="rounded-3 w-100"
                    alt="image"
                  />
                </a>
              </div>
              <Modal.Body>
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
                  >
                    <i className="font-md text-danger feather-video me-2"></i>
                    <span className="d-none-xs">Live Video</span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
                  >
                    <i className="font-md text-success feather-image me-2"></i>
                    <span className="d-none-xs">Photo/Video</span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
                  >
                    <i className="font-md text-warning feather-camera me-2"></i>
                    <span className="d-none-xs">Feeling/Activity</span>
                  </a>
                </div>
              </Modal.Body>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Share your new post
              </Button>
            </Modal.Footer>
          </Modal>

          <div className="card flex justify-content-center"></div>

          {/* ----------------the-chua-livestream------------------------ */}
          <div className="card-body d-flex p-0 mt-0">
            <a
              href="#"
              className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
            >
              <i className="font-md text-danger feather-video me-2"></i>
              <span className="d-none-xs">Live Video</span>
            </a>
            <a
              href="#"
              className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
            >
              <i className="font-md text-success feather-image me-2"></i>
              <span className="d-none-xs">Photo/Video</span>
            </a>
            <a
              href="#"
              className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
            >
              <i className="font-md text-warning feather-camera me-2"></i>
              <span className="d-none-xs">Feeling/Activity</span>
            </a>
            {/* -----------icon------------- */}
            <a
              href="#"
              className="ms-auto"
              id="dropdownMenu4"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
            </a>
            {/* --------------------icon---------- */}
            <div
              className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
              aria-labelledby="dropdownMenu4"
            >
              <div className="card-body p-0 d-flex">
                <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                  Save Link
                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                    Add this to your saved items
                  </span>
                </h4>
              </div>
              <div className="card-body p-0 d-flex mt-2">
                <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                  Hide Post
                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                    Save to your saved items
                  </span>
                </h4>
              </div>
              <div className="card-body p-0 d-flex mt-2">
                <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                  Hide all from Group
                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                    Save to your saved items
                  </span>
                </h4>
              </div>
              <div className="card-body p-0 d-flex mt-2">
                <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                  Unfollow Group
                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                    Save to your saved items
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* -----------------------posted contain-------------------- */}

        <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
          <div className="card-body p-0 d-flex">
            <figure className="avatar me-3">
              <img
                src="https://via.placeholder.com/50x50.png"
                alt="image"
                className="shadow-sm rounded-circle w45"
              />
            </figure>

            <h4 className="fw-700 text-grey-900 font-xssss mt-1">
              Phuong Thao
              <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                3 hour ago
              </span>
            </h4>
            <a
              href="#"
              className="ms-auto"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
              aria-labelledby="dropdownMenu2"
            >
              <div className="card-body p-0 d-flex">
                <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                  Save Link
                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                    Add this to your saved items
                  </span>
                </h4>
              </div>
              <div className="card-body p-0 d-flex mt-2">
                <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                  Hide Post
                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                    Save to your saved items
                  </span>
                </h4>
              </div>
              <div className="card-body p-0 d-flex mt-2">
                <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                  Hide all from Group
                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                    Save to your saved items
                  </span>
                </h4>
              </div>
              <div className="card-body p-0 d-flex mt-2">
                <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                  Unfollow Group
                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                    Save to your saved items
                  </span>
                </h4>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------- */}
          <div className="card-body p-0 me-lg-5">
            <p className="fw-500 text-grey-500 lh-26 font-xssss w-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
              faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
              <a href="#" className="fw-600 text-primary ms-2">
                See more
              </a>
            </p>
          </div>
          {/* ------------------show picture in your post------------------- */}
          <div className="card-body d-block p-0">
            <div className="row ps-2 pe-2">
              <div className="col-xs-4 col-sm-4 p-1">
                <a
                  href="https://via.placeholder.com/1200x800.png"
                  data-lightbox="roadtrip"
                >
                  <img
                    src="https://via.placeholder.com/1200x800.png"
                    className="rounded-3 w-100"
                    alt="image"
                  />
                </a>
              </div>
              <div className="col-xs-4 col-sm-4 p-1">
                <a
                  href="https://via.placeholder.com/1200x800.png"
                  data-lightbox="roadtrip"
                >
                  <img
                    src="https://via.placeholder.com/1200x800.png"
                    className="rounded-3 w-100"
                    alt="image"
                  />
                </a>
              </div>
              <div className="col-xs-4 col-sm-4 p-1">
                <a
                  href="https://via.placeholder.com/1200x800.png"
                  data-lightbox="roadtrip"
                  className="position-relative d-block"
                >
                  <img
                    src="https://via.placeholder.com/1200x800.png"
                    className="rounded-3 w-100"
                    alt="image"
                  />
                  <span className="img-count font-sm text-white ls-3 fw-600">
                    <b>+2</b>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* -------------------------like and comment----------------------------- */}
          <div className="card-body d-flex p-0 mt-3">
            <a
              href="#"
              className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
            >
              <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>
              <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
              2.8K Like
            </a>
            <div className="emoji-wrap">
              <ul className="emojis list-inline mb-0">
                <li className="emoji list-inline-item">
                  <i className="em em---1"></i>
                </li>
                <li className="emoji list-inline-item">
                  <i className="em em-angry"></i>
                </li>
                <li className="emoji list-inline-item">
                  <i className="em em-anguished"></i>
                </li>
                <li className="emoji list-inline-item">
                  <i className="em em-astonished"></i>
                </li>
                <li className="emoji list-inline-item">
                  <i className="em em-blush"></i>
                </li>
                <li className="emoji list-inline-item">
                  <i className="em em-clap"></i>
                </li>
                <li className="emoji list-inline-item">
                  <i className="em em-cry"></i>
                </li>
                <li className="emoji list-inline-item">
                  <i className="em em-full_moon_with_face"></i>
                </li>
              </ul>
            </div>
            <a
              // href="#"
              className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
            >
              <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
              <span className="d-none-xss" onClick={handleShowComment}>
                22 Comment
              </span>
            </a>
            <a
              href="#"
              id="dropdownMenu21"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
            >
              <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i>
              <span className="d-none-xs">Share</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
              aria-labelledby="dropdownMenu21"
            >
              <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">
                Share
                <i className="feather-x ms-auto font-xssss btn-round-xs bg-greylight text-grey-900 me-2"></i>
              </h4>
              <div className="card-body p-0 d-flex">
                <ul className="d-flex align-items-center justify-content-between mt-2">
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-facebook">
                      <i className="font-xs ti-facebook text-white"></i>
                    </a>
                  </li>
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-twiiter">
                      <i className="font-xs ti-twitter-alt text-white"></i>
                    </a>
                  </li>
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-linkedin">
                      <i className="font-xs ti-linkedin text-white"></i>
                    </a>
                  </li>
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-instagram">
                      <i className="font-xs ti-instagram text-white"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-round-lg bg-pinterest">
                      <i className="font-xs ti-pinterest text-white"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body p-0 d-flex">
                <ul className="d-flex align-items-center justify-content-between mt-2">
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-tumblr">
                      <i className="font-xs ti-tumblr text-white"></i>
                    </a>
                  </li>
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-youtube">
                      <i className="font-xs ti-youtube text-white"></i>
                    </a>
                  </li>
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-flicker">
                      <i className="font-xs ti-flickr text-white"></i>
                    </a>
                  </li>
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-black">
                      <i className="font-xs ti-vimeo-alt text-white"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-round-lg bg-whatsup">
                      <i className="font-xs feather-phone text-white"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
                Copy Link
              </h4>
              <i className="feather-copy position-absolute right-35 mt-3 font-xs text-grey-500"></i>
              <input
                type="text"
                value="https://socia.be/1rGxjoJKVF0"
                className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
              />
            </div>
          </div>
          {/* ------------------create-commnet-frame---------------------------- */}

          <div>
            {showComment ? (
              <div className="card">
                <h4>hello Thao</h4>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feeds;
