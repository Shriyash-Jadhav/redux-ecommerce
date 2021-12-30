import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ProductsReducer from "./Redux/Reducer/ProductsReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import rootReducer from "./Redux/Reducer/index";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
