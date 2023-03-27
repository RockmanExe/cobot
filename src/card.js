import React from 'react';
import './card.css';

var name1 = "Mohammed Alrehaili";
var name2 = "Feras Alsubhi";
var name3 = "Ahmed Araara";
var name4 = "Junfu Cheng";
var name5 = "Matt Glory";
var name6 = "Adalberto May";
var name7 = "Liam Roulston";
var name8 = "Ethan Vandermolen";
var name9 = "Wuchang Weng";
var major1 = "Electrical Engineer";
var major2 = "Computer Science";

function Card () {
    return (
        <div className='infocard'>

            <div className='actualinfocard'>
                <img src="https://i.imgur.com/ztudPBX.jpg"
                 alt ='profile'
                />
                <h4> {name1} </h4>
                <h4> Role goes here -optional </h4>
                <h4> {major1} </h4>
            </div>

            <div className='actualinfocard'>
                <img src="https://i.imgur.com/BAU1yGJ.jpg"
                 alt ='profile'
                />
                <h4> {name2} </h4>
                <h4> Role goes here -optional </h4>
                <h4> {major1} </h4>
            </div>

            <div className='actualinfocard'>
                <img src="https://i.imgur.com/F5WWFY9.jpg"
                 alt ='profile'
                />
                <h4> {name3} </h4>
                <h4> Role goes here -optional </h4>
                <h4> {major1} </h4>
            </div>

            <div className='actualinfocard'>
                <img src="https://i.imgur.com/7MGTBua.jpg"
                 alt ='profile'
                />
                <h4> {name4} </h4>
                <h4> Role goes here -optional </h4>
                <h4> {major1} </h4>
            </div>

            <div className='actualinfocard'>
                <img src="https://i.imgur.com/NquUgS3.png"
                 alt ='profile'
                />
                <h4> {name5} </h4>
                <h4> Role goes here -optional </h4>
                <h4> {major1} </h4>
            </div>

            <div className='actualinfocard'>
                <img src="https://i.imgur.com/p9OH8y1.jpg"
                 alt ='profile'
                />
                <h4> {name6} </h4>
                <h4> Role goes here -optional </h4>
                <h4> {major1} </h4>
            </div>

            <div className='actualinfocard'>
                <img src="https://i.imgur.com/qiG7hVP.jpg"
                 alt ='profile'
                />
                <h4> {name7} </h4>
                <h4> Role goes here -optional </h4>
                <h4> {major1} </h4>
            </div>

            <div className='actualinfocard'>
                <img src="https://i.imgur.com/D3z40Ry.jpg"
                 alt ='profile'
                />
                <h4> {name8} </h4>
                <h4> Role goes here -optional </h4>
                <h4> {major1} </h4>
            </div>

            <div className='actualinfocard'>
                <img src="https://i.imgur.com/Frd0I04.jpg"
                 alt ='profile'
                />
                <h4> {name9} </h4>
                <h4> Role goes here -optional </h4>
                <h4> {major1} </h4>
            </div>

        </div>
    );
}

export default Card;