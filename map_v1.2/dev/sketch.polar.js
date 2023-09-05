
//globals
let x = 0;
let y = 0;
let d = 10;

let xRange = [0,0,0,0];
let xfactor = 4;

let debugDraw = true;//boolean to only print once

//actual screen coords -based on screenwidth/height x0, y0 = 0,0 = top left 
let tempObj = [
    {name: "Nick Totnes", x: 93.495056636545, y: 679.4928997264367},
    {name: "Tim", x: 0, y: 700},
    {name: "Glyn Heathfield", x: 99.53155425479356, y: 606.0924301307575},
    {name: "kerry", x: 80.38203523221212, y: 525.0278999746758},
    {name: "Adge Stroud", x: 437.77984558552674, y: 5.684341886080802},
    {name: "ruth....", x: 952.9999999999999, y: 139.90597924537914}
];
let newObj1 = [...tempObj];

let distArr = [];

let maxHeightArr = [];

////p5 CORE FUNCTIONS////////////////////////////////
function preload() {
  // img = loadImage('img/480px_info_icon.png');
}
////
function setup() {
  createCanvas(windowWidth, windowHeight);      
}
//
function mousePressed() {
  // info_btn.mouseClick((windowWidth-(this.img.width/info_size)),0);
}
//
function draw(_obj){
  background(220);
  plotCircleGrid();
  //colors
  let c1 = color(255, 204, 0);
  let c2 = color(0, 255, 0);
  let c3 = color(0, 255, 255);
  let t = color(128, 128, 128);
  makeHeading(c1,c2,c3,t);

  let cX = windowWidth/2;
  let cY = windowHeight/2;
  let offSetX = cX - tempObj[0].x;
  let offSetY = cY - tempObj[0].y;

  //original pos
  /*
  for(i = 0; i < tempObj.length; i++){
      fill(c1);
      circle(tempObj[i].x,
              tempObj[i].y, 
              10);//original
  }
  */

  // new
  //green - me in center - good
  for(i = 0; i < tempObj.length; i++){    
      newObj1[i].x = tempObj[i].x + offSetX;
      newObj1[i].y = tempObj[i].y + offSetY;
  }

  //simple scale - but through me point
  let shrinkFactor = 0.4;
  let xOff = cX -(newObj1[0].x * shrinkFactor );
  let yOff = cY -(newObj1[0].y * shrinkFactor );
  // console.log("-->", newObj2);
  distArr = [];
  for(i = 0; i < newObj1.length; i++){    
      let x1 = (newObj1[i].x * shrinkFactor) + xOff;
      let y1 = (newObj1[i].y * shrinkFactor) + yOff
      
      line(x1,
           y1,
           cX,
           cY
      );
      fill(c3);   
      circle( x1, 
              y1, 
              10
      );
      distArr.push(dist(
        x1,
        y1,
        cX,
        cY
      ).toFixed(2));
  }
  let ty = 15;
  // console.log(distArr.length);
  for(i = 0; i < distArr.length; i++){
      fill(t);
      ty = ty + 20;
      text("-> distance from : "
          + newObj1[i].name + " to : " 
          + newObj1[0].name + ": "
          + distArr[i] + " px",
           25,
           ty);
  }
  // deBug(distArr.join());
        
}
//
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

