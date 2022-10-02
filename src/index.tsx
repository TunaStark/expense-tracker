import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import 'antd/dist/antd.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import rootReducer from './store';


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);