
function TypingStatus({hidden = true, style = {}}){

    return(
        <div className="typing-status pt-3 pe-3 pb-2 ps-4 bg-grey rounded-xl position-absolute border border-light"
             style={style}
             hidden={hidden}
             data-title=".dot-typing">
            <div className="stage">
                <div className="dot-typing"></div>
            </div>
        </div>
    )
}
export default TypingStatus;