import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import { Sprite, Texture } from 'pixi.js';
import { gsap } from 'gsap';
import { type } from '@testing-library/user-event/dist/type';

import './CreateCanvas.css';

const PixiCanvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
       
    // Create the application helper and add its render target to the page
    let app = new PIXI.Application({ 
        width: 1850, 
        height: 600, 
        backgroundAlpha: 0,
    });

    const appDiv = document.querySelector('.appDiv');

    canvasRef.current.appendChild(app.view);

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

    const matchMountainByName = (name, listOfMountains) => {
        return listOfMountains.find(mountain => mountain.name === name);
    };

    // Creates the label for the mountain (Text and Lines) and inserts it into the labelContainer
    const createMountainLabel = item => {

        // THE ITEM IS A SPRITE

        let mountain = listOfMountains.find(element => element.name === item.name);


        // Creates the label container
        labelContainer = new PIXI.Container();
        labelContainer.x = mountain.x;
        app.stage.addChild(labelContainer);

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
        app.stage.removeChild(labelContainer);
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

        app.stage.addChild(mountain);
                            
    });


    // CREATING THE MAP MARKER SPRITE

    const createMapMarker = (xPos, yPos) => {
        let mapMarkerTexture = PIXI.Texture.from('./img/mapMarker.png');
        let mapMarker = new PIXI.Sprite(mapMarkerTexture);

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

        app.stage.addChild(mapMarkerLine);
        app.stage.addChild(mapMarkerLineTwo);
        app.stage.addChild(mapMarkerLabel);
        app.stage.addChild(mapMarker);

        gsap.to(mapMarker, { alpha: 1, duration: 1.5, delay: 0.4 });
        gsap.to(mapMarkerLine.scale, { y: 1, duration: 1.5, delay: 0.4 });
        gsap.to(mapMarkerLineTwo.scale, { x: 1, duration: 1.5, delay: 0.4 });
        gsap.to(mapMarkerLabel, { alpha: 1, duration: 1.5, delay: 1.0 });
    };  

    createMapMarker(1600, 400);



    return () => {
      // Clean up the PIXI application to prevent memory leaks
      app.destroy(true, { children: true, texture: true, baseTexture: true });
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default PixiCanvas;


