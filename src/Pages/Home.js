import React from 'react';
import {Jumbotron, Row} from 'reactstrap';
import './home.css';
import raspi from './img/raspi.png';
import unicron from './img/unicorn.jpg';
import codeimg from './img/code.PNG';
import HomeArticleIntro from "./HomeArticleIntro";

export const Home = () => (
        <div>
            <div>
            <Jumbotron className = 'jumboHome'>
                <div >
                    <h1 className = 'jumboWords' >TLDR:Tech Heroku!</h1></div>
            </Jumbotron>
            </div>
            <Row>
                <HomeArticleIntro image={codeimg}
                                  title="Tutorials"
                                  subtitle="Get learning!"
                                  text="Here you can find beginner friendly overviews of Raspberry Pis, Arduinos, Linux etc."
                                  link="/Tutorials"
                                  button="TeachMe!"/>
                <HomeArticleIntro image={raspi}
                                  title="Projects"
                                  subtitle="Send a car to space!"
                                  text="Ok, maybe not send a car to space, but we do have a variety of projects catering to all levels"
                                  link="/Projects"
                                  button="Let's get making!"/>
                <HomeArticleIntro image={unicron}
                                  title="Reviews"
                                  subtitle="Is that hat as awesome as it looks?"
                                  text="We review a range of tech must haves (and wants!) from cheap arduino clones to 3d printers"
                                  link="/Reviews"
                                  button="Tell me what to buy!"/>
            </Row>

        </div>

)


