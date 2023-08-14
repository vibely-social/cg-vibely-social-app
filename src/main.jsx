import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import reportWebVitals from '../reportWebVitals.js'
import GlobalStyles from "./Components/GlobalStyles"
import '@popperjs/core/dist/cjs/popper.js'
import '../node_modules/jquery/dist/jquery.js'
import '../node_modules/owl.carousel/dist/owl.carousel.js'
import 'bootstrap/dist/js/bootstrap.bundle'
import {Provider} from "react-redux";
import store from "./store"

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalStyles>
        <Provider store={store}>
            <App/>
        </Provider>
    </GlobalStyles>
)

reportWebVitals(console.log);