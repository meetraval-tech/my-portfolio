import React from "react";
import "./About.css";
import ProfilePic from "../../Image/Meet-cv.png";

const About = () => {
    return (
        <div className="container about-section">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-image">
                        <img src={ProfilePic} alt="profile photo" />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-details">
                        <div className="about-title">
                            <h5>About Me</h5>
                            <span className="line">
                            </span>
                        </div>
                        <p className="description">
                           I’m a web developer with 1 year of experience working with PHP. I’ve built and maintained websites, worked on backend logic, and handled basic database tasks. I’m comfortable with HTML, CSS, and JavaScript, and I focus on writing clean, practical code that works well in real projects.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About