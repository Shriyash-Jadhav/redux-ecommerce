import React, { useState, useEffect } from "react";
import {
    Navbar,
    Nav,
    Badge
} from "react-bootstrap";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Example = ({ cart }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty
        })
        setCartCount(count);
    }, [cart, cartCount]);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div
            style={{
                position: "sticky",
                top: "0",
                right: "0",
                left: "0",
                zIndex: "1000",
            }}
        >
            <Navbar light expand="md">
                <Navbar.Brand href="/home">
                    <img
                        src="https://flone.reactdemo.hasthemes.com/assets/img/logo/logo.png"
                        alt="logo"
                        style={{ padding: "1rem" }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle onClick={toggle} />
                <Navbar.Collapse isOpen={isOpen} navbar style={{ justifyContent: "flex-end" }}>
                    <Nav className="ml-auto" navbar>

                        <Nav.Link
                            className="nav-items"
                            style={{ color: "black" }}
                            href="/home"
                        >
                            Home
                        </Nav.Link>


                        <Nav.Link
                            className="nav-items"
                            style={{ color: "black" }}
                            href="/about"
                        >
                            About
                        </Nav.Link>


                        <Nav.Link
                            className="nav-items"
                            style={{ color: "black" }}
                            href="/contact"
                        >
                            Contact Us
                        </Nav.Link>


                        {/* <Nav.Link
                            className="nav-items"
                            style={{ color: "black" }}
                            href="/cart"
                        >
                            Carts
                        </Nav.Link> */}

                        {/* 
                        <Nav.Link
                            className="nav-items"
                            style={{ color: "black" }}
                            href="/my-account"
                        >
                            My Account
                        </Nav.Link> */}



                        <Nav.Link
                            className="nav-items"
                            style={{ color: "black" }}
                            href="/home"
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </Nav.Link>


                        <Nav.Link
                            className="nav-items"
                            style={{ color: "black" }}
                            href="/cart"
                        >
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span className="cart-count">
                                {cartCount}
                            </span>
                        </Nav.Link>

                    </Nav>
                    {/* <NavbarText></NavbarText> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        cart: state.productss.cart,
    };
};
export default connect(mapStateToProps)(Example);
