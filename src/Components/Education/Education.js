/* eslint-disable eqeqeq */
import React, { Component } from "react";
import "./Education.css";
import Manipal from "../../Images/Manipal.png";
import DPS from "../../Images/DPS.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import $ from "jquery";

export class Education extends Component {
  componentDidMount() {
    $(window).on("load", function () {
      $(window)
        .scroll(function () {
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          $(".manipal").each(function () {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) {
              //object comes into view (scrolling down)
              if ($(this).css("opacity") == 0) {
                $(this).fadeTo(500, 1);
              }
            } else {
              //object goes out of view (scrolling up)
              if ($(this).css("opacity") == 1) {
                $(this).fadeTo(500, 0);
              }
            }
          });
        })
        .scroll(); //invoke scroll-handler on page-load
    });

    $(window).on("load", function () {
      $(window)
        .scroll(function () {
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          $(".comp2").each(function () {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) {
              //object comes into view (scrolling down)
              if ($(this).css("opacity") == 0) {
                $(this).fadeTo(500, 1);
              }
            } else {
              //object goes out of view (scrolling up)
              if ($(this).css("opacity") == 1) {
                $(this).fadeTo(500, 0);
              }
            }
          });
        })
        .scroll(); //invoke scroll-handler on page-load
    });
  }
  render() {
    return (
      <div>
        <div>
          <Container id="education" fluid>
            <Row className="themed-container4">
              <Col>Education</Col>
            </Row>
            <Row>
              <Col>
                <hr className="my-2" />
              </Col>
            </Row>
            <Row className="themed-container5">
              <Col xs={12} md={3}></Col>
              <Col xs={12} md={3} className="manipal">
                {" "}
                <a href="https://manipal.edu/mu.html">
                  <Image src={Manipal} fluid height="80px" width="160px" />
                </a>
              </Col>
              <Col className="comp2" xs={12} md={3}>
                <h4>B.Tech, Information Technology</h4>
                <h6>2016-2020</h6>
                <h6>8.01 CGPA</h6>
              </Col>
              <Col xs={12} md={3}></Col> <Col xs={12} md={3}></Col>
              <Col xs={12} md={3} className="manipal">
                {" "}
                <a href="https://www.dpsvasantkunj.com/BD/">
                  <Image src={DPS} fluid height="80px" width="160px" />
                </a>
              </Col>
              <Col className="comp2" xs={12} md={3}>
                <h4>High School</h4>
                <h6>2014-2016</h6>
                <h6>95.4%</h6>
              </Col>
              <Col xs={12} md={3}></Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Education;
