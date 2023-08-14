import {useState} from "react";
import RightFeed from "./RightFeeds";
import { Row, Col, Card } from "react-bootstrap";
import story from "~/assets/img/story-5.jpg"
import addStory from "~/assets/img/addStory.jpg"


function Feeds() {
    const [show, setShow] = useState(false);
    const [showComment, setShowComment] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleShowComment = () => {
        setShowComment(!showComment);
    };

 

    const stories = [
        addStory,
        {
            url: addStory,
            duration: 2000,
            seeMore: ({ close }) => {
                return <div onClick={close}>Hello, click to close this.</div>;
            },
        },
    ];
    const story2 = [
        story,
    ]

    return (<Row className="feed-body">
                 <Col xl={8} xxl={9}  lg={8} >
            {/* <Row className="bg-transparent pb-2">
                <Stories  stories={stories}
                    defaultInterval={2000}
                    width={150}
                    height={250} />
                <Stories  stories={story2}
                    defaultInterval={2000}
                    width={150}
                    height={250} />
                <Stories  stories={story2}
                    defaultInterval={2000}
                    width={150}
                    height={250} />
                
            </Row> */}
            
                </Col>
                <RightFeed/>
            </Row>);
}

export default Feeds;
