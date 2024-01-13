import React, { useEffect, useRef, useState } from 'react';
import * as PIXI from 'pixi.js';
import { Sprite, Texture } from 'pixi.js';
import { gsap } from 'gsap';
import { type } from '@testing-library/user-event/dist/type';

import './CreateCanvas.css';

const CreateCanvas = (props) => {
    const [mapMarker, setMapMarker] = useState(true);
    const [mapMarkerLabel, setMapMarkerLabel] = useState(true);
    const [mapMarkerLine, setMapMarkerLine] = useState(true);
    const [mapMarkerLineTwo, setMapMarkerLineTwo] = useState(true);
    const canvasRef = useRef();
    const appRef = useRef();

    let elevation = props.elevation;

    // Function to create the map marker
    const createMapMarker = (xPos, yPos) => {   
        let mapMarkerTexture = PIXI.Texture.from('./img/mapMarker.png');
        let mapMarker = new PIXI.Sprite(mapMarkerTexture);

        console.log(xPos, yPos);

        if (xPos < 400 && yPos <= 300 ) {
            mapMarker.x = xPos;
            mapMarker.y = yPos;
            mapMarker.alpha = 0;

            let mapMarkerLabel = new PIXI.Text('You are here', { 
                fontFamily: 'Helvetica',
                fontWeight: '100',
                fontSize: 24, 
                fill: 'black', 
                align: 'left',
            });

            mapMarkerLabel.x = xPos + 315;
            mapMarkerLabel.y = yPos - 15;
            mapMarkerLabel.alpha = 0;

            let mapMarkerLine = new PIXI.Graphics();
            mapMarkerLine.lineStyle(1, 'black', 1);
            mapMarkerLine.moveTo(xPos + 5, yPos + 5);
            mapMarkerLine.lineTo(xPos + 300, yPos + 5);
            mapMarkerLine.closePath();
            mapMarkerLine.scale.x = 0; 

            let mapMarkerLineTwo = new PIXI.Graphics();
            mapMarkerLineTwo.alpha = 0;

            setMapMarker(mapMarker);
            setMapMarkerLabel(mapMarkerLabel);
            setMapMarkerLine(mapMarkerLine);
            setMapMarkerLineTwo(mapMarkerLineTwo);

            appRef.current.stage.addChild(mapMarkerLine);
            appRef.current.stage.addChild(mapMarkerLineTwo);
            appRef.current.stage.addChild(mapMarkerLabel);
            appRef.current.stage.addChild(mapMarker);

            gsap.to(mapMarker, { alpha: 1, duration: 1.5, delay: 0.1 });
            gsap.to(mapMarkerLine.scale, { x: 1, duration: 1.5, delay: 0.11 });
            gsap.to(mapMarkerLabel, { alpha: 1, duration: 1.5, delay: 0.12 });

    }  else if (xPos > 600 &&  yPos <= 444 ) {

        mapMarker.x = xPos;
        mapMarker.y = yPos;
        mapMarker.alpha = 0;

        let mapMarkerLabel = new PIXI.Text('You are here', { 
            fontFamily: 'Helvetica',
            fontWeight: '100',
            fontSize: 24, 
            fill: 'black', 
            align: 'left',
        });

        mapMarkerLabel.x = xPos - 250;
        mapMarkerLabel.y = yPos - 209;
        mapMarkerLabel.alpha = 0;

        let mapMarkerLine = new PIXI.Graphics();
        mapMarkerLine.lineStyle(1, 'black', 1);
        mapMarkerLine.moveTo(xPos + 5, yPos + 5);
        mapMarkerLine.lineTo(xPos + 5, yPos - 191);
        mapMarkerLine.closePath();
        mapMarkerLine.scale.y = 0; 

        let mapMarkerLineTwo = new PIXI.Graphics();
        mapMarkerLineTwo.lineStyle(1, 'black', 1);
        mapMarkerLineTwo.moveTo(xPos + 5, yPos - 191);
        mapMarkerLineTwo.lineTo(xPos -100, yPos - 191);
        mapMarkerLineTwo.closePath();
        mapMarkerLineTwo.scale.x = 0; 

        setMapMarker(mapMarker);
        setMapMarkerLabel(mapMarkerLabel);
        setMapMarkerLine(mapMarkerLine);
        setMapMarkerLineTwo(mapMarkerLineTwo);

        appRef.current.stage.addChild(mapMarkerLine);
        appRef.current.stage.addChild(mapMarkerLineTwo);
        appRef.current.stage.addChild(mapMarkerLabel);
        appRef.current.stage.addChild(mapMarker);

        gsap.to(mapMarker, { alpha: 1, duration: 1.5, delay: 0.1 });
        gsap.to(mapMarkerLine.scale, { y: 1, duration: 1.5, delay: 0.11 });
        gsap.to(mapMarkerLineTwo.scale, { x: 1, duration: 1.5, delay: 0.11 });
        gsap.to(mapMarkerLabel, { alpha: 1, duration: 1.5, delay: 0.12 });

    } else if (xPos <= 600 &&  yPos <= 444 ) {
            
            mapMarker.x = xPos;
            mapMarker.y = yPos;
            mapMarker.alpha = 0;
    
            let mapMarkerLabel = new PIXI.Text('You are here', { 
                fontFamily: 'Helvetica',
                fontWeight: '100',
                fontSize: 24, 
                fill: 'black', 
                align: 'left',
            });
    
            mapMarkerLabel.x = xPos + 115;
            mapMarkerLabel.y = yPos - 109;
            mapMarkerLabel.alpha = 0;
    
            let mapMarkerLine = new PIXI.Graphics();
            mapMarkerLine.lineStyle(1, 'black', 1);
            mapMarkerLine.moveTo(xPos + 5, yPos + 5);
            mapMarkerLine.lineTo(xPos + 5, yPos - 91);
            mapMarkerLine.closePath();
            mapMarkerLine.scale.y = 0; 
    
            let mapMarkerLineTwo = new PIXI.Graphics();
            mapMarkerLineTwo.lineStyle(1, 'black', 1);
            mapMarkerLineTwo.moveTo(xPos + 5, yPos - 91);
            mapMarkerLineTwo.lineTo(xPos + 100, yPos - 91);
            mapMarkerLineTwo.closePath();
            mapMarkerLineTwo.scale.x = 0; 
    
            setMapMarker(mapMarker);
            setMapMarkerLabel(mapMarkerLabel);
            setMapMarkerLine(mapMarkerLine);
            setMapMarkerLineTwo(mapMarkerLineTwo);
    
            appRef.current.stage.addChild(mapMarkerLine);
            appRef.current.stage.addChild(mapMarkerLineTwo);
            appRef.current.stage.addChild(mapMarkerLabel);
            appRef.current.stage.addChild(mapMarker);
    
            gsap.to(mapMarker, { alpha: 1, duration: 1.5, delay: 0.1 });
            gsap.to(mapMarkerLine.scale, { y: 1, duration: 1.5, delay: 0.11 });
            gsap.to(mapMarkerLineTwo.scale, { x: 1, duration: 1.5, delay: 0.11 });
            gsap.to(mapMarkerLabel, { alpha: 1, duration: 1.5, delay: 0.12 });
    } else if (xPos > 800 &&  yPos > 444 ) {
        mapMarker.x = xPos;
        mapMarker.y = yPos;
        mapMarker.alpha = 0;

        let mapMarkerLabel = new PIXI.Text('You are here', { 
            fontFamily: 'Helvetica',
            fontWeight: '100',
            fontSize: 24, 
            fill: 'black', 
            align: 'left',
        });

        mapMarkerLabel.x = xPos - 250;
        mapMarkerLabel.y = yPos - 359;
        mapMarkerLabel.alpha = 0;

        let mapMarkerLine = new PIXI.Graphics();
        mapMarkerLine.lineStyle(1, 'black', 1);
        mapMarkerLine.moveTo(xPos + 5, yPos + 5);
        mapMarkerLine.lineTo(xPos + 5, yPos - 340);
        mapMarkerLine.closePath(); 
        mapMarkerLine.scale.y = 0; 

        let mapMarkerLineTwo = new PIXI.Graphics();
        mapMarkerLineTwo.lineStyle(1, 'black', 1);
        mapMarkerLineTwo.moveTo(xPos + 5, yPos - 340);
        mapMarkerLineTwo.lineTo(xPos -100, yPos - 340);
        mapMarkerLineTwo.closePath();
        mapMarkerLineTwo.scale.x = 0; 

        setMapMarker(mapMarker);
        setMapMarkerLabel(mapMarkerLabel);
        setMapMarkerLine(mapMarkerLine);
        setMapMarkerLineTwo(mapMarkerLineTwo);

        appRef.current.stage.addChild(mapMarkerLine);
        appRef.current.stage.addChild(mapMarkerLineTwo);
        appRef.current.stage.addChild(mapMarkerLabel);
        appRef.current.stage.addChild(mapMarker);

        gsap.to(mapMarker, { alpha: 1, duration: 1.5, delay: 0.1 });
        gsap.to(mapMarkerLine.scale, { y: 1, duration: 1.5, delay: 0.11 });
        gsap.to(mapMarkerLineTwo.scale, { x: 1, duration: 1.5, delay: 0.11 });
        gsap.to(mapMarkerLabel, { alpha: 1, duration: 1.5, delay: 0.12 });

    } else if (xPos <= 800 && xPos > 300 && yPos > 444 ) {
        mapMarker.x = xPos;
        mapMarker.y = yPos;
        mapMarker.alpha = 0;

        let mapMarkerLabel = new PIXI.Text('You are here', { 
            fontFamily: 'Helvetica',
            fontWeight: '100',
            fontSize: 24, 
            fill: 'black', 
            align: 'left',
        });

        mapMarkerLabel.x = xPos + 115;
        mapMarkerLabel.y = yPos - 457;
        mapMarkerLabel.alpha = 0;

        let mapMarkerLine = new PIXI.Graphics();
        mapMarkerLine.lineStyle(1, 'black', 1);
        mapMarkerLine.moveTo(xPos + 5, yPos + 5);
        mapMarkerLine.lineTo(xPos + 5, yPos - 441);
        mapMarkerLine.closePath();
        mapMarkerLine.scale.y = 0; 

        let mapMarkerLineTwo = new PIXI.Graphics();
        mapMarkerLineTwo.lineStyle(1, 'black', 1);
        mapMarkerLineTwo.moveTo(xPos + 5, yPos - 441);
        mapMarkerLineTwo.lineTo(xPos + 100, yPos - 441);
        mapMarkerLineTwo.closePath();
        mapMarkerLineTwo.scale.x = 0; 

        setMapMarker(mapMarker);
        setMapMarkerLabel(mapMarkerLabel);
        setMapMarkerLine(mapMarkerLine);
        setMapMarkerLineTwo(mapMarkerLineTwo);

        appRef.current.stage.addChild(mapMarkerLine);
        appRef.current.stage.addChild(mapMarkerLineTwo);
        appRef.current.stage.addChild(mapMarkerLabel);
        appRef.current.stage.addChild(mapMarker);

        gsap.to(mapMarker, { alpha: 1, duration: 1.5, delay: 0.1 });
        gsap.to(mapMarkerLine.scale, { y: 1, duration: 1.5, delay: 0.11 });
        gsap.to(mapMarkerLineTwo.scale, { x: 1, duration: 1.5, delay: 0.11 });
        gsap.to(mapMarkerLabel, { alpha: 1, duration: 1.5, delay: 0.12 });
        
    } else if (xPos <= 800 && yPos > 444) {
        mapMarker.x = xPos;
        mapMarker.y = yPos;
        mapMarker.alpha = 0;

        let mapMarkerLabel = new PIXI.Text('You are here', { 
            fontFamily: 'Helvetica',
            fontWeight: '100',
            fontSize: 24, 
            fill: 'black', 
            align: 'left',
        });

        mapMarkerLabel.x = xPos + 315;
        mapMarkerLabel.y = yPos - 507;
        mapMarkerLabel.alpha = 0;

        let mapMarkerLine = new PIXI.Graphics();
        mapMarkerLine.lineStyle(1, 'black', 1);
        mapMarkerLine.moveTo(xPos + 5, yPos + 5);
        mapMarkerLine.lineTo(xPos + 5, yPos - 490);
        mapMarkerLine.closePath();
        mapMarkerLine.scale.y = 0; 

        let mapMarkerLineTwo = new PIXI.Graphics();
        mapMarkerLineTwo.lineStyle(1, 'black', 1);
        mapMarkerLineTwo.moveTo(xPos + 5, yPos - 490);
        mapMarkerLineTwo.lineTo(xPos + 302, yPos - 490);
        mapMarkerLineTwo.closePath();
        mapMarkerLineTwo.scale.x = 0; 

        setMapMarker(mapMarker);
        setMapMarkerLabel(mapMarkerLabel);
        setMapMarkerLine(mapMarkerLine);
        setMapMarkerLineTwo(mapMarkerLineTwo);

        appRef.current.stage.addChild(mapMarkerLine);
        appRef.current.stage.addChild(mapMarkerLineTwo);
        appRef.current.stage.addChild(mapMarkerLabel);
        appRef.current.stage.addChild(mapMarker);

        gsap.to(mapMarker, { alpha: 1, duration: 1.5, delay: 0.1 });
        gsap.to(mapMarkerLine.scale, { y: 1, duration: 1.5, delay: 0.11 });
        gsap.to(mapMarkerLineTwo.scale, { x: 1, duration: 1.5, delay: 0.11 });
        gsap.to(mapMarkerLabel, { alpha: 1, duration: 1.5, delay: 0.12 });
        
    } else {
        console.log("Not valid coordinates");
    }
};

    


    useEffect(() => {

        console.log('useEffect 1 called');

        // Create the application helper and add its render target to the page
        appRef.current = new PIXI.Application({ 
            width: 1850, 
            height: 600, 
            backgroundAlpha: 0,
        });

        const appDiv = document.querySelector('.appDiv');
        if (canvasRef.current.firstChild) {
            canvasRef.current.removeChild(canvasRef.current.firstChild);
        }
        canvasRef.current.appendChild(appRef.current.view);
        // My Array of Mountains and Buildings
        const listOfMountains = [
            {
                name: 'everest',
                title: 'Mount Everest',
                height: '8,849m',

                // x and y coordinates for the label position
                x: 270,
                y: 70,


                // x horizontal position for final position of the label text
                xLabel: 220,

                // x and y coordinates for the horizontal line to start
                xStart: 0, 
                yStart: 85,

                // x and y coordinates for the horizontal line to end
                xEnd: 200,
                yEnd: 85,

                // x and y coordinates for the vetical line to start
                xVerticalStart: null,
                yVerticalStart: null,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: null,
                yVerticalEnd: null,


                // Image files for the mountain
                baseTexture: './img/everest.png',
                highlightTexture: './img/everestHighlight.png',

                // Hit area for the mountain
                hitArea: [ 
                    0, 180,

                    60, 100,

                    150, 60,

                    205, 0,

                    243, 40,

                    290, 117,

                    345, 190,

                    408, 205,

                    170, 357,

                    0, 500,
                ],
            },

            {
                name: 'anaconooga',
                title: 'Mount Aconcagua',
                height: '6,961m',

                // x and y coordinates for the label
                x: 490,
                y: 88,

                // x for final position of the label text
                xLabel: 190,

                // x and y coordinates for the horizontal line to start
                xStart: 30,
                yStart: 105,

                // x and y coordinates for the horizontal line to end
                xEnd: 170,
                yEnd: 105,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 30,
                yVerticalStart: 192,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 30,
                yVerticalEnd: 105,

                // Image files for the mountain
                baseTexture: './img/anaconooga.png',
                highlightTexture: './img/anaconoogaHighlight.png',

                // Hit area for the mountain
                hitArea: [ 
                    0, 498,

                    240, 306,

                    447, 190,

                    530, 184,

                    600, 225,

                    623, 255,

                    506, 334,

                    483, 334,

                    387, 378,

                    325, 438,

                    209, 480,

                    95, 500,

                    0, 514,
                ],
            },
    
            {
                name: 'mckinley',
                height: '6,194m',
                title: 'Mount McKinley',

                // x and y coordinates for the label
                x: 755,
                y: 150,

                // x for final position of the label text
                xLabel: 120,

                // x and y coordinates for the horizontal line to start
                xStart: 30,
                yStart: 168,

                // x and y coordinates for the horizontal line to end
                xEnd: 100,
                yEnd: 168,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 30,
                yVerticalStart: 250,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 30,
                yVerticalEnd: 168,

                // Image files for the mountain
                baseTexture: './img/mckinley.png',
                highlightTexture: './img/mckinleyHighlight.png',

                // Hit area for the mountain
                hitArea: [
                    326, 430,

                    390, 374, 

                    505, 328,

                    542, 300,

                    560, 275,

                    602, 265,

                    625, 250,

                    650, 246,

                    680, 262,

                    794, 255,

                    831, 274,

                    860, 270,

                    935, 313,

                    887, 333,

                    870, 350,

                    763, 382,

                    581, 400,

                    536, 394,

                    490, 365,

                    424, 404,
                ],
            },

            {
                name: 'kilimanjaro',
                title: 'Mount Kilimanjaro',
                height: '5,895m',

                // x and y coordinates for the label
                x: 1050,
                y: 150,

                // x for final position of the label text
                xLabel: -320,

                // x and y coordinates for the horizontal line to start
                xStart: -5,
                yStart: 168,

                // x and y coordinates for the horizontal line to end
                xEnd: 30,
                yEnd: 168,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 30,
                yVerticalStart: 168,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 30,
                yVerticalEnd: 300,

                // Image files for the mountain
                baseTexture: './img/kilimanjaro.png',
                highlightTexture: './img/kilimanjaroHighlight.png',

                // Hit area for the mountain
                hitArea: [
                    
                    0, 513,

                    210, 480,

                    488, 380,

                    526, 405,

                    756, 395,

                    870, 360,

                    964, 307,

                    1105, 300,

                    1195, 360,

                    1141, 392,

                    1107, 450,

                    1107, 480,

                    1070, 475,

                    1045, 508,

                    957, 531,

                    930, 512,

                    900, 534,

                    764, 527,

                    636, 526,

                    590, 551,

                    448, 570,

                    365, 600,

                    0, 600,
                ],
            },

            {
                name: 'elbrus',
                title: 'Mount Elbrus',
                height: '5,642m',

                // x and y coordinates for the label
                x: 1285,
                y: 150,

                // x for final position of the label text
                xLabel: -320,

                // x and y coordinates for the horizontal line to start
                xStart: -50,
                yStart: 168,

                // x and y coordinates for the horizontal line to end
                xEnd: 30,
                yEnd: 168,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 30,
                yVerticalStart: 168,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 30,
                yVerticalEnd: 325,

                // Image files for the mountain
                baseTexture: './img/elbrus.png',
                highlightTexture: './img/elbrusHighlight.png',

                // Hit area for the mountain
                hitArea: [
                    1037, 507,

                    1066, 475,

                    1083, 484,

                    1102, 468,

                    1102, 443,

                    1141, 380,

                    1206, 337,

                    1250, 382,

                    1293, 380,

                    1313, 324,

                    1376, 384,

                    1406, 438,

                    1257, 510,

                    1218, 495,
                ],
            },

            {
                name: 'vinson',
                title: 'Mount Vinson',
                height: '4,892m',

                // x and y coordinates for the label
                x: 1425,
                y: 150,

                // x for final position of the label text
                xLabel: -370,

                // x and y coordinates for the horizontal line to start
                xStart: -90,
                yStart: 168,

                // x and y coordinates for the horizontal line to end
                xEnd: 30,
                yEnd: 168,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 30,
                yVerticalStart: 168,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 30,
                yVerticalEnd: 395,

                // Image files for the mountain
                baseTexture: './img/vinson.png',
                highlightTexture: './img/vinsonHighlight.png',

                // Hit area for the mountain
                hitArea: [
                    1395,  437,

                    1454,  394,

                    1614, 456, 

                    1597, 475,

                    1562, 471,

                    1530, 505,

                    1433, 445,
                ],
            },

            {
                name: 'puncakjaya',
                title: 'Puncak Jaya',
                height: '4,884m',

                // x and y coordinates for the label
                x: 1660,
                y: 180,

                // x for final position of the label text
                xLabel: -350,

                // x and y coordinates for the horizontal line to start
                xStart: -90,
                yStart: 193,

                // x and y coordinates for the horizontal line to end
                xEnd: 30,
                yEnd: 193,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 30,
                yVerticalStart: 193,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 30,
                yVerticalEnd: 412,

                // Image files for the mountain
                baseTexture: './img/puncakjaya.png',
                highlightTexture: './img/puncakjayaHighlight.png',

                // Hit area for the mountain
                hitArea: [
                    1526, 504,

                    1560, 466,

                    1604, 466,

                    1689, 409,

                    1762, 422,

                    1780, 452,

                    1800, 455,

                    1813, 445,

                    1835, 475,

                    1890, 498,

                    1890, 600,

                    1730, 600,

                    1730, 585,
                ],
            },

            {
                name: 'fuji',
                title: 'Mount Fuji',
                height: '3,776m',

                // x and y coordinates for the label
                x: 1380,
                y: 178,

                // x for final position of the label text
                xLabel: -250,

                // x and y coordinates for the horizontal line to start
                xStart: -5,
                yStart: 193,

                // x and y coordinates for the horizontal line to end
                xEnd: 30,
                yEnd: 193,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 30,
                yVerticalStart: 193,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 30,
                yVerticalEnd: 445,

                // Image files for the mountain
                baseTexture: './img/fuji.png',
                highlightTexture: './img/fujiHighlight.png',

                // Hit area for the mountain
                hitArea: [
                    1269, 511,

                    1389, 445,

                    1440, 445,

                    1653, 555,

                    1780, 600,

                    1493, 600,

                    1363, 519,
                ],
            },

            {
                name: 'kosciuszko',
                title: 'Mount Kosciuszko',
                height: '2,228m',

                // x and y coordinates for the label
                x: 1170,
                y: 150,

                // x for final position of the label text
                xLabel: -350,

                // x and y coordinates for the horizontal line to start
                xStart: -12,
                yStart: 166,

                // x and y coordinates for the horizontal line to end
                xEnd: 35,
                yEnd: 166,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 35,
                yVerticalStart: 166,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 35,
                yVerticalEnd: 497,

                // Image files for the mountain
                baseTexture: './img/kosciuszko.png',
                highlightTexture: './img/kosciuszkoHighlight.png',

                // Hit area for the mountain
                hitArea: [
                    1480, 600,

                    1353, 520,

                    1200, 493,

                    950, 520,

                    1040, 526,

                    1230, 600,

                    671, 600,

                    678, 580,

                    745, 535,

                    708, 520,

                    627, 538,

                    670, 600,

                    359, 600,

                    460, 568,

                    535, 572, 

                    600, 533,

                    335, 574,

                    160, 600,
                ],
            },

            {
                name: 'buller',
                title: 'Mount Buller',
                height: '1,805m',

                // x and y coordinates for the label
                x: 900,
                y: 200,

                // x for final position of the label text
                xLabel: 160,

                // x and y coordinates for the horizontal line to start
                xStart: 30,
                yStart: 215,

                // x and y coordinates for the horizontal line to end
                xEnd: 130,
                yEnd: 215,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 30,
                yVerticalStart: 215,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 30,
                yVerticalEnd: 510,

                // Image files for the mountain
                baseTexture: './img/buller.png',
                highlightTexture: './img/bullerHighlight.png',

                // Hit area for the mountain
                hitArea: [
                
                    1037, 600,

                    888, 542,

                    929, 514,

                    986, 538,

                    1039, 531,

                    1230, 600,
                ],
            },

            {
                name: 'bennevis',
                title: 'Ben Nevis',
                height: '1,345m',

                // x and y coordinates for the label
                x: 745,
                y: 175,

                // x for final position of the label text
                xLabel: 200,

                // x and y coordinates for the horizontal line to start
                xStart: 30,
                yStart: 193,

                // x and y coordinates for the horizontal line to end
                xEnd: 170,
                yEnd: 193,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 30,
                yVerticalStart: 193,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 30,
                yVerticalEnd: 525,

                // Image files for the mountain
                baseTexture: './img/bennevis.png',
                highlightTexture: './img/bennevisHighlight.png',

                // Hit area for the mountain
                hitArea: [
                    670, 600,

                    673, 580,

                    730, 556,

                    758, 521,

                    842, 530,

                    1037, 600,
                ],
            },

            {
                name: 'christo',
                title: 'Corcovado - Cristo Redentor',
                height: '738m',

                // x and y coordinates for the label
                x: 589,
                y: 150,

                // x for final position of the label text
                xLabel: 200,

                // x and y coordinates for the horizontal line to start
                xStart: 30,
                yStart: 166,

                // x and y coordinates for the horizontal line to end
                xEnd: 170,
                yEnd: 166,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 30,
                yVerticalStart: 166,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 30,
                yVerticalEnd: 525,

                // Image files for the mountain
                baseTexture: './img/christo.png',
                highlightTexture: './img/christoHighlight.png',

                // Hit area for the mountain
                hitArea: [
                    541, 576,

                    585, 552,

                    616, 525,

                    662, 600,

                    600, 600,

                    585, 588,
                ],
            },

            {
                name: 'holland',
                title: 'The Vaalserberg',
                height: '323m',

                // x and y coordinates for the label
                x: 435,
                y: 110,
                
                // x for final position of the label text
                xLabel: 300,

                // x and y coordinates for the horizontal line to start
                xStart: 30,
                yStart: 127,

                // x and y coordinates for the horizontal line to end
                xEnd: 275,
                yEnd: 127,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 30,
                yVerticalStart: 127,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 30,
                yVerticalEnd: 570,

                // Image files for the mountain
                baseTexture: './img/holland.png',
                highlightTexture: './img/hollandHighlight.png',

                // Hit area for the mountain
                hitArea: [
                    358, 600,

                    463, 569,

                    586, 586,

                    600, 600,
                ],
            },

            {
                name: 'burj',
                title: 'Burj Khalifa',
                height: '828m',

                // x and y coordinates for the label
                x: 642,
                y: 170,

                // x for final position of the label text
                xLabel: 200,

                // x and y coordinates for the horizontal line to start
                xStart: 30,
                yStart: 187,

                // x and y coordinates for the horizontal line to end
                xEnd: 170,
                yEnd: 187,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 30,
                yVerticalStart: 187,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 30,
                yVerticalEnd: 525,

                // Image files for the building
                baseTexture: './img/burj.png',
                highlightTexture: './img/burjHighlight.png',

                // Hit area for the mountain
                hitArea: [

                    665, 600,

                    672, 525,

                    681, 600,
                ],
            },

            {
                name: 'oneworldtrade',
                title: 'One World Trade Center',
                height: '541m',

                // x and y coordinates for the label
                x: 505,
                y: 150,

                // x for final position of the label text
                xLabel: 150,

                // x and y coordinates for the horizontal line to start
                xStart: 30,
                yStart: 167,

                // x and y coordinates for the horizontal line to end
                xEnd: 130,
                yEnd: 167,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 30,
                yVerticalStart: 167,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 30,
                yVerticalEnd: 545,

                // Image files for the building
                baseTexture: './img/oneworldtrade.png',
                highlightTexture: './img/oneworldtradeHighlight.png',

                // Hit area for the building
                hitArea: [
                    528, 600,

                    528, 557,

                    540, 557,

                    540, 600,
                ],
            },


        
            {
                name: 'nyc',
                title: 'New York City - Average Building Height',
                height: '210m',

                // x and y coordinates for the label
                x: 322,
                y: 100,

                // x for final position of the label text
                xLabel: 200,

                // x and y coordinates for the horizontal line to start
                xStart: 30,
                yStart: 117,

                // x and y coordinates for the horizontal line to end
                xEnd: 180,
                yEnd: 117,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 30,
                yVerticalStart: 117,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 30,
                yVerticalEnd: 570,

                // Image files for the building
                baseTexture: './img/nyc.png',
                highlightTexture: './img/nycHighlight.png',

                // Hit area for the building
                hitArea: [
                    203, 600,

                    203, 575,

                    355, 575,

                    375, 600,
                ],
            },

            {
                name: 'trees',
                title: 'Amazon Forest - Tallest Canopy Trees',
                height: '60 - 100m',

                // x and y coordinates for the label
                x: 100,
                y: 60,

                // x for final position of the label text
                xLabel: 300,

                // x and y coordinates for the horizontal line to start
                xStart: 30,
                yStart: 80,

                // x and y coordinates for the horizontal line to end
                xEnd: 280,
                yEnd: 80,

                // x and y coordinates for the vetical line to start
                xVerticalStart: 30,
                yVerticalStart: 80,

                // x and y coordinates for the vetical line to end
                xVerticalEnd: 30,
                yVerticalEnd: 580,

                // Image files for the trees
                baseTexture: './img/trees.png',
                highlightTexture: './img/treesHighlight.png',

                // Hit area for the trees
                hitArea: [
                    0, 600,

                    0, 585,

                    170, 585,

                    200, 600,
                ],
            },
        ];

        // Creates the label container for text and lines
        let labelContainer;

        // Creates the label for the mountain (Text and Lines) and inserts it into the labelContainer
        const createMountainLabel = item => {

            // THE ITEM IS A SPRITE

            let mountain = listOfMountains.find(element => element.name === item.name);


            // Creates the label container
            labelContainer = new PIXI.Container();
            labelContainer.x = mountain.x;
            appRef.current.stage.addChild(labelContainer);

            // Creates the horizontal line
            let mountainLine = new PIXI.Graphics();
            mountainLine.lineStyle(1, 'black', 1);
            mountainLine.moveTo(mountain.xStart, mountain.yStart);
            mountainLine.lineTo(mountain.xEnd, mountain.yEnd);
            mountainLine.closePath();
            mountainLine.scale.x = 0;
            labelContainer.addChild(mountainLine);

            // Creating the vertical line
            if (mountain.xVerticalStart != null) {
                let extraLine = new PIXI.Graphics();
                extraLine.lineStyle(1, 'black', 1); 
                extraLine.moveTo(mountain.xVerticalStart, mountain.yVerticalEnd); // Start from the bottom
                extraLine.lineTo(mountain.xVerticalEnd, mountain.yVerticalStart); // End at the top
                extraLine.closePath();
                labelContainer.addChild(extraLine);

                // Set the pivot point to the bottom of the line
                extraLine.pivot.y = mountain.yVerticalEnd;
                extraLine.position.y = mountain.yVerticalEnd;

                // Animate the line to appear from bottom to top
                extraLine.scale.y = 0;
                gsap.to(extraLine.scale, { y: 1, duration: 0.5 });
            }

            // Creates the label text
            let mountainLabel = new PIXI.Text(mountain.title + ' - ' + mountain.height, { 
                fontFamily: 'Helvetica',
                fontWeight: '100',
                fontSize: 24, 
                fill: 'black', 
                align: 'left',
            }); 
            
            // Set the pivot point to the bottom of the line
            mountainLabel.y = mountain.y;

            // Add the label to the container
            labelContainer.addChild(mountainLabel);

            // Animate the line to appear from left to right
            gsap.to(mountainLine.scale, { x: 1, duration: 0.5, delay: 0.4 });
            gsap.to(mountainLabel, { x: mountain.xLabel, duration: 0.8 }); 

        };

        // Creates label on mouse over and changes the texture
        const onMouseOver = item => {
            let mountain = listOfMountains.find(element => element.name === item.name);        
            let mountainTexture = PIXI.Texture.from(mountain.highlightTexture);
            item.texture = mountainTexture;
            createMountainLabel(item);
        };

        // Removes the label on mouse out and changes the texture back to the original
        const onMouseOut = item => {
            let mountain = listOfMountains.find(element => element.name === item.name);        
            let baseTexture = PIXI.Texture.from(mountain.baseTexture);
            item.texture = baseTexture;
            appRef.current.stage.removeChild(labelContainer);
        };

        // Creates the mountains on the canvas from my array
        listOfMountains.forEach(element => {

            let baseTexture = PIXI.Texture.from(element.baseTexture);
            let mountain = new PIXI.Sprite(baseTexture);

            mountain.cursor = 'pointer';
            mountain.interactive = true;

            mountain.name = element.name;

            mountain.on('pointerover', () => {
                onMouseOver(mountain);
            }); 
            mountain.on('pointerout', () => onMouseOut(mountain));

            mountain.hitArea = new PIXI.Polygon(element.hitArea);

            appRef.current.stage.addChild(mountain);
        });        

        return () => {
            appRef.current.destroy();
        };
    }, []);

    useEffect(() => {  

        console.log(appRef.stage);
            
        if (mapMarker) {
            appRef.current.stage.removeChild(mapMarker);
            appRef.current.stage.removeChild(mapMarkerLabel);
            appRef.current.stage.removeChild(mapMarkerLine);
            appRef.current.stage.removeChild(mapMarkerLineTwo);
            console.log('mapMarker removed');
            setMapMarker(null);
        }
        // Massive ugly list of coordinates for the map marker in relation to elevation
        const treesCoordinates = [
            { x: 0, y: 590 },
            { x: 20, y: 588 },
            { x: 40, y: 586 },
            { x: 60, y: 583 },
            { x: 80, y: 583 },
            { x: 100, y: 583 },
            { x: 120, y: 580 },
            { x: 140, y: 580 },
            { x: 160, y: 580 },
            { x: 180, y: 578 },
            { x: 200, y: 576 }
        ];
        const newYorkCoordinates = [
            { x: 210, y: 575 },
            { x: 230, y: 573 },
            { x: 250, y: 572 },
            { x: 270, y: 572 },
            { x: 290, y: 572 },
            { x: 310, y: 572 },
            { x: 330, y: 572 },
            { x: 340, y: 572 }
        ];
        const hollandCoordinates = [
            { x: 420, y: 572 },
            { x: 430, y: 569 },
            { x: 440, y: 566 },
            { x: 450, y: 563 },
            { x: 460, y: 560 }
        ];
        const christoCoordinates = [
            { x: 550, y: 560 },
            { x: 560, y: 557 },
            { x: 570, y: 554 },
            { x: 580, y: 550 }
        ];
        const oneWorldTradeCoordinates = [
            { x: 528, y: 550 },
            { x: 528, y: 545 }
        ];
        const christoPt2Coordinates = [
            { x: 590, y: 545 },
            { x: 600, y: 537 },
            { x: 610, y: 530 }
        ];  
        const burjCoordinates = [
            { x: 665, y: 530 },
            { x: 666, y: 525 }
        ];
        const benNevisCoordinates = [
            { x: 740, y: 530 },
            { x: 742, y: 528 },
            { x: 744, y: 526 },
            { x: 748, y: 524 },
            { x: 752, y: 523 },
            { x: 756, y: 520 },
            { x: 760, y: 518 },
            { x: 764, y: 518 }
        ];
        const bullerCoordinates = [
            { x: 905, y: 518 },
            { x: 908, y: 515 },
            { x: 911, y: 512 },
            { x: 914, y: 509 },
            { x: 917, y: 506 },
            { x: 920, y: 506 }
        ];
        const kosciuszkoCoordinates = [
            { x: 980, y: 506 },
            { x: 990, y: 502 },
            { x: 1000, y: 498 },
            { x: 1010, y: 498 },
            { x: 1070, y: 494 },
            { x: 1090, y: 494 },
            { x: 1110, y: 492 },
            { x: 1140, y: 490 },
            { x: 1190, y: 490 },
            { x: 1200, y: 488 },
            { x: 1210, y: 487 }
        ];
        const fujiCoordinates = [
            { x: 1290, y: 487 },
            { x: 1310, y: 475 },
            { x: 1330, y: 464 },
            { x: 1350, y: 454 },
            { x: 1370, y: 444 },
            { x: 1385, y: 437 }
        ];
        const puncakCoordinates = [
            { x: 1630, y: 435 },
            { x: 1640, y: 430 },
            { x: 1650, y: 420 },
            { x: 1660, y: 415 },
            { x: 1670, y: 410 }
        ];
        const vinsonCoordinates = [
            { x: 1520, y: 410 },
            { x: 1510, y: 406 },
            { x: 1500, y: 402 },
            { x: 1474, y: 398 },
            { x: 1460, y: 392 },
            { x: 1445, y: 388 }
        ];
        const elbrusCoordinates = [
            { x: 1375, y: 388 },
            { x: 1365, y: 378 },
            { x: 1355, y: 368 },
            { x: 1345, y: 358 },
            { x: 1335, y: 347 },
            { x: 1325, y: 336 },
            { x: 1320, y: 330 },
            { x: 1310, y: 320 }
        ];
        const kilimanjaroCoordinates = [
            { x: 1150, y: 320 },
            { x: 1140, y: 313 },
            { x: 1130, y: 306 },
            { x: 1120, y: 299 },
            { x: 1110, y: 292 },
            { x: 1100, y: 288 }
        ];
        const mckinleyCoordinates = [
            { x: 907, y: 288 },
            { x: 900, y: 282 },
            { x: 893, y: 276 },
            { x: 870, y: 270 },
            { x: 860, y: 265 },
            { x: 850, y: 260 },
            { x: 800, y: 255 },
            { x: 790, y: 247 },
            { x: 780, y: 245 },
            { x: 650, y: 240 },
            { x: 640, y: 237 }
        ];
        const aconcaguaCoordinates = [
            { x: 600, y: 237 },
            { x: 590, y: 227 },
            { x: 580, y: 215 },
            { x: 570, y: 210 },
            { x: 560, y: 205 },
            { x: 550, y: 200 },
            { x: 540, y: 195 },
            { x: 530, y: 190 },
            { x: 520, y: 185 },
            { x: 510, y: 183 }
        ];
        const everestCoordinates = [
            { x: 335, y: 183 },
            { x: 325, y: 175 },
            { x: 315, y: 165 },
            { x: 305, y: 153 },
            { x: 295, y: 137 },
            { x: 285, y: 120 },
            { x: 275, y: 100 },
            { x: 265, y: 80 },
            { x: 255, y: 63 },
            { x: 245, y: 50 },
            { x: 235, y: 32 },
            { x: 225, y: 20 },
            { x: 215, y: 10 },
            { x: 205, y: 5 }
        ];

        // Massive ugly function with millions of switch statements to find the correct coordinates for the map marker
        const findCoordinates = (elevation) => {

            switch (true) {
                case (elevation >= 0 && elevation <= 100):
                    switch (true) {
                        case (elevation >= 0 && elevation <= 10):
                            return treesCoordinates[0];
                        case (elevation > 10 && elevation <= 20):
                            return treesCoordinates[1];
                        case (elevation > 20 && elevation <= 30):
                            return treesCoordinates[2];
                        case (elevation > 30 && elevation <= 40):
                            return treesCoordinates[3];
                        case (elevation > 40 && elevation <= 50):
                            return treesCoordinates[4];
                        case (elevation > 50 && elevation <= 60):
                            return treesCoordinates[5];
                        case (elevation > 60 && elevation <= 70):
                            return treesCoordinates[6];
                        case (elevation > 70 && elevation <= 80):
                            return treesCoordinates[7];
                        case (elevation > 80 && elevation <= 90):
                            return treesCoordinates[8];
                        case (elevation > 90 && elevation <= 100):
                            return treesCoordinates[9];
                        default:
                            return [];
                    };
                    
                case (elevation > 100 && elevation <= 200):
                    switch (true) {
                        case (elevation > 100 && elevation <= 110):
                            return newYorkCoordinates[0];
                        case (elevation > 110 && elevation <= 120):
                            return newYorkCoordinates[1];
                        case (elevation > 120 && elevation <= 130):
                            return newYorkCoordinates[2];
                        case (elevation > 130 && elevation <= 140):
                            return newYorkCoordinates[3];
                        case (elevation > 140 && elevation <= 150):
                            return newYorkCoordinates[4];
                        case (elevation > 150 && elevation <= 160):
                            return newYorkCoordinates[5];
                        case (elevation > 160 && elevation <= 170):
                            return newYorkCoordinates[6];
                        case (elevation > 170 && elevation <= 200):
                            return newYorkCoordinates[7];
                        default:
                            return [];
                    };

                case (elevation > 200 && elevation <= 328):
                    switch (true) {
                        case (elevation > 200 && elevation <= 225):
                            return hollandCoordinates[0];
                        case (elevation > 225 && elevation <= 250):
                            return hollandCoordinates[1];
                        case (elevation > 275 && elevation <= 275):
                            return hollandCoordinates[2];
                        case (elevation > 275 && elevation <= 300):
                            return hollandCoordinates[3];
                        case (elevation > 300 && elevation <= 328):
                            return hollandCoordinates[4];
                        default:
                            return [];
                    };

                case (elevation > 328 && elevation <= 500):
                    switch (true) {
                        case (elevation > 328 && elevation <= 350):
                            return christoCoordinates[0];
                        case (elevation > 350 && elevation <= 400):
                            return christoCoordinates[1];
                        case (elevation > 400 && elevation <= 450):
                            return christoCoordinates[2];
                        case (elevation > 450 && elevation <= 500):
                            return christoCoordinates[3];
                        default:
                            return [];
                    };

                case (elevation > 500 && elevation <= 546):
                    switch (true) {
                        case (elevation > 500 && elevation <= 525):
                            return oneWorldTradeCoordinates[0];
                        case (elevation > 550 && elevation <= 546):
                            return oneWorldTradeCoordinates[1];
                        default:
                            return [];
                    };
                    
                case (elevation > 546 && elevation <= 710):
                    switch (true) {
                        case (elevation > 546 && elevation <= 620):
                            return christoPt2Coordinates[0];
                        case (elevation > 620 && elevation <= 660):
                            return christoPt2Coordinates[1];
                        case (elevation > 660 && elevation <= 710):
                            return christoPt2Coordinates[2];
                        default:
                            return [];
                    };


                case (elevation > 710 && elevation <= 830):
                    switch (true) {
                        case (elevation > 710 && elevation <= 760):
                            return burjCoordinates[0];
                        case (elevation > 760 && elevation <= 830):
                            return burjCoordinates[1];
                        default:
                            return [];
                    };
                    
                case (elevation > 830 && elevation <= 1345):
                    switch (true) {
                        case (elevation > 830 && elevation <= 900):
                            return benNevisCoordinates[0];
                        case (elevation > 900 && elevation <= 950):
                            return benNevisCoordinates[1];
                        case (elevation > 950 && elevation <= 1000):
                            return benNevisCoordinates[2];
                        case (elevation > 1000 && elevation <= 1050):
                            return benNevisCoordinates[3];
                        case (elevation > 1050 && elevation <= 1100):
                            return benNevisCoordinates[4];
                        case (elevation > 1100 && elevation <= 1150):
                            return benNevisCoordinates[5];
                        case (elevation > 1150 && elevation <= 1200):
                            return benNevisCoordinates[6];
                        case (elevation > 1200 && elevation <= 1250):
                            return benNevisCoordinates[7];
                        case (elevation > 1250 && elevation <= 1300):
                            return benNevisCoordinates[8];
                        case (elevation > 1300 && elevation <= 1345):
                            return benNevisCoordinates[9];
                        default:
                            return [];
                    };

                case (elevation > 1345 && elevation <= 1805):
                    switch (true) {
                        case (elevation > 1345 && elevation <= 1435):
                            return bullerCoordinates[0];
                        case (elevation > 1435 && elevation <= 1525):
                            return bullerCoordinates[1];
                        case (elevation > 1525 && elevation <= 1615):
                            return bullerCoordinates[2];
                        case (elevation > 1615 && elevation <= 1705):
                            return bullerCoordinates[3];
                        case (elevation > 1705 && elevation <= 1795):
                            return bullerCoordinates[4];
                        case (elevation > 1795 && elevation <= 1805):
                            return bullerCoordinates[5];
                        default:
                            return [];
                    };


                case (elevation > 1805 && elevation <= 2228):
                    switch (true) {
                        case (elevation > 1805 && elevation <= 1850):
                            return kosciuszkoCoordinates[0];
                        case (elevation > 1850 && elevation <= 1900):
                            return kosciuszkoCoordinates[1];
                        case (elevation > 1900 && elevation <= 1950):
                            return kosciuszkoCoordinates[2];
                        case (elevation > 1950 && elevation <= 2000):
                            return kosciuszkoCoordinates[3];
                        case (elevation > 2000 && elevation <= 2050):
                            return kosciuszkoCoordinates[4];
                        case (elevation > 2050 && elevation <= 2100):
                            return kosciuszkoCoordinates[5];
                        case (elevation > 2100 && elevation <= 2150):
                            return kosciuszkoCoordinates[6];
                        case (elevation > 2150 && elevation <= 2200):
                            return kosciuszkoCoordinates[7];
                        case (elevation > 2200 && elevation <= 2228):
                            return kosciuszkoCoordinates[8];
                        default:
                            return [];
                    };

                case (elevation > 2228 && elevation <= 3776):
                    switch (true) {
                        case (elevation > 2228 && elevation <= 2430):
                            return fujiCoordinates[0];
                        case (elevation > 2430 && elevation <= 2630):
                            return fujiCoordinates[1];
                        case (elevation > 2630 && elevation <= 2830):
                            return fujiCoordinates[2];
                        case (elevation > 2830 && elevation <= 3030):
                            return fujiCoordinates[3];
                        case (elevation > 3030 && elevation <= 3350):
                            return fujiCoordinates[4];
                        case (elevation > 3350 && elevation <= 3776):
                            return fujiCoordinates[5];
            
                        default:
                            return [];
                    };

                case (elevation > 3776 && elevation <= 4750):
                    switch (true) {
                        case (elevation > 3776 && elevation <= 4000):
                            return puncakCoordinates[0];
                        case (elevation > 4000 && elevation <= 4250):
                            return puncakCoordinates[1];
                        case (elevation > 4250 && elevation <= 4500):
                            return puncakCoordinates[2];
                        case (elevation > 4500 && elevation <= 4750):
                            return puncakCoordinates[3];
                        default:
                            return [];
                    };

                case (elevation > 4750 && elevation <= 4892):
                    switch (true) {
                        case (elevation > 4750 && elevation <= 4800):
                            return vinsonCoordinates[0];
                        case (elevation > 4800 && elevation <= 4850):
                            return vinsonCoordinates[1];
                        case (elevation > 4850 && elevation <= 4892):
                            return vinsonCoordinates[2];
                        default:
                            return [];
                    };

                case (elevation > 4892 && elevation <= 5642):
                    switch (true) {
                        case (elevation > 4892 && elevation <= 5000):
                            return elbrusCoordinates[0];
                        case (elevation > 5000 && elevation <= 5100):
                            return elbrusCoordinates[1];
                        case (elevation > 5100 && elevation <= 5200):
                            return elbrusCoordinates[2];
                        case (elevation > 5200 && elevation <= 5300):
                            return elbrusCoordinates[3];
                        case (elevation > 5300 && elevation <= 5400):
                            return elbrusCoordinates[4];
                        case (elevation > 5400 && elevation <= 5500):
                            return elbrusCoordinates[5];
                        case (elevation > 5500 && elevation <= 5600):
                            return elbrusCoordinates[6];
                        case (elevation > 5600 && elevation <= 5642):
                            return elbrusCoordinates[7];
                        default:
                            return [];
                    };

                case (elevation > 5642 && elevation <= 5895):
                    switch (true) {
                        case (elevation > 5642 && elevation <= 5700):
                            return kilimanjaroCoordinates[0];
                        case (elevation > 5700 && elevation <= 5800):
                            return kilimanjaroCoordinates[1];
                        case (elevation > 5800 && elevation <= 5895):
                            return kilimanjaroCoordinates[2];
                        default:
                            return [];
                    };

                case (elevation > 5895 && elevation <= 6194):
                    switch (true) {
                        case (elevation > 5895 && elevation <= 6000):
                            return mckinleyCoordinates[0];
                        case (elevation > 6000 && elevation <= 6100):
                            return mckinleyCoordinates[1];
                        case (elevation > 6100 && elevation <= 6194):
                            return mckinleyCoordinates[2];
                        default:
                            return [];
                    };

                case (elevation > 6194 && elevation <= 6962):
                    switch (true) {
                        case (elevation > 6194 && elevation <= 6300):
                            return aconcaguaCoordinates[0];
                        case (elevation > 6300 && elevation <= 6400):
                            return aconcaguaCoordinates[1];
                        case (elevation > 6400 && elevation <= 6500):
                            return aconcaguaCoordinates[2];
                        case (elevation > 6500 && elevation <= 6600):
                            return aconcaguaCoordinates[3];
                        case (elevation > 6600 && elevation <= 6700):
                            return aconcaguaCoordinates[4];
                        case (elevation > 6700 && elevation <= 6800):
                            return aconcaguaCoordinates[5];
                        case (elevation > 6800 && elevation <= 6900):
                            return aconcaguaCoordinates[6];
                        case (elevation > 6900 && elevation <= 6962):
                            return aconcaguaCoordinates[7];
                        default:
                            return [];
                    };

                case (elevation > 6962 && elevation <= 8848):
                    switch (true) {
                        case (elevation > 6962 && elevation <= 7000):
                            return everestCoordinates[0];
                        case (elevation > 7000 && elevation <= 7110):
                            return everestCoordinates[1];
                        case (elevation > 7110 && elevation <= 7220):
                            return everestCoordinates[2];
                        case (elevation > 7220 && elevation <= 7330):
                            return everestCoordinates[3];
                        case (elevation > 7330 && elevation <= 7440):
                            return everestCoordinates[4];
                        case (elevation > 7440 && elevation <= 7550):
                            return everestCoordinates[5];
                        case (elevation > 7550 && elevation <= 7660):
                            return everestCoordinates[6];
                        case (elevation > 7660 && elevation <= 7770):
                            return everestCoordinates[7];
                        case (elevation > 7770 && elevation <= 7880):
                            return everestCoordinates[8];
                        case (elevation > 7880 && elevation <= 7990):
                            return everestCoordinates[9];
                        case (elevation > 7990 && elevation <= 8100):
                            return everestCoordinates[10];
                        case (elevation > 8100 && elevation <= 8210):
                            return everestCoordinates[11];
                        case (elevation > 8210 && elevation <= 8320):
                            return everestCoordinates[12];
                        case (elevation > 8320 && elevation <= 8530):
                            return everestCoordinates[13];
                        case (elevation > 8430 && elevation <= 8740):
                            return everestCoordinates[14];
                        default:
                            return [];
                    };

                default:
                    return [];
            };
        };    
        
        const { x, y } = findCoordinates(elevation);
        createMapMarker(x, y);

    }, [elevation]);
    
  return <div ref={canvasRef} />;
};

export default CreateCanvas;
