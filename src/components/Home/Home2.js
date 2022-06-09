import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import homePic from "../../Assets/homepic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiTwotoneMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> INTRODUCING</span> MYSELF
            </h1>
            <p className="home-about-body">
              My name is Jomari L. Castañeda, an aspirant web developer. I am
              introduced to the world of programming since high school and I
              quickly felt in love with it.
              <br />
              <br /> I'm an IT graduate from National University - Manila <br/> that specializes in
              <i>
                <b className="purple"> Web and Mobile Applications. </b>
              </i>
              <br />
              <br />
                  Have experience in java application using{" "}
                 <i><b className="purple"> JavaFX </b>, </i> 
                  building web applications using <i> <b className="purple"> MERN Stack </b> </i>,
                  developing cross-platform mobile applications using  <i><b className="purple"> Flutter </b> </i>
                  , and low-code reactive web applications using <i><b className="purple"> Outsystems</b></i>

              <br />
              <br />
                  Also have familiarity in languages and technologies such as{" "}
                  <i><b className="purple"> Python, PHP, .NET, Angular, Typescript and Android Development (Java) </b>    </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homePic} className="img-fluid rounded-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jomcas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:jomarilcastaneda@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiTwotoneMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jomari-castaneda/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jomcas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
