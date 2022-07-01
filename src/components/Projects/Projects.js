import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/images1.png";
import chatify from "../../Assets/Projects/gearbest (1).png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/images.png";

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
               imgPath={chatify}
              
              isBlog={false}
              title="GEARBEST"
              description="This is E-Commerce site .Which is selling electronic products, gadgets, men's fashion, toys etc."
              ghLink="https://github.com/EswarSai19/Gearbest-Clone"
              demoLink=" https://roaring-florentine-eb6615.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SUGAR COSMETIC"
              description="This is the site where you can various type of cosmetic products like makeup kit,powder,brushes etc."
              ghLink="https://github.com/ravinishadcoder/SUGAR-Cosmetic-Clone"
              demoLink="https://melodic-malabi-d69a87.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lumen5"
              description="Lumen5 is a video-creating platform that allows the creation of interactive and engaging videos with little to no effort."
              ghLink="https://github.com/ravinishadcoder/Lumen5-clone"
              demoLink="https://lumen5-teammasai.netlify.app/"              
            />
          </Col>

          {/*  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
