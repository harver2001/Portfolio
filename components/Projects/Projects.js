import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cookitout from "../../Assets/Projects/cookitout.png";
import movieasia from "../../Assets/Projects/movieasia.png";
import cryptotracker from "../../Assets/Projects/cryptotracker.png";
import pixview from "../../Assets/Projects/pixview.png";
import sketchboard from "../../Assets/Projects/sketchboard.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pixview}
              isBlog={false}
              title="Pixview-Backend"
              description="Microservice Architecture based Backend with modular and
              independent components.    
                NodeJS, ExpressJS, Python-Flask, Appwrite, PostgreSQL,
              SQLAlchemy, Jinja, SQLite, JWT."
              ghLink="https://github.com/harver2001/microServices_API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sketchboard}
              isBlog={false}
              title="SketchBoard"
              description="Created an Artist Blog Website to discover and publish Sketches.
               ReactJS, MongoDB, NodeJS, ExpressJS, Context API."
              ghLink="https://github.com/harver2001/SketchBoard_FullStack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptotracker}
              isBlog={false}
              title="CryptoTracker"
              description="Track all the info. about leading Crypto-Currencies along with Charts.
               ReactJS, Material-Ul, Context API, GraphJS, CSS."
              ghLink="https://github.com/harver2001/CryptoTracker_2.0"
              demoLink="https://cryptotracker2001.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cookitout}
              isBlog={false}
              title="Cook-It-Out"
              description="Find Dishes from left out ingredients along with full recipes & Video tutorials to Cook it out.
               JavaScript, Fetch API-Call, HTML-CSS"
              ghLink="https://github.com/harver2001/Recipe-App"
              demoLink="https://cookitout.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieasia}
              isBlog={false}
              title="MovieAsia"
              description="Get Information about about your favorite movies, series and animes along with all details about them.
               JavaScript, Fetch API-Call, HTML-CSS"
              ghLink="https://github.com/harver2001/Movie-App"
              demoLink="https://movieasia.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
