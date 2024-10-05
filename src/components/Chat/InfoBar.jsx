import React from "react";

import LOGOUT from './../../Images/LOGOUT.png';
import Frame12 from './../../Images/coin_icon.png';

import './InfoBar.css';

export const InfoBar = ({room}) =>{
    return (
        <div className="infobar">
            <div className="leftInnerContainer">
                <div><img className="onlineicon" src={Frame12} alt="Online image"/></div>
                <div className="roomInfo">{room}</div> 
                <div className="closeIconContainer">
                    <a href="/"><img className="closeicon" src={LOGOUT} alt="close image"/></a>
                </div>
            </div>
        </div> 
    )
}