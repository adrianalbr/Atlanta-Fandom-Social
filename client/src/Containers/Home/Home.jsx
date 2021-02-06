import React from "react";
import { Col, Row, Container } from "../../Components/Grid/Grid"
import Cardpost from "../../Components/Cardpost/Cardpost";
import Menu from "../../Components/Menu/Menu";
import ViewPosts from "../../Components/ViewPosts/ViewPosts";

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-4">
                    <br/>
                    <Menu/>
                </Col>

                <Col size="md-6">
                    <Cardpost/>
                </Col>
                    <ViewPosts/>
            </Row>
      </Container>
    );
};

export default Home;