import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ravi Kumar Nishad </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I'm a passionate Developer, with good administrative and
            communication skills, good attention to detail and the ability to
            write efficient code using <span className="purple">MERN Stack.</span>
            <br />
            My interset in Web Developer started when I was working at medical shop. People started preferring to buy most of medicine online then I was curious to know how these website works and how we can create. Then I started learning HTML and CSS, now this curiosity makes me a web developer.
            <br />
            Till now, I built a number of web applications and 3 major projects. Learned a great deal about teamwork, leadership and communication. Here, I am looking for an opportunity as a full stack web developer
            <br/>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Sci-Fi Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ravi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
