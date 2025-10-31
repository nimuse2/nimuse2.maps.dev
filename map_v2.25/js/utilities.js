//variables and functions used by whole program - GLOBALS!
var leading = 30;
var year = "2022";
//PERCENTAGE ARRAY///////////////////////////////
function buildPercentageArray(_arr) {
  //returns percentagearry
  var tArr = 0;
  var rArr = [];
  for (i = 0; i < _arr.length; i++) {
    tArr = tArr + _arr[i];
  }
  //%
  for (i = 0; i < _arr.length; i++) {
    // console.log(">", totalaverages22, " >> ", av22[i]);
    //20/100 * 100
    rArr.push(((_arr[i] / tArr) * 100).toFixed(1));
  }
  return rArr;
  //rArr is total
}
//RANDOM///////////
function makeRandom(_n) {
  var _r = Math.floor(Math.random() * _n);
  console.log("_r>", _r);
  return _r;
}

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
