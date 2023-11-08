import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

export default function Testimonial() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg={12} className="text-center my-5">
              <h1 className="fw-bold">Testimonial</h1>
              <p className="mt-3">
                berbagai review positif dari para pelanggan kami
              </p>
            </Col>
          </Row>
          <Carousel
            className="pt-5 pb-5"
            style={{ backgroundColor: "#F1F3FF" }}
          >
            <Carousel.Item controls={true}>
              <div className="testimonial-card">
                <div className="row">
                  <div className="col-lg-3 text-lg-center">
                    <img src="images/img_photo.png" width="150px" alt="..." />
                  </div>
                  <div className="col-lg-9">
                    <div className="testimonial-content">
                      <img
                        src="images/Rate.svg"
                        alt=""
                        className="testimonial-rating"
                      />
                      <p className="testimonial-text">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod"
                      </p>
                      <p className="fw-bold testimonial-author">
                        John Dee 32, Bromo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="testimonial-card">
                <div className="row">
                  <div className="col-lg-3 text-lg-center">
                    <img src="images/img_photo.png" width="150px" alt="..." />
                  </div>
                  <div className="col-lg-9">
                    <img src="images/Rate.svg" alt="" />
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod"
                    </p>
                    <p className="fw-bold">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
}
