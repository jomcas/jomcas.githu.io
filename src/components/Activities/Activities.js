import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import icore from "../../Assets/Activities/icore.jpg";
import smfoundation from "../../Assets/Activities/smfoundation.jpeg";
import algolympics from "../../Assets/Activities/algolympics.png";
import ProjectCard from "../Projects/ProjectCards";
function Activities() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Activities & Awards </strong>
        </h1>
        <p style={{ color: "white" }}>
          Some of my extra-curriculars and accomplishments.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={icore}
              isBlog={false}
              isActivity
              title="Presented Paper At iCore"
              description="Co-develop the “Dr. Speaks: A Web and Mobile Application Tools for 
              Filipinos with Verbal Apraxia” which is virtually presented on the 
              International Conference in Information and Computing Research 
              2021 (iCore 2021) held in Manila, Philippines (Dec 11- 12, 2021) "
              //   link="https://drspeak-183.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algolympics}
              isBlog={false}
              isActivity
              title="Algolympics Participation"
              description="Participated in Algolympics 2019, an intercollegiate programming 
              competition, representing the National University which held at the 
              UP Diliman, Quezon City (Feb 23, 2019"
              link="https://github.com/jomcas/Notekeeper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smfoundation}
              isBlog={false}
              isActivity
              title="SM Foundation Scholarship"
              description="Recipient of SM Foundation College Scholarship Grant (2018-2022)"
              link="https://github.com/jomcas/MMDA-Alert"
            />
          </Col>
        </Row>
        {/* <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Hello Everyone! <strong className="purple"></strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Web </strong> Development
        </h1>

        <WebDev />

        <h1 className="project-heading">
          <strong className="purple">Software </strong> Development
        </h1>

        <SoftDev />

        <h1 className="project-heading">
        <strong className="purple">Mobile </strong> Development
        </h1>
        <MobileDev /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default Activities;
