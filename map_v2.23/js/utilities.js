//variables and functions used by whole program - GLOBALS!
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
var radiusScale = d3.scaleSqrt().domain([0, 40]).range([5, 30]);
// var radiusScale = d3.scaleSqrt().domain([0, 40]).range([5, 50]);

var colorScale = d3
  .scaleLinear()
  .domain([0, 10, 37])
  // .range(["orange", "lightyellow"]);
  .range(["#ffffcc", "#c90a22", "#fd893c"]);
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
