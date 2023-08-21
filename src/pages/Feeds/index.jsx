import RightFeed from "./RightFeeds";
import {Col, Row} from "react-bootstrap";
import CreatePost from "../../components/CreatePost";
import PostDetail from "../../components/PostDetail";
import {useAuthorizeUser} from "~/hooks/authorizeUser.jsx";

function Feeds() {

    useAuthorizeUser()


    return (
        <Row className="feed-body pt-3">
            <Col xl={8} xxl={9} lg={8}>

                <CreatePost />

                <PostDetail  />

            </Col>
            <RightFeed/>
        </Row>
    );
}

export default Feeds;
