import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Footer.css";
import { AiOutlineCopyright } from "react-icons/ai";

function Footer() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand id="footer" href="#home">
        Copyright <AiOutlineCopyright />
      </Navbar.Brand>
    </Navbar>
  );
}

export default Footer;
