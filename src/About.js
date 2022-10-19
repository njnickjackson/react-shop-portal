import React from "react";
import './css/About.css';

function About() {
    return (
        <div className="about-page">
            <div className="company-image">
                <img src={require('./images/company-building.jpg')} alt="the company meeting room" />
            </div>
            <div className="company-statement">
                <h2>Welcome to our Company!</h2>
                <p>Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that this company’s placeholder text is a fraud.</p>
            </div>
        </div>
    )
}

export default About