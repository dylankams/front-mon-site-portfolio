import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dylan-kameni/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. Tout droit reservé</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
