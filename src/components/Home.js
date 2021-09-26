import React,{Component} from 'react';
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';

class Home extends  Component {

    componentDidMount() {
        document.title = "Home | React App";
    }

    render() {
        return(
            <Container>
                <CardGroup className="m-2 d-flex">
                    <Card className="border-0">
                        <Row>
                            <Col sm>
                                <Card.Body>
                                    <Card.Title as="h1">Loreum ipsum</Card.Title>
                                    <Card.Text as="p" className="text-justify">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col sm> 
                                <Card.Img  style={{ marginTop: '50px',height:'250px',width:'100%'}} src="https://global-uploads.webflow.com/5eb266960d5bdff6aa937e5e/5eeb187c106afb31f399fd3b_SunRay_Logo.svg" />
                            </Col>
                        </Row>
                    </Card>
                </CardGroup>
            </Container>
        );
    }
}

export default Home;