import { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import { Button } from "react-bootstrap";

import logo from "../assets/CCELogo_square.png";

export default class ChroniclesHeader extends Component {
  render() {
    return (
      <div className="blue-container">
        <Container>
          <div className="white-text">
            <Row>
              <Col md="4">
                <img className="headings" src={logo} alt="cce logo" />
              </Col>
              <Col className="headings3" md="8">
                <h1 className="headings2">CCE Chronicles</h1>
                <h4>Don't know what you need? Maybe a quick read!</h4>
                <Button
                  variant="light"
                  href="https://groups.google.com/a/iflyyoung.com/forum/#!forum/ccepro/join"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
