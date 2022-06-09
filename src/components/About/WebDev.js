import React from "react";
import { Col, Row } from "react-bootstrap";
// import {  } from "react-icons/cg";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiMysql,

} from "react-icons/di";
import { SiPytorch, SiFirebase, SiNextdotjs } from "react-icons/si";

function WebDev() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />{" "}
        <div style={{ fontSize: "20px", fontWeight: "bold" }}> HTML </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <div style={{ fontSize: "20px", fontWeight: "bold" }}> CSS </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> <div style={{fontSize: "20px", fontWeight: "bold"}}>  Javascript </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> <div style={{fontSize: "20px", fontWeight: "bold"}}>  React.js </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiNodejs/> <div style={{fontSize: "20px", fontWeight: "bold"}}>  Node.js </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql/> <div style={{fontSize: "20px", fontWeight: "bold"}}>  MySQL </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiMongodb/> <div style={{fontSize: "20px", fontWeight: "bold"}}>  Mongo DB </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase /> <div style={{fontSize: "20px", fontWeight: "bold"}}>  Firebase </div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col> */}
    </Row>
  );
}

export default WebDev;
