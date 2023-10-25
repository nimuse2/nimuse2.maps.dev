///////////////////////////////

/*
FINISHED DATA OBJECT TO PUT INTO DISPLAY
*/
//MAIN DATA OBJECT////
var data = makeData(locationList, resultsList2022); //

// console.log("DATA: ", data);
//MAKE MAIN OBJECTS
var simulation = {};
var bubbles = {};
var labels = {};

//////////////////////////////

//CREATE D3 OBJECT
var svg = d3
  // .select("body")
  .select("#map")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var background = svg.append("g");
var foreground = svg.append("g");

//BUILD BACKGROUND
// REQUEST DATA
d3.json("wash_extended.json").then(function (json) {
  update(json, "main_map");
});
// d3.json("farm_footprint.json").then(function (json) {
//   update(json, "footprint");
// });
d3.json("hedge_control_1.json").then(function (json) {
  update(json, "hedges");
});

// //BUILD MAIN CIRCLES
makeCircleDisplay();
//make txt
makeText();
makeAltKey(svg);
makeTooltip(svg);

//UI INTERACT//////////////////////
d3.select("#change2023").on("click", function () {
  updateCircleDisplay(resultsList2023);
  // makeCircleDisplay(testData);
});
d3.select("#change2022").on("click", function () {
  updateCircleDisplay(resultsList2022);
});
