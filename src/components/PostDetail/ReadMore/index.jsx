import {useState,useEffect} from "react";

// eslint-disable-next-line react/prop-types
const ReadMore = ({content,isTextOnly}) => {

    const text = content;
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    
    useEffect(() => {
      if(content.length > 250) setIsReadMore(true)
      }, []);
    return (
        <p className={(isTextOnly ? "font-xss lh-26 " 
                                    : (content.length < 40) ? "font-xl lh-10 " :  "font-xs " )       
                                        + " fw-500 text-grey-700 w-100"}>
            {isReadMore ? text.slice(0, 250) : text}
            <span onClick={toggleReadMore}
                  className="read-or-hide cursor-pointer font-xssss text-vibe"
            >
                {isReadMore && "...See more" }
            </span>
        </p>
    );
};
export default ReadMore