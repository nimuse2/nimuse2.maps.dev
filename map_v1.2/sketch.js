//globals
let latLongObj = [];
let xyObj = [];
let xyObj1 = [];
let input, button, log1, log2, log3, myLat, myLong, title, topnav;
// info btn
let info_btn;
// let info_tree;
// let info_img;
let info_size = 7.5;
let sideNavOffSet = 200;
//polar
let x = 0;
let y = 0;
let d = 10;
let xRange = [0, 0, 0, 0];
let xfactor = 4;

let tempObj = [];
let newObj1 = [];

////SOUND/////////////////////////////////////////
let soundBtnInit;
let soundBtnInitTxt = "START SOUND";

let soundBtn;
let soundBtnTxt = ["START AUDIO", "STOP AUDIO"];

//main amp array list -uses [_n] as key
//CPU saver!
let fr = 12; //easier on CPU
let count = 0;
hoverOn = false;

const soundSets = 5; //same as dbase (dbase.length?)

_gSoundLevel = [0.0, 0.0, 0.0, 0.0, 0.0];
let gSoundLevel = [];
_minAmpVal = [0.0, 0.0, 0.0, 0.0, 0.0]; //original set
const minAmpVal = []; //big set

_maxAmpVal = [0.9, 0.2, 0.9, 0.8, 0.8]; //5
const maxAmpVal = [];

_sounds = [{}, {}, {}, {}, {}];
let sounds = [];

_mamplitude = [{}, {}, {}, {}, {}];
let mamplitude = [];
_cLevel = [0.1, 0.1, 0.1, 0.1, 0.1]; //5
let cLevel = [];
_cSize = [0.1, 0.1, 0.1, 0.1, 0.1];
let cSize = [];
_soundCircle = [{}, {}, {}, {}, {}]; //10
let soundCircle = [];
_referenceCircle = [{}, {}, {}, {}, {}]; //10
let referenceCircle = [];
_hoverDist = [{}, {}, {}, {}, {}]; //10
let hoverDist = [];
_hoverFactor = [1, 1, 1, 1, 1];
let hoverFactor = [];
for (i = 0; i < soundSets; i++) {
  minAmpVal.push(..._minAmpVal);
  maxAmpVal.push(..._maxAmpVal);
  sounds.push(..._sounds);
  gSoundLevel.push(..._gSoundLevel);
  mamplitude.push(..._mamplitude);
  cLevel.push(..._cLevel);
  cSize.push(..._cSize);
  soundCircle.push(..._soundCircle);
  referenceCircle.push(..._referenceCircle);
  hoverDist.push(..._hoverDist);
  hoverFactor.push(..._hoverFactor);
}

let ampVal = [...minAmpVal];

const soundPath = "sound/2022-08-19-21-09-19.mp3";
// let gSoundLevel = 0.1;
let audio;
let gselectedState = [0, 0]; //record number sound and id
let soundState = false;

let gId = 0;

//maybe better to have 25 sounds?

const fadeInOut = 1.8; //1.8 nice
//TEMP OBJECT- REMOVE LATER
let circleKey = 0;
i = 0; //key for sounds
////p5 CORE FUNCTIONS////////////////////////////////

function preload() {
  // loadSound("sound/2022-08-19-21-09-19.mp3");
  for (i = 0; i < sounds.length; i++) {
    sounds[i] = loadSound(soundProps[i].sPath);
  }
  // console.log(sounds.length);
}

function audioOn() {
  if (soundState == true) {
    for (i = 0; i < sounds.length; i++) {
      // sounds[i].playMode("sustain");
      soundState = false;
      sounds[i].stop();
      sounds[i].setVolume(0.0);
      soundBtn.html(soundBtnTxt[0]);
    }
  } else {
    userStartAudio();
    soundState = true;
    soundBtn.html(soundBtnTxt[1]);
    for (i = 0; i < sounds.length; i++) {
      sounds[i].loop();
    }
  }
}

function setup() {
  frameRate(fr);
  createCanvas(windowWidth, windowHeight);
  getData();
  makeTopnav();
  makeSideNav();

  getAudioContext().suspend();

  for (i = 0; i < sounds.length; i++) {
    sounds[i].playMode("sustain");
    sounds[i].loop();
    sounds[i].setVolume(gSoundLevel[i]);
  }

  // makeSideNav();
  //SET UP BUTTON FOR GLOBAL SOUND
  soundBtn = createButton(soundBtnTxt[0]);
  soundBtn.position(10, windowHeight - 50);
  soundBtn.mousePressed(audioOn);
}

function draw() {
  // console.log(sound.length);
  background(51);
  makeColours();
  plotCircleGrid();
  makeKey();
  makeFarmTxt();
  //transforms
  xyObj = transform2(xyObj1); //reuturn
  setScreenVariables();
  coors2 = transform3(xyObj);
  setObjectDrawVariables();

  if (coors2.length > 1) {
    let quadArr = [];
    // key = 1; //?
    _adder = 0; //reset 1st loop
    coors2.forEach((o) => {
      let x1 = o.x * shrinkFactor + xOff;
      let y1 = o.y * shrinkFactor + yOff;
      quadArr.push({
        x: x1,
        y: y1,
      }); //because always 1st four

      if (o.name === "BAT") {
        //make objects
        stroke(b1);
        noFill();
        circle(x1, y1, o.dia * d);
        plotCluster(x1, y1, 30, 5, o.results); //5 -npoints-must be same as array length!
        makeObjectText(o, t, x1, y1);
        // key++;
      }
    }); //end for
    plotFarm(quadArr);
  } //end if
}
//
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
