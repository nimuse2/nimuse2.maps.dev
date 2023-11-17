/*tooltip stuff */
var tooltipTxttop = 30; //1st line
var magicR = 0;

var descBox = 280;
var imgHeight = 170;

var txtBoxFontSize = "11px";

function makeTooltip(_svg) {
  //
  //image
  let imagePath = "img/ghb.png";
  var imageHabitatPath = "img/habitat_agroforest.png";
  let fontSize = "9px";

  HabitatImg = _svg
    // .append("img").attr("src", imagePath);
    .append("svg:image")
    .attr("xlink:href", function () {
      return imageHabitatPath;
    })
    .attr("width", "170")
    .attr("height", "150")
    .style("opacity", 0);

  HabitatTip_heading = _svg
    .append("text")
    // .attr("x", 200)
    // .attr("y", 200 + leading * 1)
    .style("opacity", 0)
    .attr("font-family", "Arial")
    .style("fill", "white")
    .style("font-size", fontSize)
    .text("Habitat");
  HabitatTip_location = _svg
    .append("text")
    // .attr("x", 200)
    // .attr("y", 200 + leading * 1)
    .style("opacity", 0)
    .attr("font-family", "Arial")
    .style("fill", "white")
    .style("font-size", fontSize)
    .text("Location");
  HabitatTip_desc = _svg
    .append("text")
    // .attr("x", 200)
    // .attr("y", 200 + leading * 1)
    .style("opacity", 0)
    .attr("font-family", "Arial")
    .style("fill", "white")
    .style("font-size", fontSize)
    .text("body copy");

  BatImg = _svg
    // .append("img").attr("src", imagePath);
    .append("svg:image")
    .attr("xlink:href", function () {
      return imagePath;
    })
    .attr("width", "170")
    .attr("height", "150")
    .style("opacity", 0);
  //
  Tooltip = _svg
    .append("text")
    // .attr("x", 200)
    // .attr("y", 200)
    .style("opacity", 0)
    .attr("font-family", "Arial")
    .style("fill", "white")
    .style("font-size", fontSize)
    .text("Line 1");
  Tooltip2 = _svg
    .append("text")
    // .attr("x", 200)
    // .attr("y", 200 + leading * 1)
    .style("opacity", 0)
    .attr("font-family", "Arial")
    .style("fill", "white")
    .style("font-size", fontSize)
    .text("Line 2");
  Tooltip3 = _svg
    .append("text")
    // .attr("x", 200)
    // .attr("y", 200 + leading * 2)
    .style("opacity", 0)
    .attr("font-family", "Arial")
    .style("fill", "white")
    .style("font-size", fontSize)
    .text("Line 3");
  Tooltip4 = _svg
    .append("text")
    // .attr("x", 200)
    // .attr("y", 200 + leading * 3)
    .style("opacity", 0)
    .attr("font-family", "Arial")
    .style("fill", "white")
    .style("font-size", fontSize)
    .text("Line 4");
  Tooltip5 = _svg
    .append("text")
    // .attr("x", 200)
    // .attr("y", 200 + leading * 4)
    .style("opacity", 0)
    .attr("font-family", "Arial")
    .style("fill", "white")
    .style("font-size", fontSize)
    .text("Line 5");
  Tooltip6 = _svg
    .append("text")
    // .attr("x", 200)
    // .attr("y", 200 + leading * 5)
    .style("opacity", 0)
    .attr("font-family", "Arial")
    .style("fill", "white")
    .style("font-size", fontSize)
    .text("Line 6");
  Tooltip7 = _svg
    .append("text")
    // .attr("x", 200)
    // .attr("y", 200 + leading * 5)
    .style("opacity", 0)
    .attr("font-family", "Arial")
    .style("fill", "white")
    .style("font-size", fontSize)
    .text("Line 6");
  //habitat
  HabitatLineTop = _svg
    .append("line")
    .attr("id", "LineTop")
    .style("opacity", 0)
    .attr("stroke", "white")
    .style("stroke-dasharray", "2,2");
  HabitatLineDown = _svg
    .append("line")
    .attr("id", "LineTop")
    .style("opacity", 0)
    .attr("stroke", "white")
    .style("stroke-dasharray", "2,2");
  //bat
  TooltipLineTop = _svg
    .append("line")
    .attr("id", "LineTop")
    .style("opacity", 0)
    .attr("stroke", "white")
    .style("stroke-dasharray", "2,2");
  TooltipLineDown = _svg
    .append("line")
    .attr("id", "LineDown")
    .style("opacity", 0)
    .attr("stroke", "white")
    .style("stroke-dasharray", "2,2");
  TooltipLineDownNext = _svg
    .append("line")
    .attr("id", "LineDownNext")
    .style("opacity", 0)
    .attr("stroke", "white")
    .style("stroke-dasharray", "2,2");
  TooltipLineDownNextNext = _svg
    .append("line")
    .attr("id", "LineDownNext")
    .style("opacity", 0)
    .attr("stroke", "white")
    .style("stroke-dasharray", "2,2");
  TooltipLineBottomNext = _svg
    .append("line")
    .attr("id", "LineBottomNext")
    .style("opacity", 0)
    .attr("stroke", "white")
    .style("stroke-dasharray", "2,2");
  TooltipLineBottomFinal = _svg
    .append("line")
    .attr("id", "LineBottomFinal")
    .style("opacity", 0)
    .attr("stroke", "white")
    .style("stroke-dasharray", "2,2");

  // ToolTipTitle = _svg
  //   .append("text")
  //   .style("opacity", 1)
  //   .attr("x", width - 250)
  //   .attr("y", 20)
  //   .style("fill", "white")
  //   .attr("font-family", "Arial")
  //   .style("font-size", "15px")
  //   .text("Info. (hover on circles!)");

  /*
  TooltipBox = _svg
    .append("rect")
    .style("opacity", 1)
    .attr("x", width - 260)
    .attr("y", 60)
    .attr("width", 240)
    .attr("height", height - 160)
    .attr("stroke", "white")
    .attr("fill", "none")
    .style("stroke-dasharray", "2,2");
    */
}
var magicX = 0; //global x for line start
var magicY = 0;
var magicR = 0;

var lineTop = 140;
var lineBtm = 600;

function updateToolTip(_dx, _x, _y, _zfk, _zfx, _zfy) {
  //test values
  /*
  console.log(
    "_dx: ",
    _dx,
    "_x: ",
    _x,
    "_y: ",
    _y,
    "_zfk: ",
    _zfk,
    "_zfx: ",
    _zfx,
    "_zfy: ",
    _zfy
  );
  */

  var mouseLineX = _x;
  // var mouseLineY = _y;
  // console.log(">-> mouseLineX: ", mouseLineX);

  // console.log(">-> _zfx: ", _zfx);
  // var xFactor = 10;
  _tx = width - 200; //overwrite
  _ty = height - 200;

  keyLineX = width - 200;

  // console.log(">-> keyLineX: ", keyLineX);
  // console.log(">-> _zfx: ", _zfx);

  if (mouseLineX > keyLineX) {
    mouseOffset = magicX - magicR + _zfx;
  } else {
    mouseOffset = magicX + magicR + _zfx; //x
  }

  // console.log(">-> _zfy: ", _zfy);
  // console.log(">-> magicY: ", magicY);
  circleMiddle = magicY + _zfy;
  // console.log(">-> circleMiddle: ", circleMiddle);
  // var lineTop = 100;
  // var lineBtm = 550;
  // console.log(">>>circle -x : ", magicX);
  // console.log(">>>circle -y : ", magicY);
  // console.log(">>>circle -r : ", magicR);

  // TooltipLineTop.attr("x1", 184) //) //on circle
  TooltipLineTop.attr("x1", magicX) //) //on circle
    .attr("y1", lineTop) //zoom : mouseLineY) //on circle
    .attr("x2", width - 200) //on info
    .attr("y2", lineTop); //on info

  TooltipLineDownNext.attr("x1", magicX) //on circle
    .attr("y1", lineTop) //on circle
    .attr("x2", magicX) //on info
    .attr("y2", magicY - magicR); //on info
  TooltipLineDownNextNext.attr("x1", magicX) //on circle
    .attr("y1", magicY + magicR) //on circle
    .attr("x2", magicX) //on info
    .attr("y2", lineBtm); //on info
}
//seperate batTooltip
//habitattooltip
function showHabitatTooltip(_d, _x, _y) {
  // console.log("Habitat select: ", _d.properties.habitat_id);
  var habitat_loc = "";
  var habitat_desc = "";
  var habitat_title = "";
  var habitat_img = "";
  _ty = tooltipTxttop + 30;

  for (i = 0; i < habitat_assets.length; i++) {
    if (_d.properties.habitat_id == habitat_assets[i].key) {
      habitat_desc = habitat_assets[i].desc;
      habitat_img = habitat_assets[i].img;
      habitat_title = habitat_assets[i].title;
      habitat_loc = _d.properties.location;
    }
  }

  // var imageHabitatPath = "img/habitat_good.png";

  HabitatImg.style("opacity", 1)
    .attr("xlink:href", habitat_img)
    .attr("x", 30)
    .attr("y", _ty + leading - 30);
  HabitatTip_heading.text("Habitat: " + habitat_title)
    .style("opacity", 1)
    .style("font-size", "13px")
    .attr("x", 30)
    .attr("y", _ty + leading + imgHeight);
  HabitatTip_location.text("Location: " + habitat_loc)
    .style("opacity", 1)
    .style("font-size", "13px")
    .attr("x", 30)
    .attr("y", _ty + leading + imgHeight + 30);
  HabitatTip_desc.text(habitat_desc)
    .style("opacity", 1)
    .style("font-size", txtBoxFontSize)
    .attr("x", 30)
    .attr("y", _ty + leading + imgHeight + 60)
    .call(wrap, 190);
  //habitat lines
  // magicX = _d.x;
  // magicY = _d.y;
  // magicR = _d.radius;
  // console.log("HABITAT: ", _d, _x, _y);

  HabitatLineTop.style("opacity", 1)
    .attr("x1", _x) //) //on circle
    .attr("y1", lineTop) //zoom : mouseLineY) //on circle
    .attr("x2", 15 + imgHeight) //on info
    .attr("y2", lineTop); //on info

  HabitatLineDown.style("opacity", 1)
    .attr("x1", _x) //) //on circle
    .attr("y1", lineTop) //zoom : mouseLineY) //on circle
    .attr("x2", _x) //on info
    .attr("y2", _y); //
}
function showBatTooltip(_d) {
  // console.log(">>> ", _d.key);
  // svg.select("#" + _d.key).style("color", "green");
  // d3.select(_d.key).attr("fill", "red");

  magicX = _d.x;
  magicY = _d.y;
  magicR = _d.radius;

  var doubleHeight = leading * 2;
  // var blob = actualData[_d.category]; //??
  var xFactor = 10;
  _tx = width - 230; //overwrite
  _ty = tooltipTxttop + 30;
  var radiusFactor = 10;
  //image
  /*
  Tooltip.text("id: " + blob.id)
    .style("opacity", 1)
    .attr("x", _tx + xFactor)
    .attr("y", _ty);
    */
  // console.error("--> TOOLTIP BOTTOM -->");
  // console.log("showBat--> d --> ", _d);
  // console.log("--> d--> ", _d.color);
  var keySplit = _d.key.split("_");
  // console.log(">>key>> ", keySplit[0]);
  var keyRef = keySplit[1];
  //UPDATE LINE
  TooltipLineBottomNext.attr("x1", keyCircleArr[keyRef]) //on circle
    .attr("y1", lineBtm) //on circle
    .attr("x2", magicX) //on info
    .attr("y2", lineBtm); //on info

  TooltipLineBottomFinal.attr("x1", keyCircleArr[keyRef]) //on circle
    .attr("y1", lineBtm) //on circle
    .attr("x2", keyCircleArr[keyRef]) //on info
    .attr("y2", lineBtm + 40); //on info

  //
  d3.select("#keyCircle_" + keyRef).attr("opacity", "1");

  // var imageHabitatPath = "img/habitat_good.png";

  // HabitatImg.style("opacity", 1)
  //   .attr("xlink:href", species_assets[keyRef].habitatimg)
  //   .attr("x", 30)
  //   .attr("y", _ty + leading - 30);
  // HabitatTip_heading.text("Habitat: ")
  //   .style("opacity", 1)
  //   .style("font-size", "13px")
  //   .attr("x", 30)
  //   .attr("y", _ty + leading + imgHeight);
  // HabitatTip_desc.text("Habitat: " + species_assets[keyRef].habitat)
  //   .style("opacity", 1)
  //   .style("font-size", txtBoxFontSize)
  //   .attr("x", 30)
  //   .attr("y", _ty + leading + imgHeight + 30)
  //   .call(wrap, 190);

  BatImg.style("opacity", 1)
    .attr("xlink:href", "img/" + species_assets[keyRef].img)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading - 30);
  // Tooltip2.text("Location: " + blob.location)
  Tooltip2.text("Species: " + species_assets[keyRef].name)
    .style("opacity", 1)
    .style("font-size", "13px")
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading + imgHeight)
    .call(wrap, 200);
  Tooltip3.text("Description: " + species_assets[keyRef].desc)
    .style("opacity", 1)
    .style("font-size", txtBoxFontSize)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading * 2 + imgHeight)
    .attr("height", descBox)
    .call(wrap, 200);
  //count, habitat image, date??

  // Tooltip4.text("More info [link]")
  //   .style("opacity", 1)
  //   .style("font-size", txtBoxFontSize)
  //   .attr("x", _tx + xFactor)
  //   .attr("y", _ty + descBox + imgHeight);
  // .append("div")
  // .html("<a href='newPage.html'>new page</a>");
  // Tooltip5.text("Species: " + species_assets[_d.color].name)
  // Tooltip5.text("Location: " + blob.location)
  //   .style("opacity", 1)
  //   .style("font-size", txtBoxFontSize)
  //   .attr("x", _tx + xFactor)
  //   .attr("y", _ty + leading * 4 + descBox + imgHeight) //blob.category
  //   .attr("width", 190)
  //   .attr("height", doubleHeight)
  //   .call(wrap, 190);

  // wrap the text in <= 30
  // var unRadius = (_d.radius / radiusFactor) * actualData[_d.category].days;

  //TOTAL FOR WHOLE MAP

  //need total for species and location
  // .count
  // console.log(">>> ", surveyLocList22[keySplit[0]]);
  var locText = "";
  if (year == "2022") {
    locText = surveyLocList22[keySplit[0]];
  } else if (year == "2023") {
    locText = surveyLocList23[keySplit[0]];
  }

  // Tooltip5.text("Id: " + keySplit[0] + " Location: " + locText)

  Tooltip5.text("Location: " + locText)
    .style("opacity", 1)
    .style("font-size", txtBoxFontSize)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + descBox + imgHeight) //blob.category
    .attr("width", 190)
    .attr("height", doubleHeight)
    .call(wrap, 190);

  var zeroCheckTip = "";
  if (_d.count == 0) {
    zeroCheckTip = "0<1";
  } else {
    zeroCheckTip = _d.count;
  }
  Tooltip6.text("Average Bats per night: " + zeroCheckTip + "*")
    .style("opacity", 1)
    .style("font-size", "13px")
    .attr("x", _tx + xFactor)
    .attr("y", _ty + descBox + imgHeight + 20);

  /*
  Tooltip7.text("Click to play sound")
    .style("opacity", 1)
    .style("font-size", txtBoxFontSize)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading * 7 + descBox + imgHeight + doubleHeight);
    */

  TooltipLineTop.style("opacity", 1);
  TooltipLineDown.style("opacity", 1);
  TooltipLineDownNext.style("opacity", 1);
  TooltipLineDownNextNext.style("opacity", 1);
  TooltipLineBottomNext.style("opacity", 1);
  TooltipLineBottomFinal.style("opacity", 1);

  // TooltipBox.style("opacity", 1);
}

function hideTooltip() {
  HabitatLineTop.style("opacity", 0);
  HabitatLineDown.style("opacity", 0);
  HabitatImg.style("opacity", 0);
  HabitatTip_heading.style("opacity", 0);
  HabitatTip_location.style("opacity", 0);
  HabitatTip_desc.style("opacity", 0);
  BatImg.style("opacity", 0);
  Tooltip.style("opacity", 0);
  Tooltip2.style("opacity", 0);
  Tooltip3.style("opacity", 0);
  Tooltip4.style("opacity", 0);
  Tooltip5.style("opacity", 0);
  Tooltip6.style("opacity", 0);
  Tooltip7.style("opacity", 0);
  TooltipLineTop.style("opacity", 0);
  TooltipLineDown.style("opacity", 0);
  TooltipLineDownNext.style("opacity", 0);
  TooltipLineDownNextNext.style("opacity", 0);
  TooltipLineBottomNext.style("opacity", 0);
  TooltipLineBottomFinal.style("opacity", 0);
  //clear circle
  for (i = 0; i < keyCircleArr.length; i++) {
    d3.select("#keyCircle_" + i).attr("opacity", "0.4");
  }

  // TooltipBox.style("opacity", 1);
}
