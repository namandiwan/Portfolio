import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./Jumbotron.css";
import NavbarCode from "./../Navbar/Navbar";
import File from "./ProfessionalResume.pdf";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

const JumbotronCode = (props) => {
  return (
    <div>
      <NavbarCode />
      <Jumbotron>
        <p className="NavbarAlign"></p>
        <h1 className="display-3">Hi there! I'm a Software Developer</h1>
        <hr className="my-2" />
        <p className="about">
          Focused and hardworking individual with underlying interest in Data
          Analytics and Web Development field & has good decision making
          abilities wanting to work on a challenging job profile to enhance
          technical skills and knowledge which would further help in becoming an
          efficient software professional. Apart from that other love for
          travelling and playing Cricket is inevitable.
        </p>
        <p className="display-3">
          <a href={File} target="_blank" rel="noopener noreferrer" download>
            <Button>
              <AiOutlineDownload /> Resume
            </Button>
          </a>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronCode;
