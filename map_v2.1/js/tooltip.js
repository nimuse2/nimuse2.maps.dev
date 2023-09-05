/*tooltip stuyff */

function makeTooltip(_svg) {
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

  ToolTipTitle = _svg
    .append("text")
    .style("opacity", 1)
    .attr("x", width - 200)
    .attr("y", height - 230)
    .style("fill", "white")
    .attr("font-family", "Arial")
    .style("font-size", "15px")
    .text("Info. (hover on circles!)");

  TooltipBox = _svg
    .append("rect")
    .style("opacity", 0)
    .attr("x", width - 210)
    .attr("y", height - 260)
    .attr("width", 190)
    .attr("height", 220)
    .attr("stroke", "white")
    .attr("fill", "none")
    .style("stroke-dasharray", "2,2");
}
var magicX = 0; //global x for line start
var magicY = 0;
var magicR = 0;
function updateToolTip(_dx, _x, _y, _zfk, _zfx, _zfy) {
  var mouseLineX = _x;
  var mouseLineY = _y;

  var xFactor = 10;
  _tx = width - 200; //overwrite
  _ty = height - 200;

  keyLineX = width - 190;

  if (mouseLineX > keyLineX) {
    mouseOffset = magicX - magicR + _zfx;
  } else {
    mouseOffset = magicX + magicR + _zfx; //x
  }

  circleMiddle = magicY + _zfy;

  TooltipLineTop.attr("x1", mouseOffset) //) //on circle
    .attr("y1", circleMiddle) //zoom : mouseLineY) //on circle
    .attr("x2", width - 190) //on info
    .attr("y2", circleMiddle); //on info

  TooltipLineDown.attr("x1", width - 190) //on circle
    .attr("y1", circleMiddle) //on circle
    .attr("x2", width - 190) //on info
    .attr("y2", height - 260); //on info
}
function showTooltip(_d) {
  magicX = _d.x;
  magicY = _d.y;
  magicR = _d.radius;

  var blob = actualData[_d.category];
  var xFactor = 10;
  _tx = width - 200; //overwrite
  _ty = height - 200;

  Tooltip.text("id: " + blob.id)
    .style("opacity", 1)
    .attr("x", _tx + xFactor)
    .attr("y", _ty);
  Tooltip2.text("Location: " + blob.location)
    .style("opacity", 1)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading);
  Tooltip3.text("Habitat: " + blob.habitat)
    .style("opacity", 1)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading * 2);
  Tooltip4.text("Date: " + blob.date)
    .style("opacity", 1)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading * 3);
  Tooltip5.text("Species: " + soundProps[_d.color].name)
    .style("opacity", 1)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading * 4); //blob.category
  var unRadius = (_d.radius / radiusFactor) * actualData[_d.category].days;
  Tooltip6.text("Count: " + Math.floor(unRadius))
    .style("opacity", 1)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading * 5);
  Tooltip7.text("Click to play sound")
    .style("opacity", 1)
    .attr("x", _tx + xFactor)
    .attr("y", _ty + leading * 7);

  TooltipLineTop.style("opacity", 1);
  TooltipLineDown.style("opacity", 1);

  TooltipBox.style("opacity", 1);
}

function hideTooltip() {
  Tooltip.style("opacity", 0);
  Tooltip2.style("opacity", 0);
  Tooltip3.style("opacity", 0);
  Tooltip4.style("opacity", 0);
  Tooltip5.style("opacity", 0);
  Tooltip6.style("opacity", 0);
  Tooltip7.style("opacity", 0);
  TooltipLineTop.style("opacity", 0);
  TooltipLineDown.style("opacity", 0);
  TooltipBox.style("opacity", 0);
}
