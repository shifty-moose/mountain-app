import React from "react";
import "./TrophyCabinet.css";
const everestBadge = process.env.PUBLIC_URL + '/img/Trophies/everestBadge.png';
const anaconcaguaBadge = process.env.PUBLIC_URL + '/img/Trophies/anacanoogaBadge.png';
const denaliBadge = process.env.PUBLIC_URL + '/img/Trophies/denaliBadge.png';
const kilimanjaroBadge = process.env.PUBLIC_URL + '/img/Trophies/kiliBadge.png';
const elbrusBadge = process.env.PUBLIC_URL + '/img/Trophies/elbrusBadge.png';
const vinsonBadge = process.env.PUBLIC_URL + '/img/Trophies/vinsonBadge.png';
const puncakBadge = process.env.PUBLIC_URL + '/img/Trophies/puncakBadge.png';

const trophyArray = [everestBadge, anaconcaguaBadge, denaliBadge, kilimanjaroBadge, elbrusBadge, vinsonBadge, puncakBadge];

const TrophyCabinet = () => {
    return (

    <div className="trophyCabinet">
        {trophyArray.map((trophy) => {
            return (
                <img src={trophy} className="trophyImg"/>
            );
        })};
    </div>
    );
};

export default TrophyCabinet;