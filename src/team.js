import React from 'react';
import Card from './card';
import './team.css';

function Team(){
    return(
    <div className = 'team' id = "team">
        <h1> Meet the team </h1>
        <div className='teamcontent'>
            <Card/>
        </div>
    </div>
    );
}

export default Team;