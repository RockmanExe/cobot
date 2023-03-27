import React from 'react';
import './about.css';

function About(){
    return(
        <div className = 'about' id = "about">
            <div className = 'aboutContent'>
                <h1>About the Cobot Arm</h1>
                <p className='description'>
                    The purpose of this project is to establish a human-assisted robot arm capable of operating
                    with little-to-no user effort. With the assistance of multiple sensors, two arms are meant to interface, 
                    yielding proof of concept that the operator could move both robotic limbs simultaneously. For the purposes of eliciting finite movement,
                    the arm(s) demonstrate the movement of 3D-printed chess pieces about a full-size board. The location of chess pieces on the board is detected 
                    with individual photo-resistors to act as sensors for each of the 64 spaces. Using a chess API, the arm(s) is able to perform a game of chess autonomously.</p>
            </div>
        </div>
    );
}

export default About;