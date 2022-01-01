import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
    Card,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    loadCurrentItem,
    addToCart,
} from "../../Redux/Action/ProductsAction";
import { connect } from "react-redux";
import Layout from '../../Components/Layout'
import Footer from '../../Components/Footer/Footer'
const Home = ({ products, addToCart, loadCurrentItem }) => {
    // const dispatch = useDispatch();
    // const { products, loadCurrentItem, error } = useSelector((state) => state.productss);
    // useEffect(() => {
    //     dispatch(fetchAllProducts())
    // }, [dispatch]);
    // console.log(product);
    // console.log("prooo", products);

    // if (loading) {
    //     return (
    //         <h1>
    //             Loading...
    //         </h1>
    //     )
    // }
    // if (error != null) {
    //     return { error }
    // }

    return (
        <div>
            <Layout />
            <Container>
                <Row className="product-list-offer" style={{ margin: "80px 0" }}>
                    <Col xs="12" sm="4">
                        <div className="hero-special">
                            <img
                                src="https://htmldemo.hasthemes.com/flone/flone/assets/img/icon-img/support-1.png"
                                alt=""
                            />
                            <div>
                                <h5
                                    style={{
                                        margin: "15px",
                                        color: "#959795",
                                        fontWeight: "400",
                                    }}
                                >
                                    Free Shipping
                                </h5>
                                <p
                                    style={{
                                        margin: "0px 22px",
                                        fontSize: "15px",
                                        color: "#rgb(111 111 111)",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet consectetu adipisicing elit sed
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="4">
                        <div className="hero-special">
                            <img
                                src="https://htmldemo.hasthemes.com/flone/flone/assets/img/icon-img/support-2.png"
                                alt=""
                            />
                            <div>
                                <h5
                                    style={{
                                        margin: "15px",
                                        color: "#959795",
                                        fontWeight: "400",
                                    }}
                                >
                                    Support 24/7
                                </h5>
                                <p
                                    style={{
                                        margin: "0px 22px",
                                        fontSize: "15px",
                                        color: "#rgb(111 111 111)",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet consectetu adipisicing elit sed
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="4">
                        <div className="hero-special-1">
                            <img
                                src="https://htmldemo.hasthemes.com/flone/flone/assets/img/icon-img/support-3.png"
                                alt=""
                            />
                            <div>
                                <h5
                                    style={{
                                        margin: "15px",
                                        color: "#959795",
                                        fontWeight: "400",
                                    }}
                                >
                                    Money Return
                                </h5>
                                <p
                                    style={{
                                        margin: "0px 22px",
                                        fontSize: "15px",
                                        color: "#rgb(111 111 111)",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet consectetu adipisicing elit sed{" "}
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="product-list-deals">
                    <h2 className="product-list-deals-h2"> Daily Deals! </h2>
                    <p>Lorem ipsum dolor sit amet conse ctetu.</p>
                </div>
                <Row>
                    {products && products.map((product) => (
                        <Col xs="12" sm="3">
                            <Card className="product-list" key={product?.id}>

                                <Card.Img
                                    className="product-img"
                                    src={product?.image}
                                    alt="Card image cap"
                                />
                                <Link
                                    to={`/home/${product?.id}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <div className="shop-btn-div"
                                        onClick={() => loadCurrentItem(product)}
                                    >
                                        <FontAwesomeIcon
                                            icon={faShoppingCart}
                                            className="product-list-shop-btn"
                                        />
                                        <FontAwesomeIcon
                                            icon={faEye}
                                            className="product-list-shop-btn"
                                        />
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className="product-list-shop-btn"
                                        />
                                    </div>
                                </Link>
                            </Card>
                            <Card.Body>
                                <Card.Title className="product-title" tag="h5">
                                    {product?.title.length > 40
                                        ? product?.title.slice(0, 40) + "..."
                                        : product?.title}
                                    {/* {list?.title} */}
                                </Card.Title>
                                <div style={{ display: "flex" }}>
                                    <p>${product?.price} -</p>
                                    <p style={{ color: "#FA6BFF", marginLeft: "10px" }}>
                                        <strike>${Math.round(product?.price + 50)}</strike>
                                    </p>
                                </div>

                            </Card.Body>
                        </Col>
                    ))}

                </Row>

            </Container>
            <Footer />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        products: state.productss.products,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
