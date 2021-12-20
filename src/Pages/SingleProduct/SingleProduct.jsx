import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import {
    Card,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import "./SingleProduct.css";
const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let { id } = useParams();
    useEffect(() => {
        setProduct(id)
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setIsLoading(false);
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    if (isLoading) {
        return (
            <div
                style={{
                    textAlign: "center",
                    marginTop: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1>Loading...</h1>
            </div>
        );
    }
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
                    Home{" "}
                    <strong style={{ fontWeight: "500", color: "#000000" }}>
                        {" "}
                        / {product?.title}
                    </strong>{" "}
                </p>
            </div>
            <Container className="singleproductdisplay-row">
                <Row>
                    <>
                        <Col xs="12" sm="6">
                            <img src={product?.image} alt="" className="singleproduct-image" />
                        </Col>
                        <Col xs="12" sm="6">
                            <h3 className="singleproduct-category">{product?.category}</h3>
                            <h4 className="singleproduct-title">{product?.title}</h4>
                            <FontAwesomeIcon
                                icon={faStar}
                                className="single-product-rating-star"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="single-product-rating-star"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="single-product-rating-star"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="single-product-rating-star"
                            />
                            <FontAwesomeIcon
                                icon={faStarHalf}
                                className="single-product-rating-star"
                            />
                            <h4 className="singleproduct-price">$ {product?.price} /-</h4>
                            <p className="singleproduct-description">{product?.description}</p>
                            <div>
                                <button className="hero-product-btn">Buy Now</button>
                                {/* {isAlreadyInCart === false ? (
                                    <button
                                        className="hero-product-cart-btn"
                                        onClick={() => handlecart(data)}
                                    >
                                        Add To Cart
                                    </button>
                                ) : (
                                    <button
                                        className="hero-product-cart-btn"
                                        onClick={() => handlecart(data)}
                                    >
                                        Remove To Cart
                                    </button>
                                )} */}
                                <button
                                    className="hero-product-cart-btn"
                                // onClick={() => handlecart(data)}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </Col>
                    </>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default SingleProduct
