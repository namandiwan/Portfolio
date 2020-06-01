import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Powergrid2Modal.css";
import { Container, Row, Col } from "react-bootstrap";

function Powergrid2Modal(props) {
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
                Worked on a project involving Network Whitelisting using DHCP
                servers to allocate the IP addresses to the users in the domain
                of the company. Made use of Powershell, Excel and DHCP server on
                windows remote machine.
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

function AppPowergrid2Modal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Know More ..
      </Button>

      <Powergrid2Modal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default AppPowergrid2Modal;
