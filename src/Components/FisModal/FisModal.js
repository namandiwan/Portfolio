import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./FisModal.css";
import { Container, Row, Col } from "react-bootstrap";

function FisModal(props) {
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
                Performed research work and prepared reports on various topics
                of interests like Machine Learning, Artificial intelligence,
                Learning Management System and Robotic Process Automation as a
                part of Data Collection stage in Data Analytics
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

function AppFisModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Know More ..
      </Button>

      <FisModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default AppFisModal;
