var width = 1280,
  height = 1020;
var testNum = 6;

//AUDIO////////////////////////////////////
//text formatting
var leading = 20;
var fontSize = "11px;";

var radiusFactor = 6; //factor to visually increase/decrease size of circle

//MODEL//////////////////////////////////////
//MAIN CIRCLES - UPSIDE DOWN??
var projection = d3
  .geoMercator()
  .angle(90)
  .reflectY(true)
  .scale(1500000) //700000-smaller - 1900000 - bigger - 3000000 //180000
  .center([washData[0].lat, washData[0].long])
  // .center([-3.7318, 50.4735])
  .rotate([0, 0])
  .translate([width / 2 - 200, height / 2]);

var mapCircles = [];
var mapWash = [];

for (i = 0; i < actualData.length; i++) {
  var lat = actualData[i].lat;
  var long = actualData[i].long;

  var mArr = projection([lat, long]);

  // xCenter.push(mArr[0]);
  // yCenter.push(mArr[1]);

  mapCircles.push({ x: mArr[0], y: mArr[1], id: actualData[i].id });
}
//////////////////
//GEOMAP////////
let projectionGeo = d3
  .geoMercator()
  .scale(1500000) //400
  .translate([width / 2 - 200, height / 2])
  .center([-3.7373521109426804, 50.473602050689635]); //0,5
// .center([-3.7318, 50.4735]);

let geoGenerator = d3.geoPath().projection(projectionGeo);

//TEXT/////
// let geoText = {
//   type: "Feature",
//   properties: {},
//   geometry: {
//     coordinates: [-3.7378617233992486, 50.47349061251626],
//     type: "Point",
//   },
// };

var txtWashArr = projectionGeo([-3.7378617233992486, 50.47349061251626]);
var txtLandscoveArr = projectionGeo([-3.724649238636232, 50.48079468366879]);
var txtFurzdonArr = projectionGeo([-3.719349734624757, 50.46898784499817]);
var txtBaeraArr = projectionGeo([-3.7528953519168624, 50.48158513022531]);
//screen x,y
//VIEW//////////////////////////////////////////////

var svg = d3
  .select("#map")
  .append("svg")
  .attr("viewBox", `0 0 ${width} ${height}`)
  .style("background", "#303030");

var elem = svg.selectAll("g").data(mapCircles).enter().append("g"); //for collision

/////////////////////////////////////////////////
svg
  .append("text")
  .style("opacity", 1)
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("Wash Farm")
  .attr("x", txtWashArr[0])
  .attr("y", txtWashArr[1]);
svg
  .append("text")
  .style("opacity", 1)
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("Landscove")
  .attr("x", txtLandscoveArr[0])
  .attr("y", txtLandscoveArr[1]);
svg
  .append("text")
  .style("opacity", 1)
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("Furzdon")
  .attr("x", txtFurzdonArr[0])
  .attr("y", txtFurzdonArr[1]);
svg
  .append("text")
  .style("opacity", 1)
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("Higher Baera")
  .attr("x", txtBaeraArr[0])
  .attr("y", txtBaeraArr[1]);

function update(geojson) {
  let uu = svg.selectAll("path").data(geojson.features);
  // let uu = d3.select("#content g.map").selectAll("path").data(geojson.features);

  uu.enter()
    .append("path")
    .attr("d", geoGenerator)
    .attr("stroke-width", function (d) {
      console.log(d.properties.strokewidth);
      return d.properties.strokewidth;
    })
    .attr("style", function (d) {
      console.log(d.properties.fill);
      return "fill:" + d.properties.fill;
    })
    .attr("stroke", function (d) {
      console.log(d.properties.stroke);
      return d.properties.stroke;
    });
  // uu.enter().append("text").text("hello");
  // .attr("stroke-width", "10px");
  // .on("mouseover", handleMouseover);
}

// REQUEST DATA
d3.json("wash_extended.json").then(function (json) {
  update(json);
});

//MAIN MAP POINTS////////////////////////////////////

//ZOOM/////////////////
//ZOOM REMOVED

//BACKGROUND////////////////////////////////////
//DIRECT TO SVG
// makeBackground(svg, width, height);
makeLegend(svg, width, height);
makeKey(svg);

makeTooltip(svg);

function mouseOver(_e, _d, _i) {
  console.log("mouseover", _e, _d, _i);

  updateToolTip(_d, _e[0], _e[1]);
}
function mouseOut() {
  // hideTooltip();
}

//BUBBLES/////////////////////////////////////
//replace with array

//simulation - cluster code

var numNodes = 100; //circles (nodes) per location (xCenter,yCenter) 10x10
var _key = 0;
var nodes = d3.range(numNodes).map(function (d, i) {
  //magic numbers:
  // console.log("i: ", i); //1-100
  // console.log("i % 10:", i % 10); //0-9
  // console.log("key:", _key);
  // console.log("data: ", actualData[_key].results[i % 10].count);
  if (i % 10 == 0) {
    _key = i / 10;
  }
  return {
    radius:
      (actualData[_key].results[i % 10].count / actualData[_key].days) *
      radiusFactor,
    category: _key, //grouping by _key - location
    color: i % 10,
  };
});

//BUILD CIRCLES////////////////////
var simulation = d3
  .forceSimulation(nodes)
  .force("charge", d3.forceManyBody().strength(5))
  .force(
    "x",
    d3.forceX().x(function (d, i) {
      return mapCircles[d.category].x;
    })
  )
  .force(
    "y",
    d3.forceY().y(function (d, i) {
      return mapCircles[d.category].y;
    })
  )
  .force(
    "collision",
    d3.forceCollide().radius(function (d) {
      return d.radius;
    })
  )
  .on("tick", ticked);

function ticked() {
  //blobs
  var u = d3
    .select("svg g")
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    // .transition()
    .attr("r", function (d) {
      return d.radius;
    })
    .style("fill", function (d) {
      return soundProps[d.color].col;
    })
    .attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    })
    .attr("class", "infocircle zoomCircle")
    .attr("id", function (d, i) {
      return d.index;
    })
    .on("click", function (d, i) {
      playSound(d, i);
    })
    .on("mouseover", function (d, i) {
      showTooltip(d);
    })
    .on("mouseleave", function (d, i) {
      hideTooltip();
    });
}
svg.on("mousemove", function (d, i) {
  var coordinates = d3.mouse(this);
  // var elem1 = document.elementFromPoint(coordinates[0], coordinates[1]);

  let tx = d3.event.x;
  let zf = d3.zoomTransform(this);

  updateToolTip(tx, coordinates[0], coordinates[1], zf.k, zf.x, zf.y);
});

//////////////////////////////
