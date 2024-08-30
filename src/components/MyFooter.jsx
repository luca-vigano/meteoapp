import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.css";

const MyFooter = function () {
  return (
    <Container fluid>
      <Row className="justify-content-center pt-5 bg-primary text-light text-decoration-none">
        <Col xs={12} md={6}>
          <Row>
            <Col className="mb-2">
              <i className="bi bi-facebook footer-icon me-2"></i>
              <i className="bi bi-instagram footer-icon me-2"></i>
              <i className="bi bi-twitter-x footer-icon me-2"></i>
              <i className="bi bi-youtube footer-icon"></i>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 bg-info text-light ">
            <Col>
              <Row>
                <Col className="footer-links text-decoration-none">
                  <p>Privacy</p>
                  <p>Contact us</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>Investor Relations</p>
                  <p>Legal Notices</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>Help Center</p>
                  <p>Jobs</p>
                  <p>Cookie Preferences</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>Terms of Use</p>
                  <p>Corporate Information</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2">
              <Button
                variant="secondary"
                size="sm"
                className="footer-button rounded-0 mt-3"
              >
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2 mt-2 copyright">© 1997-2023 MyMeteo, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
