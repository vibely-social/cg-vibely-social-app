import {useState,useEffect} from "react";
import { wrapText } from "~/utils/wrapText";

// eslint-disable-next-line react/prop-types
const ReadMore = ({content,isTextOnly}) => {

    let text = wrapText(content);
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
                                        + " fw-500 text-grey-700 w-100"}
            style={{whiteSpace: 'pre-wrap'}}>
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