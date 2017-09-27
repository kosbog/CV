import React, { Component } from 'react';
import {skillsLevelAnimation} from '../utils/utils';
import Welcome from './Welcome';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', skillsLevelAnimation);
    }
    
    render() {
        return (
            <div className="container">
                <Welcome />
                <About />
                <Skills />
                <Experience />
            </div>
        );
    }
}

export default Home;