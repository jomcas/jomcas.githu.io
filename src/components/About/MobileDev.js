import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiDart, DiAndroid } from "react-icons/di";

function MobileDev() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiDart />{" "}
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          {" "}
          Flutter (Dart){" "}
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />{" "}
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          {" "}
          Android, Java{" "}
        </div>
      </Col>
    </Row>
  );
}

export default MobileDev;
