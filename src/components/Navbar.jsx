import React from "react";
import reactLogo from '../assets/react.svg'

export default function Navbar() {
    return(
    <div className="container">
        <header>
            <nav>
                <div className="img">
                    <img src={reactLogo} />
                    <h3>ReactsFacts</h3>
                </div>
                <div className="course">
                    <h4>React Course - Project 1</h4>
                </div>
            </nav>
        </header>
    </div>
    )
}


