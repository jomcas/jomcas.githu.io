import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Jomari L. Castañeda </span>
            from <span className="purple"> Bacoor City, Cavite Philippines.</span>
            <br />You can contact me by email at <span className="purple">jomarilcastaneda@gmail.com</span>
            <br />
            <br />
            My skillset are composed of the following:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Web Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Software Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Mobile Development
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
