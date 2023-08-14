import Header from "../commons/Header/index.jsx";

// eslint-disable-next-line react/prop-types
function ChatLayout({children}) {
    return (
        <div className="main-wrapper color-theme-green">
            <Header/>
            {children}
        </div>
    );
}


export default ChatLayout;