///////////////////////////////

/*
FINISHED DATA OBJECT TO PUT INTO DISPLAY
*/
var data = makeData(locationList);
console.log("DATA: ", data);
//MAKE MAIN OBJECTS
var simulation = {};
var bubbles = {};
var labels = {};

//////////////////////////////

//CREATE D3 OBJECT
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

//BUILD BACKGROUND
// REQUEST DATA
d3.json("wash_extended.json").then(function (json) {
  update(json);
});

// //BUILD MAIN CIRCLES
makeCircleDisplay();

//UI INTERACT//////////////////////
d3.select("#change2023").on("click", function () {
  updateCircleDisplay();
  // makeCircleDisplay(testData);
});
d3.select("#change2022").on("click", function () {
  updateCircleDisplay();
});
