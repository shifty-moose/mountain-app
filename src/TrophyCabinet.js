import React, { useEffect, useState } from "react";
import "./TrophyCabinet.css";
import { type } from "@testing-library/user-event/dist/type";





const TrophyCabinet = (props) => {

    const [completedTrophies, setCompletedTrophies] = useState([]);
    const [uncompletedTrophies, setUncompletedTrophies] = useState([]);

    const elevation = props.elevation;

    const badges = [
        {
            name: "Everest Badge",
            image: process.env.PUBLIC_URL + '/img/Trophies/everestBadge.png',
            completionElevation: 8848,
            incompletionString: `Climb another ${8848 - elevation}m to complete Everest and earn this badge!`
        },
        {
            name: "Anaconcagua Badge",
            image: process.env.PUBLIC_URL + '/img/Trophies/anacanoogaBadge.png',
            completionElevation: 6962,
            incompletionString: `Climb another ${6962 - elevation}m to complete Anaconcagua and earn this badge!`
        },
        {
            name: "Denali Badge",
            image: process.env.PUBLIC_URL + '/img/Trophies/denaliBadge.png',
            completionElevation: 6190,
            incompletionString: `Climb another ${6190 - elevation}m to complete Denali and earn this badge!`
        },
        {
            name: "Kilimanjaro Badge",
            image: process.env.PUBLIC_URL + '/img/Trophies/kiliBadge.png',
            completionElevation: 5895,
            incompletionString: `Climb another ${5895 - elevation}m to complete Kilimanjaro and earn this badge!`
        },
        {
            name: "Elbrus Badge",
            image: process.env.PUBLIC_URL + '/img/Trophies/elbrusBadge.png',
            completionElevation: 5642,
            incompletionString: `Climb another ${5642 - elevation}m to complete Elbrus and earn this badge!`
        },
        {
            name: "Vinson Badge",
            image: process.env.PUBLIC_URL + '/img/Trophies/vinsonBadge.png',
            completionElevation: 4892,
            incompletionString: `Climb another ${4892 - elevation}m to complete Vinson and earn this badge!`
        },
        {
            name: "Puncak Badge",
            image: process.env.PUBLIC_URL + '/img/Trophies/puncakBadge.png',
            completionElevation: 4884,
            incompletionString: `Climb another ${4884 - elevation}m to complete Puncak Jaya and earn this badge!`
        },
        {
            name: "Fuji Badge",
            image: process.env.PUBLIC_URL + '/img/Trophies/fujiBadge.png',
            completionElevation: 3776,
            incompletionString: `Climb another ${3776 - elevation}m to complete Mt Fuji and earn this badge!`
        },
        {
            name: "Aus Badge",
            image: process.env.PUBLIC_URL + '/img/Trophies/ausBadge.png',
            completionElevation: 2228,
            incompletionString: `Climb another ${2228 - elevation}m to complete Mt Kosciuszko and Mt Buller and earn this badge!`
        },
        {
            name: "Scotland Badge",
            image: process.env.PUBLIC_URL + '/img/Trophies/scotlandBadge.png',
            completionElevation: 1345,
            incompletionString: `Climb another ${1345 - elevation}m to complete Ben Nevis and earn this badge!`
        },
        {
            name: "NYC Badge",
            image: process.env.PUBLIC_URL + '/img/Trophies/nycBadge.png',
            completionElevation: 541,
            incompletionString: `Climb another ${541 - elevation}m to complete the One World Trade Center and earn this badge!`
        },
        {
            name: "Holland Badge",
            image: process.env.PUBLIC_URL + '/img/Trophies/hollandBadge.png',
            completionElevation: 323,
            incompletionString: `Climb another ${323 - elevation}m to complete Der Vaalsberg and earn this badge!`
        },
        {
            name: "Amazon Badge",
            image: process.env.PUBLIC_URL + '/img/Trophies/amazonBadge.png',
            completionElevation: 100,
            incompletionString: `Climb another ${100 - elevation}m to complete your first 100m and earn this badge!`
        }
    ];

    const evaluateTrophyCompletion = (elevation) => {

        let complete = [];
        let incomplete = [];

        badges.forEach((badge) => {
            if (elevation >= badge.completionElevation) {
                complete.push(badge);
            } else {
                incomplete.push(badge);
            };
        });

        complete.reverse();
        incomplete.reverse();

        setCompletedTrophies(complete);
        setUncompletedTrophies(incomplete);

    };


    useEffect(() => {
        evaluateTrophyCompletion(elevation);
    }, [elevation]);

    return (

    <div className="trophyCabinetContainer">

        <div className="trophyCabinetHeader">
            <h2>Trophy Cabinet:</h2>
            <h3 id='trophyInfo'>▾ Hover over a badge for more information</h3>
        </div>

        <div className="trophyCabinet">
            
            {completedTrophies.map((badge) => {
                return (
                    <div className="trophy">
                        <img 
                        src={badge.image} 
                        className="trophyImg completeTrophy"
                        onMouseOver={() => {
                            document.getElementById('trophyInfo').innerHTML = badge.name;
                            document.getElementById('trophyInfo').classList.add('fadeIn');
                        }}
                        onMouseOut={() => {
                            document.getElementById('trophyInfo').innerHTML = '▾ Hover over a badge for more information';
                            document.getElementById('trophyInfo').classList.remove('fadeIn');
                        }}
                        
                        />
                    </div>
                );
            })}

            {uncompletedTrophies.map((badge) => {
                return (
                    <div className="trophy">
                        <img 
                        src={badge.image} 
                        className="trophyImg incompleteTrophy"
                        onMouseOver={() => {
                            document.getElementById('trophyInfo').innerHTML = badge.incompletionString;
                        }}
                        onMouseOut={() => {
                            document.getElementById('trophyInfo').innerHTML = '▾ Hover over a badge for more information';
                        }}
                        />
                    </div>
                );
            })}
        </div>
    </div>
    );
};

export default TrophyCabinet;