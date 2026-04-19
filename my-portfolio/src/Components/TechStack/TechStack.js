import React from 'react';
import "./TechStack.css";

const TechStack = () => {

    const data = [
        {
            name: "HTML"
        },
        {
            name: "javascript"
        },
        {
            name: "CSS"
        },
        {
            name: "React js"
        },
        {
            name: "Mysqli"
        },
        {
            name: "PHP"
        },
        {
            name: "Lavarvel"
        },
        {
            name: "Python"
        },
    ]
    const colors = [
        "#6C63FF", // Soft Neon Purple
        "#A393EB", // Lavender
        "#F2A6FF", // Pastel Pink
        "#FFB3C6", // Soft Rose
        "#FF8FA3", // Coral Pink
        "#FFBE0B", // Warm Amber
        "#FB5607", // Vibrant Orange
        "#8338EC", // Electric Violet
        "#3A86FF", // Bright Blue
        "#00C2A8", // Aqua Green
        "#06D6A0", // Mint Green
        "#1E1E2F", // Deep Night Blue
        "#B8F2E6", // Pale Mint
        "#F1FAEE", // Off White
        "#2D2A55", // Muted Indigo
        "#E9ECEF"  // Light Gray
    ];
    return (
        <div className='container techstack-section'>
            <div className='section-title'>
                <h5>Tech Stack</h5>
                <span className='line'></span>
            </div>
            <div className='row'>
                {data.map((item, index) => (
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                        <div className='tech-content'>
                            <span className='tech-number' style={{ backgroundColor: colors[index] }}>
                                {index + 1}
                            </span>
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TechStack