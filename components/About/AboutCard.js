import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">HARSH VERMA </span>
            from <span className="purple"> Ghaziabad, Uttar-Pradesh.</span>
            <br />
            I am currently in final year at IIIT Bhubaneswar.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games & Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing Sketches
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching & Playing Cricket
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aiming to be better than MYSELF"{" "}
          </p>
          <footer className="blockquote-footer">Harsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
