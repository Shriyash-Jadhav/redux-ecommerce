import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Container, Table, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import CartItem from "./CartItem";
import { Helmet } from "react-helmet";

const Cart = ({ cart }) => {
	const [totalQty, setTotalQty] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let qty = 0;
		let price = 0;
		cart.forEach((item) => {
			qty += item.qty;
			price += item.qty * item.price;
		});
		setTotalQty(qty);
		setTotalPrice(price);
	}, [cart, totalQty, setTotalQty, totalPrice, setTotalPrice]);
	return (
		<div>
			<Helmet>
				<title>Cart</title>
				<meta name="description" content="Cart Products" />
			</Helmet>
			<Navbar />
			<div
				style={{
					textAlign: "center",
					backgroundColor: "#F7F7F7",
					padding: "24px",
				}}
			>
				<p>
					<a
						href="/home"
						style={{
							fontWeight: "200",
							color: "#000000",
							textDecoration: "none",
						}}
					>
						Home{" "}
					</a>
					<strong style={{ fontWeight: "500", color: "#000000" }}>
						{" "}
						/ Cart
					</strong>{" "}
				</p>
			</div>
			<Container>
				<p>Your Cart Items</p>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>
								<p>Image</p>
							</th>
							<th>
								<p>Product Name</p>
							</th>
							<th>
								<p>Price</p>
							</th>
							<th>
								<p>QTY</p>
							</th>
							<th>
								<p>Total</p>
							</th>
							<th>
								<p>Action</p>
							</th>
						</tr>
					</thead>



					{cart.map((item) => (
						<CartItem key={item.id} item={item} />
					))}


				</Table>
				<Row className="mt-5">
					<Col>
						<h5><strong>
							Shipping & Billing Address
						</strong>
						</h5>
						<Form>
							<Form.Group >
								<Form.Label for="name">Name</Form.Label>
								<Form.Control
									className="mb-2"
									type="name"
									name="name"
									id="name"
									placeholder="Enter your Name"
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label for="exampleEmail">Email</Form.Label>
								<Form.Control
									className="mb-2"
									type="email"
									name="email"
									id="exampleEmail"
									placeholder="Enter Your Email"
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label for="exampleText">Address</Form.Label>
								<Form.Control
									type="textarea"
									name="text"
									id="exampleText"
									placeholder="Enter your Address "
								/>
							</Form.Group>
						</Form>
						<button
							className="hero-product-cart-btn"
							style={{ marginTop: "10px" }}
						>
							Submit
						</button>
					</Col>
					<Col>
						<h5>
							<strong>
								Use Coupon Code
							</strong>
						</h5>
						<Form>
							<Form.Group>
								<Form.Label for="exampleText">Enter your coupon code if you have one.</Form.Label>
								<Form.Control
									type="textarea"
									name="text"
									id="exampleText"
									placeholder="Type `Abhishek Sir Is Great` to get all products free"
								/>
							</Form.Group>
						</Form>
						<button
							className="hero-product-cart-btn"
							style={{ marginTop: "35px" }}
						>
							Submit
						</button>
					</Col>
					<Col>
						<h5>
							<strong>
								Cart Total
							</strong>
						</h5>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<p>
								Total Price:
							</p>
							<h6 style={{ fontSize: "20px", color: "#A749FF" }}>
								$	{Math.round(totalPrice)}
							</h6>
						</div>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<p>
								Total Discount:
							</p>
							<h6 style={{ fontSize: "20px", color: "#A749FF" }}>
								$	0
							</h6>
						</div>
						<div style={{ borderTop: "1px solid #000000" }}>
						</div>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<p>
								<strong>
									Billing Amount:
								</strong>
							</p>
							<h6 style={{ fontSize: "20px", color: "#A749FF" }}>
								$	{Math.round(totalPrice)}
							</h6>
						</div>
					</Col>
				</Row>
			</Container>
			{/* <p>
				{totalPrice}
			</p> */}
			<Footer />
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		cart: state.productss.cart,
	};
};

export default connect(mapStateToProps)(Cart);
