import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const AboutUs = () => {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <section className="hero-about">
        <div className="hero-section" style={{ backgroundImage: `url(${"img2.jpg"})` }}>
            <p>Innovation with </p>
            {/* <pre><p>    the poor</p></pre> */}
            <p>                     the poor</p>
        </div>
          
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} md={8}>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Mission Section */}
        <section className="mission py-5">
          <Container>
            <Row>
              <Col xs={12} md={8} className="mx-auto">
                <Card>
                  <CardBody>
                    <CardTitle>Our Mission</CardTitle>
                    <CardText>
                      To capture the vast and diverse knowledge emerging from the development community, facilitate sharing and cross-fertilisation of knowledge and create innovations that address the identified gaps. Towards this end, BPF strives to improve the quality of life for poor and marginalised communities through documentation, innovation, implementation and dissemination of best practices.
                    </CardText>
                    <img src="img4.jpg" alt="Mission" className="img-fluid my-3" />
                  
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Vision Section */}
        <section className="vision bg-light py-5">
          <Container>
            <Row>
              <Col xs={12} md={8} className="mx-auto">
                <Card>
                  <CardBody>
                    <CardTitle>Our Vision</CardTitle>
                    <CardText>
                      The Best Practices Foundation envisions widespread identification and institutionalisation of best practices in the fields of development, particularly in livelihoods, governance and gender equity. To fulfil this mandate, BPF aims to become an agile, knowledge-based innovation agency and a network hub for the institutionalisation of best practices through multi-sector partnerships.
                      <img src="img3.jpg" alt="Vision" className="img-fluid my-3" />
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Principles Section */}
        <section className="principles py-5">
          <Container>
            <Row>
              <Col xs={12} md={8} className="mx-auto">
                <Card>
                  <CardBody>
                    <CardTitle>Our Guiding Principles</CardTitle>
                    <CardText>
                      <ul>
                        <li><b>Commitment to the ground:</b> We seek participation, listen to voices and build innovations together with the communities to ensure their relevance.</li>
                        <li><b>Dyanamic and Multi-disciplinary approaches:</b> We believe that for new solutions to emerge cross-learning that arises from synergies across disciplines and actors is vital.</li>
                        <li><b>Teamwork and effective collaborations: </b>We encourage diversity and creatively use it to spread and adapt our innovations by fostering partnerships towards inclusive development.</li>
                        <li><b>Quality and integrity:</b> We are committed to these values, which reflect in our work through our investment and critical reflection in both process and outcome.</li>
                      </ul>
                    </CardText>
                    <img src="img1.jpg" alt="Principle" className="img-fluid my-3" />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials bg-light py-5">
          <Container>
            <Row>
              <Col xs={12} md={8} className="mx-auto">
                <Card>
                  <CardBody>
                    <CardTitle>What Our Partners Say</CardTitle>
                    <CardText>
                      "Best Practices Foundation has been a valuable partner in our efforts to improve the lives of marginalized communities." - John Doe, Partner Organization
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;