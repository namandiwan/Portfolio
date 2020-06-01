import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./CernerModal.css";
import { Container, Row, Col } from "react-bootstrap";

function CernerModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          About the Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <code className="code1">
                Worked in Revenue Cycle Department to create a Modify
                Transaction View using ReactJs, TerraUI & Spring Boot while
                following agile methodology using Git, Jira, Crucible, Jenkins
                and Docker. This project aimed towards Customer ease in
                application for Denied adjustments.
              </code>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AppCernerModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Know More ...
      </Button>

      <CernerModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default AppCernerModal;
