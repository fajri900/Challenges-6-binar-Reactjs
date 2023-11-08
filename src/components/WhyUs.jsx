import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

export default function WhyUs() {
  return (
    <>
      <section>
        <Container>
          <h1>Why Us?</h1>
          <Col mb={4} mt={2}>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </Col>
          <Row>
            <Col lg={3} md={6} mb={4} className="mb-3">
              <Card style={{ width: "18rem", height: "180px" }}>
                <Card.Body>
                  <img src="images/icon_complete.svg" alt="" />
                  <Card.Title className="mt-2">Mobil Lengkap</Card.Title>
                  <Card.Text>
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} mb={4} className="mb-3">
              <Card style={{ width: "18rem", height: "180px" }}>
                <Card.Body>
                  <img src="images/icon_price.svg" alt="" />
                  <Card.Title className="mt-2">Harga Murah</Card.Title>
                  <Card.Text>
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} mb={4} className="mb-2">
              <Card style={{ width: "18rem", height: "180px" }}>
                <Card.Body>
                  <img src="images/icon_24hrs.svg" alt="" />
                  <Card.Title className="mt-2">Layanan 24 Jam</Card.Title>
                  <Card.Text>
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} mb={4} className="mb-2">
              <Card style={{ width: "18rem", height: "180px" }}>
                <Card.Body>
                  <img src="images/icon_professional.svg" alt="" />
                  <Card.Title className="mt-2">Sopir Profesional</Card.Title>
                  <Card.Text>
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
