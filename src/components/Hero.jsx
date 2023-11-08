import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Hero() {
  return (
    <section>
      <Container fluid style={{ backgroundColor: "#F1F3FF" }}>
        <Row className="mt-5">
          <Col lg={5} className="mx-lg-5" style={{ paddingTop: "100px" }}>
            <h2 className="fw-bold" style={{ paddingRight: "10px" }}>
              Sewa & Rental Mobil Terbaik di kawasan Tangerang
            </h2>
            <p style={{ paddingRight: "40px" }}>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <a
              href="/cars"
              style={{
                width: "fit-content",
                height: "auto",
              }}
              type="button"
              className="btn btn-success text-white"
            >
              Mulai Sewa Mobil
            </a>
          </Col>
          <Col
            lg={5}
            xl={6}
            xxl={6}
            className="mt-lg-3"
            style={{ paddingTop: "50px" }}
          >
            <img className="" width="100%" src="images/img_car.png" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
