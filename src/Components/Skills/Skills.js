import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { FaCss3 } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiAtlassian } from "react-icons/di";

export class Projects extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="projectjumbo">
          <h1 className="display-3">Skills </h1>
          <hr className="my-2" />
          <p>
            <Container>
              <Row>
                <Col xs={2} md={4}></Col>
                <Col xs={2} md={1}>
                  <a className="iconcolor" href="https://www.python.org/">
                    <FaPython className="python1" />
                  </a>
                </Col>
                <Col xs={2} md={1}>
                  <a className="iconcolor" href="https://reactjs.org/">
                    <FaReact className="python" />
                  </a>
                </Col>
                <Col xs={2} md={1}>
                  <a className="iconcolor" href="https://www.javascript.com/">
                    <DiJavascript1 className="python2" />
                  </a>
                </Col>
                <Col xs={2} md={1}>
                  <a className="iconcolor" href="https://www.java.com/en/">
                    <FaJava className="python3" />
                  </a>
                </Col>
                <Col xs={2} md={4}></Col>
              </Row>
              <Row>
                <Col xs={2} md={4}></Col>
                <Col xs={2} md={1}>
                  <a className="iconcolor" href="https://getbootstrap.com/">
                    <DiBootstrap className="python4" />
                  </a>
                </Col>
                <Col xs={2} md={1}>
                  <a
                    className="iconcolor"
                    href="https://www.w3schools.com/html/"
                  >
                    <DiHtml5 className="python5" />
                  </a>
                </Col>
                <Col xs={2} md={1}>
                  <a
                    className="iconcolor"
                    href="https://www.w3schools.com/css/"
                  >
                    <FaCss3 className="python6" />
                  </a>
                </Col>
                <Col xs={2} md={1}>
                  <a className="iconcolor" href="https://www.mongodb.com/">
                    <DiMongodb className="python7" />
                  </a>
                </Col>
                <Col xs={2} md={4}></Col>
              </Row>
              <Row>
                <Col xs={2} md={4}></Col>
                <Col xs={2} md={1}>
                  {" "}
                </Col>
                <Col xs={2} md={1}>
                  <a className="iconcolor" href="https://git-scm.com/">
                    <DiGit className="python8" />
                  </a>
                </Col>
                <Col xs={2} md={1}>
                  <a className="iconcolor" href="https://www.atlassian.com/">
                    <DiAtlassian className="python9" />
                  </a>
                </Col>
                <Col xs={2} md={1}></Col>
                <Col xs={2} md={4}></Col>
              </Row>
            </Container>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Projects;
