import React, { Component } from 'react';
import { skillsLevelAnimation, scrollToElement, fullExperience, getYear, checkPreloader, browserDetect, API } from '../utils/utils';
import Preloader from './Preloader';
import Welcome from './Welcome';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import Navigation from './Navigation';
import Footer from './Footer';
import Browser from './Browser';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioFull: 3,
            currentContact: "e-mail",
            loading: true,
            browser: ''
        };

        this.showMorePortfolio = this.showMorePortfolio.bind(this);
        this.checkContact = this.checkContact.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', skillsLevelAnimation);
        document.removeEventListener('scroll', skillsLevelAnimation, true);
        checkPreloader();
        browserDetect()
            .then(res => {
                if (res.isSupport) {
                    this.setState({ browser: true, loading: false });
                    getYear();
                }
            }).catch(e => console.log(e));

    }

    showMorePortfolio() {
        this.setState({ portfolioFull: this.state.portfolioFull + 3 });
    }

    checkContact(e) {
        this.setState({ currentContact: e.target.value });
    }

    renderContent(value) {
        return value
            ? [<Navigation
                key="nav"
                scrollToElement={scrollToElement}
                api={API} />,
            <Welcome
                key="welcome"
                scrollToElement={scrollToElement} />,
            <About key="about" />,
            <Skills
                key="skills"
                api={API} />,
            <Experience
                key="experience"
                api={API}
                fullExperience={fullExperience} />,
            <Portfolio
                key="portfolio"
                api={API}
                portfolioFull={this.state.portfolioFull}
                showMorePortfolio={this.showMorePortfolio} />,
            <Education
                key="education"
                api={API} />,
            <Contacts
                key="contacts"
                api={API}
                checkContact={this.checkContact}
                currentContact={this.state.currentContact} />,
            <Footer key="footer" />]
            : <Browser />
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.loading
                        ? <Preloader />
                        : this.renderContent(this.state.browser)
                }
            </div>
        );
    }
}

export default Home;