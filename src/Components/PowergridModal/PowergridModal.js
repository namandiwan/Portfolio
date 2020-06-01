import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./PowergridModal.css";
import { Container, Row, Col } from "react-bootstrap";

function PowergridModal(props) {
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
                Worked on a web application called Service Reminder using .NET
                framework, C# and SQL Server Management Studio.The web
                application is used to remind the associates about pending and
                upcoming services
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

function AppPowergridModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Know More ..
      </Button>

      <PowergridModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default AppPowergridModal;
