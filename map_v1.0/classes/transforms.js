//RELEASIMNG THE AWESOME POWER OF HOISTING!!////////////////////
function transform2(_obj) {
  rightMax = getMax(_obj, "x");
  side_max_width = getMaxDistance(_obj, "x", rightMax);

  heightMax = getMax(_obj, "y");
  side_max_height = getMaxDistance(_obj, "y", heightMax);
  let tempArr = [];
  _obj.forEach((p) => {
    tempArr.push({
      dia: p.dia,
      name: p.name,
      name2: p.name2,
      lat: p.lat,
      long: p.long,
      x: p.x - (rightMax - side_max_width),
      y: p.y - (heightMax - side_max_height),
      results: p.results,
      date: p.date,
    });
  });
  return tempArr;
}

function transform3(_obj) {
  let tArr = [];
  _obj.forEach((p, i) => {
    tArr.push({
      dia: p.dia,
      name: p.name,
      name2: p.name2,
      lat: p.lat,
      long: p.long,
      x: xPos + (1 - tx) * xCenter + p.x * tx,
      y: yPos + (1 - ty) * yCenter + p.y * ty,
      results: [...p.results],
      date: p.date,
    });
  });
  return tArr;
}
// variable setting/////////////////
function setScreenVariables() {
  //transform factors
  xPos = windowWidth / 2 - side_max_width / 2; //in middle
  yPos = windowHeight / 2 - side_max_height / 2; //sta

  tx = windowWidth / side_max_width;
  ty = windowHeight / side_max_height;

  xCenter = side_max_width / 2; // center relative to scrn
  yCenter = side_max_height / 2;
}

function setObjectDrawVariables() {
  cX = windowWidth / 2;
  cY = windowHeight / 2;

  shrinkFactor = 0.4;
  xOff = cX - coors2[0].x * shrinkFactor;
  yOff = cY - coors2[0].y * shrinkFactor;
}
