import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedProducts } from "../../Redux/Action/ProductsAction";
import "../../Pages/SingleProduct/SingleProduct.css";
const RelatedProducts = () => {

    const dispatch = useDispatch();
    const { relatedProducts, loading, error } = useSelector((state) => state.relatedProducts);
    useEffect(() => {
        dispatch(fetchRelatedProducts())
    }, [dispatch]);

    return (
        <div>

            <Container className="singleproductdisplay-row">

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

                    {/* <div style={{ margin: "50px 0px 0px 0px" }}>
                        <h2 style={{ textAlign: "center", color: "#000000" }}>
                            <strong>Related Products</strong>
                        </h2>
                        <Row>
                            {relatedProducts && relatedProducts.map((list) => (
                                <Col xs="12" sm="3">
                                    <Card className="product-list" key={list?.id}>
                                        <Card.Img
                                            className="product-img"
                                            src={list?.image}
                                            alt="Card image cap"
                                        />
                                        <a
                                            href={`/home/${list?.id}`}
                                            style={{ textDecoration: "none" }}
                                        >
                                            <div className="shop-btn-div">
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
                                        </a>
                                    </Card>
                                    <Card.Body>
                                        <Card.Title className="product-title" tag="h5">
                                            {list?.title.length > 25
                                                ? list?.title.slice(0, 25) + "..."
                                                : list?.title}
                                        </Card.Title>
                                        <div style={{ display: "flex" }}>
                                            <p>${list?.price} -</p>
                                            <p style={{ color: "#FA6BFF", marginLeft: "10px" }}>
                                                <strike>${Math.round(list?.price + 50)}</strike>
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Col>
                            ))}
                        </Row>
                    </div> */}
                </div>
            </Container>
        </div>
    )
}

export default RelatedProducts
