import React from "react";
import { connect } from "react-redux";
import {
	Card,
	Container,
	Table,
	Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
const Cart = ({ cart }) => {
	return (
		<div>
			<Navbar />
			<div
				style={{
					textAlign: "center",
					backgroundColor: "#F7F7F7",
					padding: "24px",
				}}
			>
				<p>
					<a href="/home" style={{ fontWeight: "200", color: "#000000", textDecoration: "none" }}>
						Home{" "}
					</a>
					<strong style={{ fontWeight: "500", color: "#000000" }}>
						{" "}
						/ Cart
					</strong>{" "}
				</p>
			</div>
			<Container>
				<p>
					Your Cart Items
				</p>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>
								<p>
									Image
								</p>
							</th>
							<th>
								<p>
									Product Name
								</p>
							</th>
							<th>
								<p>
									Price
								</p>
							</th>
							<th>
								<p>
									QTY
								</p>
							</th>
							<th>
								<p>
									Total
								</p>
							</th>
							<th>
								<p>
									Action
								</p>
							</th>
						</tr>
					</thead>
					<tbody>
						{cart.map((item) => (
							<tr>
								<td>
									<img src={item?.image} alt="Image" style={{ height: "80px", width: "100%", objectFit: "contain" }} />
								</td>
								<td>
									<p>

										{item?.title}
									</p>
								</td>
								<td>$ {item?.price}</td>
								<td>

									<input type="number" value={item?.qty} />
								</td>
								<td>
									155
								</td>
								<td>
									<FontAwesomeIcon icon={faTrashAlt} />
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
			{/* {cart.map((item) => (
				<h1>
					{item?.title}

				</h1>
			))} */}

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
