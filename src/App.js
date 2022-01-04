import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";
import MyAccount from "./Pages/MyAccount/MyAccount";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Pages/Cart/Cart";
import ScrollToTop from "./ScrollToTop";
function App() {
	return (
		<BrowserRouter>
			{/* <ScrollToTop> */}
			<Switch>
				<Route path="/" exact render={() => <Redirect to="/home" />} />
				<Route path="/home" exact component={Home} />
				<Route path="/home/:id" exact component={SingleProduct} />
				<Route path="/contact" exact component={Contact} />
				<Route path="/about" exact component={About} />
				<Route path="/my-account" exact component={MyAccount} />
				<Route path="/cart" exact component={Cart} />
				<Route path="*" exact component={NotFound} />
			</Switch>
			{/* </ScrollToTop> */}
		</BrowserRouter>
	);
}

export default App;
