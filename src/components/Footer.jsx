import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <section>
        <Container className="mt-5 pt-5">
          <Row>
            <Col lg={4}>
              <p>
                Jalan Suroyo No. 161 Mayangan Kota <br /> Probolonggo 672000
              </p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </Col>
            <Col lg={2}>
              <p>
                <a href="#ourservice" className="nav-link">
                  Our services
                </a>
              </p>
              <p>
                <a href="#whyus" className="nav-link">
                  Why Us
                </a>
              </p>
              <p>
                <a href="#testimonial" className="nav-link">
                  Testimonial
                </a>
              </p>
              <p>
                <a href="#FAQ" className="nav-link">
                  FAQ
                </a>
              </p>
            </Col>
            <Col lg={4}>
              <p>Connect with us</p>
              <p>
                <img src="images/list item.svg" alt="" />
              </p>
            </Col>
            <Col lg={2}>
              <p>Copyright Binar 2022</p>
              <p>
                <img src="images/logo.png" alt="" />
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
