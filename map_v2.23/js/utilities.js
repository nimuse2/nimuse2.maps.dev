//variables and functions used by whole program - GLOBALS!
var leading = 30;
//STRING SPLIT////////////////////////
function keySplit(_key) {
  var locationKey = "0";
  locationKey = _key.split("_");
  return locationKey;
}
//MERCANTILE TRANSFORMER///////////////
let projectionGeo = d3
  .geoMercator()
  .scale(1400000) //400
  .translate([width / 2 + 80, height / 2 + 150])
  .center([-3.7373521109426804, 50.473602050689635]); //0,5
//
let geoGenerator = d3.geoPath().projection(projectionGeo);

//SCREEN TRANSFORMS/////////////////////
var radiusScale = d3.scaleSqrt().domain([0, 40]).range([10, 30]);
// var radiusScale = d3.scaleSqrt().domain([0, 40]).range([5, 40]);
// var radiusScale = d3.scaleSqrt().domain([0, 40]).range([5, 50]);
// var rgbColor = [
//   "rgb(43, 236, 59)",
//   "rgb(43, 155, 236)",
//   "rgb(208, 43, 236)",
//   "rgb(236, 232, 43)",
//   "rgb(43, 236, 208)",
//   "rgb(189, 235, 52)",
//   "rgb(3, 94, 252)",
//   "rgb(252, 148, 3)",
//   "rgb(194, 3, 252)",
//   "rgb(252, 3, 94)",
// ];

// var rgbColor = set3col;
// var newCol = [];
// for (i=0;i<set3col.length;i++){
//   newCol.push(d3.color);
// }

// console.log("COLOR: ", d3.color("#8dd3c7"));

// var colorScale = d3.scaleLinear().domain([0, 10, 37]).range(rgbColor);
// .range(["orange", "lightyellow"]);
// .range(["#ffffcc", "#c90a22", "#fd893c"]);

// .range(["#c7e9b4", "#41b6c4", "#253494"]);
/*

*/
//TEXT WRAP//////////////////////////////
var keyCircleArr = [];
function wrap(text, width) {
  text.each(function () {
    var text = d3.select(this),
      words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.1, // ems
      x = text.attr("x"),
      y = text.attr("y"),
      dy = 0, //parseFloat(text.attr("dy")),
      tspan = text
        .text(null)
        .append("tspan")
        .attr("x", x)
        .attr("y", y)
        .attr("dy", dy + "em");
    while ((word = words.pop())) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text
          .append("tspan")
          .attr("x", x)
          .attr("y", y)
          .attr("dy", ++lineNumber * lineHeight + dy + "em")
          .text(word);
      }
    }
  });
}
