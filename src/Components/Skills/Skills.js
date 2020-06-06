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
import Skillbar from "../../Components/Skillbar/Skillbar";

export class Projects extends Component {
  render() {
    return (
      <div>
        <Jumbotron id="skills" className="projectjumbo">
          <h1 className="display-3">Skills </h1>
          <hr className="my-2" />
          <p>
            <Container fluid id="n1">
              <Skillbar />
            </Container>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Projects;
