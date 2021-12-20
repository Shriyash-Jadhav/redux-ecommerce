import React from "react";
import "../Layout.css";
import { Carousel, Row, Col } from 'react-bootstrap';

const HeroSection = (props) => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100"
                        src="https://flone.reactdemo.hasthemes.com/assets/img/slider/slider-12-2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                    <div class="container-1">
                        <img
                            src="https://flone.reactdemo.hasthemes.com/assets/img/slider/slider-12-2.jpg"
                            alt="Norway"
                            style={{ width: "100%" }}
                        />
                        <div class="text-block">
                            <h2 className="text-block-h2">--- Stylish ---</h2>
                            <h1 className="text-block-h1">Female Clothes</h1>
                            <h3 className="text-block-h3">30% off Summer Vacation</h3>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <button className="hero-btn">Shop Now</button>
                            </div>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100"
                        src="https://flone.reactdemo.hasthemes.com/assets/img/slider/slider-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                    <div class="container-1">
                        <img
                            src="https://flone.reactdemo.hasthemes.com/assets/img/slider/slider-2.jpg"
                            alt="Norway"
                            style={{ width: "100%" }}
                        />
                        <div class="text-block">
                            <h2 className="text-block-h2">--- Stylish ---</h2>
                            <h1 className="text-block-h1">Male Clothes</h1>
                            <h3 className="text-block-h3">30% off Summer Vacation</h3>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <button className="hero-btn">Shop Now</button>
                            </div>
                        </div>
                    </div>{" "}
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default HeroSection;
