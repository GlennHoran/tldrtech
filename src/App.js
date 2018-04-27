import React, {Component} from 'react';
import {Navigation} from './Main/Header'
import {Footer} from './Main/Footer';
import {BrowserRouter as Router} from 'react-router-dom'
import { Main } from "./Main";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navigation/>
                    <Main />
                    <Footer />

                </div>
            </Router>
        );
    }
}
export default App;
