import React from 'react';
import {Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const HomeArticleIntro = (props) => {
    const {image, title, subtitle, text, link, button} = props;
    return (
        <Col xs="6" sm="4">
            <Card>
                <CardImg className="cardimg" top width="100%" src={image} alt="Card image cap"/>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{subtitle}</CardSubtitle>
                    <CardText>{text}</CardText>

                    <Link to={link}>
                        <Button>{button}</Button>
                    </Link>
                </CardBody>
            </Card>
        </Col>
    )
};

export default HomeArticleIntro;