/* eslint-disable eqeqeq */
import React, { Component } from "react";
import "./Experience.css";
import FIS from "../../Images/FIS.png";
import Powergrid from "../../Images/Powergrid.jpg";
import Cerner from "../../Images/Cerner.png";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import AppCernerModal from "../CernerModal/CernerModal";
import AppPowergridModal from "../PowergridModal/PowergridModal";
import AppPowergrid2Modal from "../Powergrid2Modal/Powergrid2Modal";
import AppFisModal from "../FisModal/FisModal";
import $ from "jquery";

export class Experience extends Component {
  componentDidMount() {
    $(window).on("load", function () {
      $(window)
        .scroll(function () {
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          $(".cerner").each(function () {
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
          $(".comp1").each(function () {
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
          $(".powergrid").each(function () {
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
          $(".powergrid2").each(function () {
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
          $(".fis").each(function () {
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
          <Container id="experience" fluid>
            <Row className="themed-container4">
              <Col> Experience</Col>
            </Row>
            <Row>
              <Col>
                <hr className="my-2" />
              </Col>
            </Row>
            <Row className="themed-container5">
              <Col xs={12} md={3} className="cerner">
                {" "}
                <a href="https://www.cerner.com/">
                  <Image src={Cerner} fluid height="140px" width="300px" />
                </a>
              </Col>
              <Col className="comp1" xs={12} md={3}>
                <h4>Software Intern</h4>
                <h6>Jan, 2020 - July, 2020</h6>
                <AppCernerModal />
              </Col>
              <Col xs={12} md={3} className="powergrid">
                {" "}
                <a href="https://www.powergridindia.com/">
                  <Image src={Powergrid} fluid height="140px" width="280px" />
                </a>
              </Col>
              <Col className="comp1" xs={12} md={3}>
                <h4>Software Intern</h4>
                <h6>May, 2019 - July, 2019</h6>
                <AppPowergridModal />
              </Col>
            </Row>
            <Row className="themed-container5">
              <Col xs={12} md={3} className="powergrid2">
                {" "}
                <a href="https://www.powergridindia.com/">
                  <Image src={Powergrid} fluid height="140px" width="280px" />
                </a>
              </Col>
              <Col className="comp1" xs={12} md={3}>
                <h4>Networking Intern</h4>
                <h6>May, 2018 - June, 2019</h6>
                <AppPowergrid2Modal />
              </Col>
              <Col xs={12} md={3} className="fis">
                {" "}
                <a href="https://www.fisglobal.com/">
                  <Image src={FIS} fluid height="140px" width="280px" />
                </a>
              </Col>
              <Col className="comp1" xs={12} md={3}>
                <h4>Research Intern</h4>
                <h6>May, 2017 - July, 2017</h6>
                <AppFisModal />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Experience;
