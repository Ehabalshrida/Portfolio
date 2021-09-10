/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Web and Mobile Development{" "}
                        <span>The leadership for Future</span>
                      </h1>
                      <p className="lead text-white">
                        I'm Ehab Al-shrida Telecom Enginner and Software developer
                          I have Technical and Commercial Background, I get it through
                          worrking in different domains of industry 

                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Components</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>{/*
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Download Argon
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Build Something
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
    </Row>*/}
    <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                    <img className="card-img-top mb-4" src="https://github.com/Ehabalshrida/chocolate-pizza/blob/main/img/Library.PNG" alt="..." />
                      <div className="card-lift--hover shadow border-0">
                        <div className="py-5">
                          <h4 className="text-primary text-uppercase">Passion Library</h4>
                          <p className="description mt-3"> Its Online Library have Books, Stories, Novels ... etc, and ask the user to suggest books to added to the website                       </p>
                          <p className="description mt-3"><small class="text-muted">201 final Project</small></p>
                          <a className="description mt-3 btn btn-primary"

                            href="https://ehabalshrida.github.io/library/"
                          >  Show More </a>
                        </div>
                      </div>
                       </Card>

                    </Col>
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                    <img className="card-img-top mb-4" src="https://github.com/Ehabalshrida/chocolate-pizza/blob/main/img/bus-mall.PNG" alt="..." />
                     
                      <div className="card-lift--hover shadow border-0">
                        <div className="py-5">
                          <h4 className="text-primary text-uppercase">Bus Mall</h4>
                          <p className="description mt-3"> Its an simple Application To follow the user visit on the website to use this data from another departments 
                          </p>
                          <p className="description mt-3"><small class="text-muted">Lab </small></p>
                          <a className="description mt-3 btn btn-primary"

                            href="https://ehabalshrida.github.io/bus-mall/"
                          >   Show More</a>
                        </div>
                      </div>
                   
                      </Card>

                    </Col>
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                    <img className="card-img-top mb-4" src="https://github.com/Ehabalshrida/chocolate-pizza/blob/main/img/cookie-stand.PNG" alt="..." />
                 
                      <div className="card-lift--hover shadow border-0">
                        <div className="py-5">
                          <h5 className="text-primary text-uppercase">Cookie-Stand</h5>
                          <p className="description mt-3">Its a Simple application give the user the ability to determine the average of daily sales based on the average of customers ber hour
                          </p>
                          <p className="description mt-3"><small class="text-muted">Lab</small></p>
                          <a className="description mt-3 btn btn-primary"
                            href="https://ehabalshrida.github.io/cookie-stand/"
                          > Show More </a>

                        </div>
                      </div>
                      
                       </Card>

                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section><br/><br/><br/><br/><br/>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="12">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                            <p className="description mt-3">
                             <div className="shape shape-style-1 shape-default alpha-4">
              <h2> EDUCATION 
              </h2><br/>
              <span><b>Abdul Aziz Al Ghurair School of Advanced Computing (ASAC) - Amman, Jordan</b><br/>
                    Course work completed in Dec / 2021- Advanced Software Development in Full-Stack JavaScript.
              </span><br/><br/>
              <span> <b>Albalqa’a applied university - Amman, jordan</b><br/>
	                   Bachelor of Telecommunication and software engineering

              </span><br/>

              
            </div>
                          </p>
                         
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                      </Col>
                      </Row>
                    </Col>
                    
                    
              </Row>
          
          
          
              
               
                
               
                
            </Container>
          </section>
          <br/><br/><br/><br/><br/><br/>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="12">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                            <p className="description mt-3">
                             <div className="shape shape-style-1 shape-default alpha-4">
              <h2> EXPERIENCE 
              </h2>
              
            </div>
                          </p>
                         
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                      </Col>
                      </Row>
                    </Col>
                    
                    
              </Row>
          
          
          
              
               
                
               
                
            </Container>
          </section>
          <br/><br/><br/><br/><br/>          <br/>
          <br/>
<section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="12">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                            <p className="description mt-3">
                             <div className="shape shape-style-1 shape-default alpha-4">

                               
              <span><h3>Revton, Amman, jordan , Merchandising specialist, Mar 2018 – Mar 2020</h3><br/>
              <ul>
               <li>Prepared monthly plan for events which should be pushed online</li>
               <li>Handle customers requests, and follow up their needs, and determine the prices based on the market needs and Special event and the competitors.</li>
               <li> Used E commerce Tools such that magneto Google analytic </li>
              </ul>
              </span><br/>
              
              
            </div>
                          </p>
                         
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                      </Col>
                      </Row>
                    </Col>
                    
                    
              </Row>
          
          
          
              
               
                
               
                
            </Container>
          </section>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="12">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                            <p className="description mt-3">
                             <div className="shape shape-style-1 shape-default alpha-4">

                             <span><h2>Cayan For Consulting, Irbid, Jordan, Consultant and Pre sale Engineer, Sep 2017– Dec 2017.</h2><br/>
             
             <ul>
               <li>Provided sales engineers with technical training and all Information to help them to get a strong Knowledge about the product or services that they shall announce for them.</li>
               
             </ul>

              </span>
              
              
            </div>
                          </p>
                         
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                      </Col>
                      </Row>
                    </Col>
                    
                    
              </Row>
          
          
          
              
               
                
               
                
            </Container>
          </section>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="12">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                            <p className="description mt-3">
                             <div className="shape shape-style-1 shape-default alpha-4">

                             <span><h2>Estarta, Amman, Jordan, Customer Support Engineer , Jan 2019 – Jun 2019.
               </h2><br/>
             <ul>
               <li>provided technical assistance for the Customers Regards The VOIP problems that they facence for them.
               </li>

             </ul></span>
              
              
            </div>
                          </p>
                         
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                      </Col>
                      </Row>
                    </Col>
                    
                    
              </Row>
          
          
          
              
               
                
               
                
            </Container>
          </section>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="12">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                            <p className="description mt-3">
                             <div className="shape shape-style-1 shape-default alpha-4">

                             <span><h2>Hi Electronic technology, Amman, Jordan, maintenance Engineer, Aug 2016 – Dec 2016
           </h2><br/>
           <ul>
               <li>Worked on scheduled and unscheduled maintenance for X-ray machines and Walk through which work at queen Alia Airport .
             </li>

             </ul></span>
              
            </div>
                          </p>
                         
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                      </Col>
                      </Row>
                    </Col>
                    
                    
              </Row>
          
          
          
              
               
                
               
                
            </Container>
          </section>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="12">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                            <p className="description mt-3">
                             <div className="shape shape-style-1 shape-default alpha-4">

                             <span><h2>Orange , Amman, Jordan, Bss and Field Trainee, Jun 2015– Jun 2016.
            </h2><br/>
             <ul>
               <li> Handling O&M activities of Ericsson   RBSs which include Troubleshooting and Fixing of these nodes .</li>
               <li>Worked with operation and maintenance terminal (OMT) for Ericsson GSM Radio base station  RBS operation and maintenance
               </li>

             </ul></span>
            </div>
                          </p>
                         
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                      </Col>
                      </Row>
                    </Col>
                    
                    
              </Row>
          
          
          
              
               
                
               
                
            </Container>
          </section>
         
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
