import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { fetchRelatedProducts } from "../../Redux/Action/ProductsAction";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts';
import { addToCart } from "../../Redux/Action/ProductsAction";
import "./SingleProduct.css";
const SingleProduct = ({ addToCart }) => {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const dispatch = useDispatch();
    // const { relatedProducts, loading, error } = useSelector((state) => state.relatedProducts);
    // const { products, cart, currentItem } = useSelector((state) => state.products);

    // useEffect(() => {
    //     dispatch(fetchRelatedProducts())
    // }, [dispatch]);
    // console.log("relatedProduct", relatedProducts);

    // useEffect((id) => {
    //     dispatch(addToCart(id))
    // }, []);
    // console.log("pro", products);
    console.log("products", addToCart);


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
                                    onClick={() => addToCart(product)}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </Col>
                    </>
                </Row>
                <div
                    style={{
                        padding: "35px 0px",
                    }}
                >
                    {/* <Nav
                        tabs
                        style={{
                            justifyContent: "space-evenly",
                            cursor: "pointer",
                        }}
                    >
                        <Nav.Item>
                            <Nav.Link
                                className={classnames({ active: activeTab === "1" })}
                                onClick={() => {
                                    toggle("1");
                                }}
                            >
                                <div className="singleproduct-additional-info">
                                    <h5>Additional Information</h5>
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className={classnames({ active: activeTab === "2" })}
                                onClick={() => {
                                    toggle("2");
                                }}
                            >
                                <div className="singleproduct-additional-info">
                                    <h5>More Description</h5>
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className={classnames({ active: activeTab === "3" })}
                                onClick={() => {
                                    toggle("3");
                                }}
                            >
                                <div className="singleproduct-additional-info">
                                    <h5>Reviews(2)</h5>
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div style={{ margin: "20px" }}>
                                <p style={{ margin: "20px 0px" }}>
                                    <strong>Weight: </strong>
                                    40KG
                                </p>
                                <p style={{ margin: "20px 0px" }}>
                                    <strong>Dimensions: </strong>
                                    10 x 10 x 15 cm
                                </p>
                                <p style={{ margin: "20px 0px" }}>
                                    <strong>Materials: </strong>
                                    60% cotton, 40% polyester
                                </p>
                                <p style={{ margin: "20px 0px" }}>
                                    <strong>Other Info: </strong>
                                    American heirloom jean shorts pug seitan letterpress
                                </p>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <p style={{ margin: "20px 0px" }}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                eos qui ratione voluptatem sequi nesciunt.Sed ut perspiciatis unde
                                omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.
                            </p>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row style={{ marginTop: "30px" }}>
                                <Col xs="12" sm="8">
                                    <Row>
                                        <Col xs="4" sm="2">
                                            <img
                                                src="https://flone.reactdemo.hasthemes.com/assets/img/testimonial/1.jpg"
                                                alt=""
                                                style={{
                                                    objectFit: "contain",
                                                    borderRadius: "70px",
                                                    border: "1px solid #000000",
                                                }}
                                            />
                                        </Col>
                                        <Col xs="8" sm="10">
                                            <h5>
                                                <strong>White Lewis</strong>
                                                <img
                                                    src={star}
                                                    alt=""
                                                    style={{ marginLeft: "10px", marginTop: "-4px" }}
                                                />
                                            </h5>
                                            <p>
                                                Vestibulum ante ipsum primis aucibus orci luctustrices
                                                posuere cubilia Curae Suspendisse viverra ed viverra.
                                                Mauris ullarper euismod vehicula. Phasellus quam nisi,
                                                congue id nulla.
                                            </p>
                                        </Col>
                                        <Col xs="4" sm="2" style={{ marginTop: "30px" }}>
                                            <img
                                                src="https://flone.reactdemo.hasthemes.com/assets/img/testimonial/2.jpg"
                                                alt=""
                                                style={{
                                                    objectFit: "contain",
                                                    borderRadius: "70px",
                                                    border: "1px solid #000000",
                                                }}
                                            />
                                        </Col>
                                        <Col xs="8" sm="10" style={{ marginTop: "30px" }}>
                                            <h5>
                                                <strong>Lucifer MorningStar</strong>
                                                <img
                                                    src={star}
                                                    alt=""
                                                    style={{ marginLeft: "10px", marginTop: "-4px" }}
                                                />
                                            </h5>
                                            <p>
                                                Vestibulum ante ipsum primis aucibus orci luctustrices
                                                posuere cubilia Curae Suspendisse viverra ed viverra.
                                                Mauris ullarper euismod vehicula. Phasellus quam nisi,
                                                congue id nulla.
                                            </p>
                                        </Col>
                                        <Col xs="4" sm="2" style={{ marginTop: "30px" }}>
                                            <img
                                                src="https://flone.reactdemo.hasthemes.com/assets/img/testimonial/1.jpg"
                                                alt=""
                                                style={{
                                                    objectFit: "contain",
                                                    borderRadius: "70px",
                                                    border: "1px solid #000000",
                                                }}
                                            />
                                        </Col>
                                        <Col xs="8" sm="10" style={{ marginTop: "30px" }}>
                                            <h5>
                                                <strong>Chole Dekar</strong>
                                                <img
                                                    src={star}
                                                    alt=""
                                                    style={{ marginLeft: "10px", marginTop: "-4px" }}
                                                />
                                            </h5>
                                            <p>
                                                Vestibulum ante ipsum primis aucibus orci luctustrices
                                                posuere cubilia Curae Suspendisse viverra ed viverra.
                                                Mauris ullarper euismod vehicula. Phasellus quam nisi,
                                                congue id nulla.
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="12" sm="4">
                                    <h5>Add a Review</h5>
                                    <Form>
                                        <FormGroup>
                                            <Label for="name">Name</Label>
                                            <Input
                                                type="name"
                                                name="name"
                                                id="name"
                                                placeholder="Enter your Name"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input
                                                type="email"
                                                name="email"
                                                id="exampleEmail"
                                                placeholder="Enter Your Email"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleText">Description</Label>
                                            <Input
                                                type="textarea"
                                                name="text"
                                                id="exampleText"
                                                placeholder="Best product in this range... "
                                            />
                                        </FormGroup>
                                        <button
                                            className="hero-product-cart-btn"
                                            style={{ marginTop: "-2px" }}
                                        >
                                            Submit
                                        </button>
                                    </Form>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent> */}

                    <RelatedProducts />
                </div>
            </Container>
            <Footer />
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         current: state.shop.currentItem,
//     };
// };

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};
export default connect(null, mapDispatchToProps)(SingleProduct);
