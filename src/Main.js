//handles react links

import React from 'react';
import {Route} from 'react-router-dom';
import {About} from './Pages/About';
import {Home} from './Pages/Home';
import {TutorialsDirectory} from './Pages/Tutorials/TutorialsDirectory';
import {ReviewsDirectory} from './Pages/Reviews/ReviewsDirectory';
import {ProjectsDirectory} from './Pages/Projects/ProjectsDirectory';
import {ProjectPage} from './Pages/Projects/ProjectPage';
import {NewsDirectory} from "./Pages/News/NewsDirectory";

export class Main extends React.Component{
    render(){
        return (
            <main>
                <div className = "container">
                    <Route exact path ='/' component =  {Home} />
                    <Route path ='/About' component =  {About} />
                    <Route path = '/Tutorials' component = {TutorialsDirectory} />
                    <Route path = '/Reviews' component = {ReviewsDirectory} />
                    <Route path = '/Projects' component = {ProjectsDirectory} />
                    <Route path = '/ProjectPage' component = {ProjectPage}/>
                    <Route path = '/News' component = {NewsDirectory}/>
                </div>
            </main>
        )
    }
}

