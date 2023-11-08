import { Col, Container, Row } from "react-bootstrap";

export default function OurService() {
  return (
    <>
      <section>
        <Container fluid className="container-lg">
          <Row className="px-4 my-5">
            <Col lg={6} mb={4} mt={3}>
              <img src="images/img_service.jpg" width="100%" />
            </Col>
            <Col lg={5} mb={4}>
              <h2>Best Car Rental for any kind of trip in (Lokasimu)</h2>
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul>
                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
