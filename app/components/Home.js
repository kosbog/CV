import React, { Component } from 'react';
import { skillsLevelAnimation } from '../utils/utils';
import Welcome from './Welcome';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';
import Contacts from './Contacts';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioFull: 3,
            currentContact: "e-mail"
        };

        this.showMorePortfolio = this.showMorePortfolio.bind(this);
        this.checkContact = this.checkContact.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', skillsLevelAnimation);
        document.removeEventListener('scroll', skillsLevelAnimation, true);
    }

    showMorePortfolio() {
        this.setState({ portfolioFull: this.state.portfolioFull + 3 });
    }

    checkContact(e) {
        this.setState({
            currentContact: e.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <Welcome />
                <About />
                <Skills />
                <Experience />
                <Portfolio
                    portfolioFull={this.state.portfolioFull}
                    showMorePortfolio={this.showMorePortfolio} />
                <Education />
                <Contacts
                    checkContact={this.checkContact}
                    currentContact={this.state.currentContact} />
            </div>
        );
    }
}

export default Home;