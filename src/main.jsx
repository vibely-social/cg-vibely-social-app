import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from "./Components/GlobalStyles"
import {Provider} from "react-redux";
import store from "~/app/store"
import {StompClientContextProvider} from "~/components/HOC_SocketClient/index.jsx";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {CLIENT_ID} from "~/app/constants.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalStyles>
        <Provider store={store}>
            <StompClientContextProvider>
                <GoogleOAuthProvider clientId={CLIENT_ID}>
                    <App/>
                </GoogleOAuthProvider>
            </StompClientContextProvider>
        </Provider>
    </GlobalStyles>
)

