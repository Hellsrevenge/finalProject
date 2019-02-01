import React, { Component} from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import NavHome from "../../components/NavHome/NavHome";
import Footer from "../../components/Footer/Footer";
import home from "./home.jpg";

class Home extends Component {

  render() {
    return (
      <Container fluid>
  
        <NavHome />

        <Row>
          <Col size="8">
            <img src={home} alt ="UCare"/>
          </Col>
          <Col size="4">
            <div>
              <p>We are a cloud based</p>
            </div>
          </Col>
        </Row>

        <Footer />

       </Container>
    );
  }
}

export default Home;
