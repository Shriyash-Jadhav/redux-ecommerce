import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";
import MyAccount from "./Pages/MyAccount/MyAccount";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Pages/Cart/Cart";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact render={() => <Navigate to="/home" />} />
				<Route path="/home" exact element={<Home />} />
				<Route path="/home/:id" exact element={<SingleProduct />} />
				<Route path="/contact" exact element={<Contact />} />
				<Route path="/about" exact element={<About />} />
				<Route path="/my-account" exact element={<MyAccount />} />
				<Route path="/cart" exact element={<Cart />} />
				<Route path="*" exact element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
