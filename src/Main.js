import React from 'react';
import {Route} from 'react-router-dom';
import  {News} from './Pages/News';
import {About} from './Pages/About';
import {Home} from './Pages/Home';

export class Main extends React.Component{
    render(){
        return (
            <main>
                <div className = "container">
                    <Route exact path ='/' component =  {Home} />
                    <Route path ='/About' component =  {About} />
                </div>
            </main>
        )
    }
}

