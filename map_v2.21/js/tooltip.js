/*tooltip stuff */
var tooltipTxttop = 30; //1st line

function makeTooltip(_svg) {
  //
  //image
  let imagePath = "img/ghb.png";

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

  TooltipLineTop = _svg
    .append("line")
    .style("opacity", 0)
    .attr("stroke", "white")
    .style("stroke-dasharray", "2,2");
  TooltipLineDown = _svg
    .append("line")
    .style("opacity", 0)
    .attr("stroke", "white")
    .style("stroke-dasharray", "2,2");
  TooltipLineDownNext = _svg
    .append("line")
    .style("opacity", 0)
    .attr("stroke", "white")
    .style("stroke-dasharray", "2,2");
  TooltipLineBottomNext = _svg
    .append("line")
    .style("opacity", 0)
    .attr("stroke", "white")
    .style("stroke-dasharray", "2,2");
  TooltipLineBottomFinal = _svg
    .append("line")
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

var lineTop = 120;
var lineBtm = 550;

function updateToolTip(_dx, _x, _y, _zfk, _zfx, _zfy) {
  var mouseLineX = _x;
  // var mouseLineY = _y;

  // var xFactor = 10;
  _tx = width - 200; //overwrite
  _ty = height - 200;

  keyLineX = width - 200;

  if (mouseLineX > keyLineX) {
    mouseOffset = magicX - magicR + _zfx;
  } else {
    mouseOffset = magicX + magicR + _zfx; //x
  }

  circleMiddle = magicY + _zfy;

  // var lineTop = 100;
  // var lineBtm = 550;

  TooltipLineTop.attr("x1", magicX) //) //on circle
    .attr("y1", lineTop) //zoom : mouseLineY) //on circle
    .attr("x2", width - 230) //on info
    .attr("y2", lineTop); //on info

  TooltipLineDown.attr("x1", mouseOffset - magicR) //on circle
    .attr("y1", circleMiddle - magicR) //on circle
    .attr("x2", mouseOffset - magicR) //on info
    .attr("y2", lineTop); //on info

  TooltipLineDownNext.attr("x1", magicX) //on circle
    .attr("y1", circleMiddle + magicR) //on circle
    .attr("x2", mouseOffset - magicR) //on info
    .attr("y2", lineBtm); //on info

  // TooltipLineBottomNext.attr("x1", 60) //on circle
  //   .attr("y1", lineBtm) //on circle
  //   .attr("x2", magicX) //on info
  //   .attr("y2", lineBtm); //on info

  // console.log("--> ID:", _dx);

  // TooltipLineDown.attr("x1", width - 260) //on circle
  //   .attr("y1", circleMiddle) //on circle
  //   .attr("x2", width - 260) //on info
  //   .attr("y2", height - 260); //on info
}
function showTooltip(_d) {
  magicX = _d.x;
  magicY = _d.y;
  magicR = _d.radius;

  var descBox = 200;
  var imgHeight = 150;
  var doubleHeight = leading * 2;
  var blob = actualData[_d.category];
  var xFactor = 10;
  _tx = width - 260; //overwrite
  _ty = tooltipTxttop + 30;

  //image
  /*
  Tooltip.text("id: " + blob.id)
    .style("opacity", 1)
    .attr("x", _tx + xFactor)
    .attr("y", _ty);
    */
  // console.error("--> TOOLTIP BOTTOM -->");
  // console.log("--> d --> ", _d);
  console.log("--> d--> ", _d.color);
  //UPDATE LINE
  TooltipLineBottomNext.attr("x1", keyCircleArr[_d.color]) //on circle
    .attr("y1", lineBtm) //on circle
    .attr("x2", magicX) //on info
    .attr("y2", lineBtm); //on info

  TooltipLineBottomFinal.attr("x1", keyCircleArr[_d.color]) //on circle
    .attr("y1", lineBtm) //on circle
    .attr("x2", keyCircleArr[_d.color]) //on info
    .attr("y2", lineBtm + 40); //on info

  //
  d3.select("#keyCircle_" + _d.color).attr("opacity", "1");

  var txtBoxFontSize = "11px";
  BatImg.style("opacity", 1)
    .attr("xlink:href", "img/" + soundProps[_d.color].img)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading - 30);
  // Tooltip2.text("Location: " + blob.location)
  Tooltip2.text("Species: " + soundProps[_d.color].name)
    .style("opacity", 1)
    .style("font-size", txtBoxFontSize)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading + imgHeight);
  Tooltip3.text("Description: " + soundProps[_d.color].desc)
    .style("opacity", 1)
    .style("font-size", txtBoxFontSize)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading * 2 + imgHeight)
    .attr("height", descBox)
    .call(wrap, 200);
  Tooltip4.text("Date: " + blob.date)
    .style("opacity", 1)
    .style("font-size", txtBoxFontSize)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading * 3 + descBox + imgHeight);
  // Tooltip5.text("Species: " + soundProps[_d.color].name)
  Tooltip5.text("Location: " + blob.location)
    .style("opacity", 1)
    .style("font-size", txtBoxFontSize)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading * 4 + descBox + imgHeight) //blob.category
    .attr("width", 190)
    .attr("height", doubleHeight)
    .call(wrap, 190);
  // wrap the text in <= 30
  var unRadius = (_d.radius / radiusFactor) * actualData[_d.category].days;
  Tooltip6.text("Count: " + Math.floor(unRadius))
    .style("opacity", 1)
    .style("font-size", txtBoxFontSize)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading * 5 + descBox + imgHeight + 2);
  Tooltip7.text("Click to play sound")
    .style("opacity", 1)
    .style("font-size", txtBoxFontSize)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading * 7 + descBox + imgHeight + doubleHeight);

  TooltipLineTop.style("opacity", 1);
  TooltipLineDown.style("opacity", 1);
  TooltipLineDownNext.style("opacity", 1);
  TooltipLineBottomNext.style("opacity", 1);
  TooltipLineBottomFinal.style("opacity", 1);

  // TooltipBox.style("opacity", 1);
}

function hideTooltip() {
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
  TooltipLineBottomNext.style("opacity", 0);
  TooltipLineBottomFinal.style("opacity", 0);
  //clear circle
  for (i = 0; i < keyCircleArr.length; i++) {
    d3.select("#keyCircle_" + i).attr("opacity", "0.4");
  }

  // TooltipBox.style("opacity", 1);
}
