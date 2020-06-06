import React from "react";
import SkillBar from "react-skillbars";
import { Container, Row, Col } from "react-bootstrap";
import "./Skillbar.css";

function Skillbar(SKILLS, colors) {
  SKILLS = [
    {
      type: "Java",
      level: 80,
    },
    {
      type: "React",
      level: 85,
    },
    {
      type: "Javascript",
      level: 75,
    },
    {
      type: "HTML",
      level: 45,
    },
    {
      type: "CSS",
      level: 50,
    },
    {
      type: "Bootstrap",
      level: 35,
    },
    {
      type: "MongoDB",
      level: 55,
    },
    {
      type: "Python",
      level: 45,
    },
    {
      type: "Git",
      level: 75,
    },
    {
      type: "Jira",
      level: 65,
    },
    {
      type: "Docker",
      level: 35,
    },
    {
      type: "Jest",
      level: 40,
    },
  ];
  colors = {
    bar: "#000",
    title: {
      text: "#fff",
      background: "#343a40",
    },
  };
  return (
    <div>
      <SkillBar skills={SKILLS} colors={colors} height={30}></SkillBar>
    </div>
  );
}

export default Skillbar;
