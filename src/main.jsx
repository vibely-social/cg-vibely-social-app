import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from "./Components/GlobalStyles"
// import '@popperjs/core/dist/cjs/popper.js'
// import 'bootstrap/dist/js/bootstrap.bundle'
import {Provider} from "react-redux";
import store from "~/app/store"

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalStyles>
        <Provider store={store}>
            <App/>
        </Provider>
    </GlobalStyles>
)

