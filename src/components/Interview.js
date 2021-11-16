import React, { Component } from 'react';
import '../App.css';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import { Button } from 'reactstrap';

import timeline from '../resources/images/application/TimeLine2022.png';
import pagetitle from '../resources/images/interview/PageTitleImage.png';
import whoweare from '../resources/images/interview/WhoWeAre.png';
import whyCCE from '../resources/images/interview/WhyCCE.png';

class Interview extends Component {
    render() {
        return (
            <div className="all-content">
                <div className="content-wrap">
                    <AppNavbar />
                    <img width="100%" src={pagetitle} alt="page title" />
                    <div className="why-apply">
                        <div className="apply-button-1">
                            <Button disabled size="lg" color="warning" href="https://docs.google.com/forms/d/e/1FAIpQLSfEBdA-4XQf5Od-JdzWkbVQH8_pdIWd9_a_sLrswNVQoimmVQ/viewform?usp=sf_link" target="_blank" rel="noreferrer">Apply Now</Button>
                        </div>
                        <div className="text-center apply-button-3">
                            <Button disabled size="lg" color="warning" href="https://docs.google.com/forms/d/e/1FAIpQLSfEBdA-4XQf5Od-JdzWkbVQH8_pdIWd9_a_sLrswNVQoimmVQ/viewform?usp=sf_link" target="_blank" rel="noreferrer">Apply Now</Button>
                        </div>
                    </div>
                    <img width="100%" src={whoweare} alt="who we are" />
                    <img width="100%" src={whyCCE} alt="why CCE" />
                    <img width="100%" src={timeline} alt="timeline" />
                    <div className="foot">
                        <div className="text-center">
                            <Button disabled size="lg" color="warning" className="apply-button-2" href="https://docs.google.com/forms/d/e/1FAIpQLSfEBdA-4XQf5Od-JdzWkbVQH8_pdIWd9_a_sLrswNVQoimmVQ/viewform?usp=sf_link" target="_blank" rel="noreferrer">Apply Now</Button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Interview;