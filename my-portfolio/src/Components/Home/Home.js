import React from "react";
import "./Home.css";
import Typewriter from 'typewriter-effect';
import Mycv from "./cv.pdf"

const Home = () => {
    return (
        <div className="container-fluid home">
            <div className="container home-content">
                <h1>Hi, I'm Meet Raval</h1>
                <h3><Typewriter
                    options={{
                        strings: ["Web Developer",
                            "Crafting Modern Websites",
                            "React Enthusiast",
                            "Building Clean UI",
                            "Turning Ideas into Code"],
                        autoStart: true,
                        loop: true,
                    }}
                /></h3>
                <div className="button-for-action">
                    <div className="hire-me-button">
                        Here Me
                    </div>
                    <div className="get-resume-button">
                        <a href={Mycv} download="Meet_Raval_cv.pdf" >
                        Get Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;