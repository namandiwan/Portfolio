import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
export class Contact extends Component {
  render() {
    return (
      <div>
        <Jumbotron id="contact" className="projectjumbo">
          <h1 className="display-3">Contact Me</h1>
          <hr className="my-2" />
          <p>
            <Container>
              <Row>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={2} className="comp3">
                  {" "}
                  <h4> Social : </h4>
                </Col>
                <Col xs={3} md={1}>
                  <a
                    className="iconcolor"
                    href="https://www.linkedin.com/in/namandiwan/"
                  >
                    <FaLinkedin className="python1" />
                  </a>
                </Col>
                <Col xs={3} md={1}>
                  <a
                    className="iconcolor"
                    href="https://www.instagram.com/namandiwan/"
                  >
                    <FaInstagram className="python" />
                  </a>
                </Col>
                <Col xs={3} md={1}>
                  <a className="iconcolor" href="https://github.com/namandiwan">
                    <FaGithub className="python2" />
                  </a>
                </Col>
                <Col xs={3} md={1}>
                  <a
                    className="iconcolor"
                    href="https://www.facebook.com/naman.diwannn"
                  >
                    <FaFacebook className="python3" />
                  </a>
                </Col>
                <Col xs={0} md={3}></Col>
              </Row>
              <Row>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={2} className="comp4">
                  {" "}
                  <h4> E-Mail : </h4>
                </Col>
                <Col xs={12} md={4} className="comp4">
                  {" "}
                  <a className="email" href="mailto:namandiwan91@gmail.com">
                    <h4>namandiwan91@gmail.com</h4>
                  </a>
                </Col>
                <Col xs={0} md={3}></Col>
              </Row>
            </Container>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Contact;
