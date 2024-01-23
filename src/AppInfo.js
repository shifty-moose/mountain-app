import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { useSpring, useChain, animated, config } from 'react-spring';
import { easings } from '@react-spring/web';


const AppInfo = (props) => {
    const [state, setState] = useState(true);

    let name = props.name || 'User';
    let elevation = props.elevation;

    const formatElevation = (elevation) => {
        const elevationInt = parseInt(elevation, 10);
        return isNaN(elevationInt) ? '0' : elevationInt.toLocaleString('en-US');
      };
      

      const calculateEverestPercent = (elevation) => {
        const elevationInt = parseInt(elevation, 10);
        const everest = 8848;
        const percent = (elevationInt / everest) * 100;
        return isNaN(percent) ? '0' : percent.toFixed(0);
      };
      

    let formattedElevation = formatElevation(elevation);
    let calculatedPercentage = calculateEverestPercent(elevation);
    let intPercentage = parseInt(calculatedPercentage, 10);


    const leftTextAnimationConfig = {
        from: { opacity: 0, transform: 'translateX(-400px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 800 },
        easings: easings.easeInCubic,
    };
    
    const rightTextAnimationConfig = {
        from: { opacity: 0, transform: 'translateY(-200px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 800 },
        delay: 800,
    };
    
    const leftTextAnimation = useSpring(leftTextAnimationConfig);
    const rightTextAnimation = useSpring(rightTextAnimationConfig);

    const elevationSpring = useSpring({
        from: { value: 0 },
        to: { value: elevation },
        config: { duration: 5000 },
        delay: 3000,
    });


    const percentageSpring = useSpring({
        from: { value: 0 },
        to: { value: intPercentage },
        config: { duration: 3000,  },
        delay: 8000,
    });

    return (
        <div className="appDivText">

            <animated.div className="leftText" style={leftTextAnimation}>
                <h1>Hey, {name}!</h1>
            </animated.div>

            <animated.div className="rightText" style={rightTextAnimation}>

                <h1>
                <animated.span>
                {elevationSpring.value.to((val) => {
                    return formatElevation(val);
                })}
                </animated.span>
                m Climbed
                </h1>

                <h2>
                <animated.span>
                {percentageSpring.value.to((val) => val.toFixed(0))}
                </animated.span>
                % to Everest Peak
                </h2>
            </animated.div>
        </div>
    );
};

export default AppInfo;
