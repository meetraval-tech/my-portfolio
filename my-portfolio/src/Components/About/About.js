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
                          I’m a web developer with experience in PHP, specializing in building and maintaining dynamic websites and web applications. I have worked on backend development, database management, and creating efficient, user-friendly solutions. Along with PHP, I’m skilled in HTML, CSS, and JavaScript, and I focus on writing clean, maintainable, and practical code that delivers reliable performance in real-world projects.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About