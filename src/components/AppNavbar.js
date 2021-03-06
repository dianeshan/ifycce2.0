import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

//add logo to navbar!!!
export default class AppNavbar extends Component {
  render() {
    return (
      <div className="blue-container">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand href="/">I Fly Young CCE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/webinar">Webinar</Nav.Link>
                <Nav.Link href="/pastwebinar">Past Webinars</Nav.Link>
                <Nav.Link href="/team">Our Team</Nav.Link>
                <NavDropdown title="Chronicles" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/chronicles">All</NavDropdown.Item>
                  <NavDropdown
                    className="dropdowns"
                    title="Oct 2020 - Jan 2021"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/stemnotnerds">
                      Stem Students ≠ "Nerds"
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/constexposure">
                      Constant Exposure
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/goodtech">
                      Good Technology
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/explorerealworld">
                      Explore the Real World
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/internshipsareopportunities">
                      Internships are Opportunities
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    className="dropdowns"
                    title="Feb 2021 - May 2021"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/psychiscalling">
                      Psychology is my Calling
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/youcandothis">
                      You Can Do This
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/dosomethingyoulike">
                      Do Something You Like
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/thebiggesthappiness">
                      The Biggest Happiness
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    className="dropdowns"
                    title="Jun 2021 - Sept 2021"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/certificationhelps">
                      Certification Helps
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/communicationiskey">
                      Communication Is Key
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    className="dropdowns"
                    title="Oct 2021 - Jan 2022"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/becomestrongestperson">
                      Become the Strongest Person
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/remindyourselfmotivation">
                      Remind Yourself Your Motivation
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    className="dropdowns"
                    title="Feb 2022 - May 2022"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/failearly">
                      If You Want to Fail, Fail Early
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item href="/remindyourselfmotivation">Remind Yourself Your Motivation</NavDropdown.Item> */}
                  </NavDropdown>
                  <NavDropdown
                    className="dropdowns"
                    title="Jun 2022 - Sep 2022"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/goaheadandask">
                      Go Ahead And Ask
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item href="/remindyourselfmotivation">Remind Yourself Your Motivation</NavDropdown.Item> */}
                  </NavDropdown>
                </NavDropdown>
                <Nav.Link href="/application">Internship</Nav.Link>
                <Nav.Link href="/interview">Interview</Nav.Link>
              </Nav>
              {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="success">Search</Button>
                    </Form> */}
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}
