import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import drspeaks from "../../Assets/Projects/drspeaks.jpeg"
import notekeeper from "../../Assets/Projects/notekeeper.jpeg";
import mmdaalert from "../../Assets/Projects/mmdaalert.png";
import theccitwall from "../../Assets/Projects/theccitwall.jpeg";
import formateacher from "../../Assets/Projects/formateacher.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drspeaks}
              isBlog={false}
              title="Dr. Speaks"
              description="Frontend web and backend developer of Dr. Speaks: A mobile and web applications for Filipino with Childhood Speech Apraxia. Applied several technologies such as ReactJs, NodeJs, Express, Mysql, Firebase, Heroku etc."
              link="https://drspeak-183.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mmdaalert}
              isBlog={false}
              title="MMDA Alert"
              description="A JavaFX application that fetches tweets from the official twitter account of MMDA, twitter.com/MMDA."
              link="https://github.com/jomcas/MMDA-Alert"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notekeeper}
              isBlog={false}
              title="Notekeeper"
              description="A simple notekeeping application using MERN (MongoDB, Express, ReactJS and NodeJS)stack and deployed in Heroku."
              link="https://github.com/jomcas/Notekeeper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theccitwall}
              isBlog={false}
              title="The CCIT Wall"
              description="A simple blog website that allows students of the Computing and Information Technologies department of National University Manila to interact with other. This project is a requirement for our Information Assurance and Security Course written in PHP."
              link="https://github.com/jomcas/The-CCIT-Wall"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={formateacher}
              isBlog={false}
              title="Formateacher"
              description="A mobile application developed in Flutter. Integrated with Firebase for authentication and database."
              link="https://github.com/jomcas/Formateacher"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
