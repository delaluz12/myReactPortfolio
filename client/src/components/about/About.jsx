import React from 'react';
import photography from "../../images/photography.jpg";
import award from "../../images/award.jpg";

import "./About.css"

export default function About() {
    return (
        <div className='about'>
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={photography} alt="" className="about-img" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title"> About Me</h1>
                <p className="about-sub">It is a long established fact that a reader will be distracted by the readable content</p>
                <p className="about-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed autem, id facere veniam ducimus aliquam dolorem similique minus mollitia quod ratione, neque fugit maxime corrupti quos tempore quidem magnam consequuntur.</p>
                <div className="about-award">
                    <img src={award} alt="" className="about-award-img" />
                    <div className="about-award-text">
                        <h4 className="about-award-title">Some award</h4>
                        <p className="about-award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
