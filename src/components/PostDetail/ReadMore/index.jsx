import {useEffect, useState} from "react";


// eslint-disable-next-line react/prop-types
const ReadMore = ({content = '', isTextOnly}) => {

    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    function limitString(text, limit) {
        if (text.length <= limit) {
            return text;
        }
        let slicePos = limit;
        while (text[slicePos] !== ' ' && slicePos > 0) {
            slicePos--;
        }
        return text.slice(0, slicePos);
    }

    useEffect(() => {
        if (content.length > 250) setIsReadMore(true)
    }, []);

    return (
        <p className={(isTextOnly ? "font-xss lh-26 "
                : (content.length < 40) ? "font-xl lh-10 " : "font-xs ")
            + " fw-500 text-grey-700 w-100"}
           style={{whiteSpace: 'pre-wrap'}}>
            {isReadMore ? limitString(content, 250) : content}
            {content.length > 250
                && <span onClick={toggleReadMore}
                         className="read-or-hide cursor-pointer font-xssss text-vibe text-nowrap">
                {isReadMore ? " ...See more" : " ...See less"}</span>
            }
        </p>
    );
};
export default ReadMore