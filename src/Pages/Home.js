import React from 'react';
import {Jumbotron, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import './home.css';
import raspi from './img/raspi.png';
import unicron from './img/unicorn.jpg';
import codeimg from './img/code.PNG';

export const Home = () => (
        <div>
            <div>
            <Jumbotron className = 'jumboHome'>
                <div >
                    <h1 className = 'jumboWords'>TLDR:Tech</h1></div>
            </Jumbotron>
            </div>
            <Row>
                <Col xs="6" sm="4">
                    <Card>
                        <CardImg className="cardimg" top width="100%" src = {codeimg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Tutorials</CardTitle>
                            <CardSubtitle>Get learning!</CardSubtitle>
                            <CardText>Here you can find beginner friendly overviews of Raspberry Pis, Arduinos, Linux etc. </CardText>
                            <Button>TeachMe!</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="6" sm="4">
                    <Card>
                        <CardImg className="cardimg" top width="100%" src ={raspi}  alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Projects</CardTitle>
                            <CardSubtitle>Send a car to space!</CardSubtitle>
                            <CardText>Ok, maybe not send a car to space, but we do have a variety of projects catering to all levels</CardText>
                            <Button>Let's get making!</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card>
                        <CardImg className="cardimg" top width="100%" src = {unicron} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Reviews</CardTitle>
                            <CardSubtitle>Is that hat as awesome as it looks?</CardSubtitle>
                            <CardText>We review a range of tech must haves (and wants!) from cheap arduino clones to 3d printers </CardText>
                            <Button>Tell me what to buy!</Button>
                        </CardBody>
                    </Card>
                    </Col>


            </Row>

        </div>



)


