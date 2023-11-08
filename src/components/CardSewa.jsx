import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function CardSewa() {
  return (
    <>
      <section>
        <Container>
          <Row className="mt-3">
            <Col
              lg={12}
              className="text-center px-4 my-5"
              style={{
                backgroundColor: "#0D28A6",
                borderRadius: "10px",
                color: "white",
              }}
            >
              <h1 className="pt-5 pb-3">Sewa Mobil di (Lokasimu) Sekarang</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br /> tempor incididunt ut labore et dolore magna
                aliqua.
              </p>{" "}
              <br />
              <Button className="btn btn-success mb-4">Mulai Sewa Mobil</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
