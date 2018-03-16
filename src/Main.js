import React from 'react';
import {Route} from 'react-router-dom';
import {About} from './Pages/About';
import {Home} from './Pages/Home';
import {Tutorials} from './Pages/Tutorials';
import {Reviews} from './Pages/Reviews';
import {Projects} from './Pages/Projects';
import {PiCar} from './Pages/Projects/PiCar';

export class Main extends React.Component{
    render(){
        return (
            <main>
                <div className = "container">
                    <Route exact path ='/' component =  {Home} />
                    <Route path ='/About' component =  {About} />
                    <Route path = '/Tutorials' component = {Tutorials} />
                    <Route path = '/Reviews' component = {Reviews} />
                    <Route path = '/Projects' component = {Projects} />
                    <Route path = '/PiCar' component = {PiCar}/>
                </div>
            </main>
        )
    }
}

