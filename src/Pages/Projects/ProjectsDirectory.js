import React from 'react';
import {Link} from 'react-router-dom';

export class ProjectsDirectory extends React.Component {
    render(){
        return (
            <div>
                <p>
                    Projects directory
                </p>
                <Link to = "/ProjectPage"> PiCar </Link>
            </div>
        )
    }
}