//draw to screen - called from draw()
//SOUND
function makeSoundCircle(
  _i, //key - sounds
  _sx, //original penta coord
  _sy,
  _dia,
  _key, //1-10 - objects
  _xx, // original polar cord
  _yy
) {
  cSize[_key] = hoverFactor[_key] * _dia;

  // //GRAPHIX
  fill(soundProps[_i].col);
  noStroke();

  let inc = TWO_PI / 25.0;
  let changeFactor = cSize[_key] * sin(count + inc) * 0.08 + _dia;
  let changeFactor2 = cSize[_key] * sin(count + inc) * 0.05 + _dia;

  soundCircle[_key] = ellipse(_sx, _sy, changeFactor, changeFactor);

  hoverDist[_key] = dist(mouseX, mouseY, _sx, _sy);

  if (hoverDist[_key] < _dia / 2) {
    //over
    gselectedState = [_i, _key];

    hoverFactor[_key] = hoverFactor[_key] + 0.02; //
    if (soundState == true) {
      gSoundLevel[_key] > 0.8
        ? (gSoundLevel[_key] = gSoundLevel[_key])
        : (gSoundLevel[_key] = gSoundLevel[_key] + 0.1);
      sounds[_key].setVolume(gSoundLevel[_key]);
      sounds[_key].setVolume(0.0, 1, 1);
    }

    makeIdTxt(_key, _sx, _sy, _xx, _yy, _dia);
  } else {
    hoverFactor[_key] = 1;
  }
  gselectedState = [_i, 0];

  fill(soundProps[_i].col);
  noStroke();
  referenceCircle[_key] = ellipse(_sx, _sy, changeFactor2);
  // console.log(_key);
  count++;
}
//CLUSTER
function plotCluster(x, y, radius, npoints, resultsArr) {
  var angle = TWO_PI / npoints;
  //making the 5

  beginShape();

  i = 0; //key for sounds

  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    fill(soundProps[i].col);
    noStroke();

    makeSoundCircle(i, sx, sy, resultsArr[i], _adder + i, x, y);

    i++;
  }
  _adder = _adder + i;
  endShape(CLOSE);
}

function plotFarm(_coors1) {
  //1st 4 value
  noFill();
  stroke(b1);
  quad(
    _coors1[0].x - (x * 5) / 100, //wash 1
    _coors1[0].y + (y * 5) / 100,
    _coors1[1].x - (x * 5) / 100, //wash-2
    _coors1[1].y + (y * 5) / 100,
    _coors1[2].x - (x * 5) / 100, //wash-3
    _coors1[2].y + (y * 5) / 100,
    _coors1[3].x - (x * 5) / 100, //wash-4
    _coors1[3].y + (y * 5) / 100
  );
}

//plot circles
//grid
function plotCircleGrid() {
  x = windowWidth / 2;
  y = windowHeight / 2;

  // vert/horizontal
  stroke("rgba(100, 100, 100,0.4)");
  line(x, 0, x, windowHeight);
  line(0, y, windowWidth, y);
  text("500m", x + (x * 28) / 100, y - 5);
  text("1000m", x + (x * 53) / 100, y - 5);
  text("1500m", x + (x * 78) / 100, y - 5);

  xRange.forEach((o, i) => {
    o = d + (i * windowWidth) / xfactor;
    noFill();
    stroke("rgba(100, 100, 100,0.4)");
    circle(x, y, o);
  });
}

function plotCircle(_x, _y) {
  cx = windowWidth / 2;
  cy = windowHeight / 2;
  // middle dot
  // stroke("rgba(100, 100, 100, 0.7)");

  circle(cx + _x, cy + _y, d + 5); //middle

  stroke("rgba(100, 100, 100,0.7)");
  // line(cx + _x, cy + _y, cx, cy);
}

function makeColours() {
  c1 = color(255, 204, 0);
  c2 = color(0, 255, 0);
  c3 = color("rgba(11, 102, 35,0.1)");
  c4 = color("rgba(11, 102, 35,0.7)");
  b1 = color(255, 0, 0); //bat red
  t = color(128, 128, 128);
  t1 = color(0, 0, 0);
  t2 = color("rgba(11, 102, 35,0.9)");
}
