///////////////////////////////

/*
FINISHED DATA OBJECT TO PUT INTO DISPLAY
*/
//MAIN DATA OBJECT////
var data = makeData(locationList, resultsList2022); //
// var make2023data = makeData(locationList2023, resultsList2022); //

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
  .attr("viewBox", `0 0 1380 720`);
// .attr("width", width)
// .attr("height", height);
// r width = 1380,
// height = 720;

var background = svg.append("g");
var footprint = svg.append("g");
var midbackground = svg.append("g");
var midground = svg.append("g");
var foreground = svg.append("g");
var interactive = svg.append("g");
var habitat = svg.append("g");

//BUILD BACKGROUND
// REQUEST DATA

d3.json("geoJson/farm_footprint.json").then(function (json) {
  updateFootprint(json, "footprint");
});

d3.json("geoJson/wash_extended.json").then(function (json) {
  updateBack(json, "main_map");
});
d3.json("geoJson/wash_woods.json").then(function (json) {
  updateMidBack(json, "woods");
});
d3.json("geoJson/hedge_control_3.json").then(function (json) {
  updateMid(json, "hedges");
});
d3.json("geoJson/habitat.json").then(function (json) {
  updateHabitat(json, "habitat");
});
// d3.json("wash_extended.json").then(function (json) {
//   update(json, "main_map");
// });

// //BUILD MAIN CIRCLES
makeCircleDisplay();
//make txt
makeText();
makeDynamicKey(svg);
// makeKeyDynamic();
makeLegend(svg, width, height);
makeTooltip(interactive);

//UI INTERACT//////////////////////
d3.select("#change2023").on("click", function () {
  updateCircleDisplay(resultsList2023, "2023");
  updateDynamic(totalCount23);
  // makeCircleDisplay(testData);
});
d3.select("#change2022").on("click", function () {
  updateCircleDisplay(resultsList2022, "2022");
  updateDynamic(totalCount22);
});
