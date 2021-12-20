import React, { useState } from "react";
import {
    Navbar,
    Nav
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

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
                <Navbar.Brand href="/">
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
                            href="/"
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


                        <Nav.Link
                            className="nav-items"
                            style={{ color: "black" }}
                            href="/"
                        >
                            Blogs
                        </Nav.Link>


                        <Nav.Link
                            className="nav-items"
                            style={{ color: "black" }}
                            href="/my-account"
                        >
                            My Account
                        </Nav.Link>



                        <Nav.Link
                            className="nav-items"
                            style={{ color: "black" }}
                            href="/"
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </Nav.Link>


                        <Nav.Link
                            className="nav-items"
                            style={{ color: "black" }}
                            href="/cart"
                        >
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Nav.Link>

                    </Nav>
                    {/* <NavbarText></NavbarText> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Example;
