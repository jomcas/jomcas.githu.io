import React from "react";
import { Col, Row } from "react-bootstrap";
// import {  } from "react-icons/cg";
import { DiJava, DiPython } from "react-icons/di";

function SoftDev() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />{" "}
        <div style={{ fontSize: "20px", fontWeight: "bold" }}> Java </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div style={{ fontSize: "20px", fontWeight: "bold" }}> Python </div>
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

export default SoftDev;
