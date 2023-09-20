// var width = 1280,
//   height = 720;
var width = 620,
  height = 600;
var testNum = 6;

//AUDIO////////////////////////////////////
//text formatting
var leading = 20;
var fontSize = "11px;";

var radiusFactor = 6; //factor to visually increase/decrease size of circle

//MODEL//////////////////////////////////////
var projection = d3
  .geoMercator()
  // .angle(90)
  // .reflectY(true)
  .scale(1500000) //700000-smaller - 1900000 - bigger - 3000000 //180000
  // .center([washData[0].lat, washData[0].long])
  .center([-3.7373521109426804, 50.473602050689635]) //0,5
  // .rotate([0, 0])
  .translate([width / 2, height / 2]);
// .translate([200, 280]);

var xCenter = [];
var yCenter = [];

var mapCircles = [];
var mapWash = [];

for (i = 0; i < actualData.length; i++) {
  var lat = actualData[i].lat;
  var long = actualData[i].long;

  var mArr = projection([lat, long]);

  xCenter.push(mArr[0]);
  yCenter.push(mArr[1]);

  mapCircles.push({ x: mArr[0], y: mArr[1], id: actualData[i].id });
}
//

//END MAP

polypoints = [];
for (i = 0; i < washData.length; i++) {
  var wArr = projection([washData[i].lat, washData[i].long]);
  polypoints.push(wArr[0] - 100, wArr[1] + 10);
}

//

// console.log("mapWash: ", mapWash);
//VIEW//////////////////////////////////////////////

// var svg = d3
//   .select("#map")
//   .append("svg")
//   .attr("viewBox", `0 0 ${width} ${height}`)
//   .style("background", "#303030")
//   .append("g")
//   .attr("class", "map");
var svg = d3
  .select("#content g.main")
  .attr("viewBox", `0 0 ${width} ${height}`);
//MAP////////////////

let geoGenerator = d3.geoPath().projection(projection);

function update(geojson) {
  let uu = d3.select("#content g.map").selectAll("path").data(geojson.features);
  // let u = svg.selectAll("path").data(geojson.features);

  uu.enter()
    .append("path")
    .attr("d", geoGenerator)
    .attr("stroke-width", function (d) {
      console.log(d.properties.strokewidth);
      return d.properties.strokewidth;
    })
    .attr("style", function (d) {
      console.log(d.properties.fill);
      // return "fill:" + d.properties.fill;
    })
    .attr("stroke", function (d) {
      console.log(d.properties.stroke);
      return d.properties.stroke;
    });
  // .attr("stroke-width", "10px");
  // .on("mouseover", handleMouseover);
}

// REQUEST DATA
d3.json("wash_basic.json").then(function (json) {
  update(json);
});

var elem = svg.selectAll("g").data(mapCircles); //for collision

var elemEnter = elem.enter().append("g");

var elem0 = svg.selectAll("g0").data(mapCircles);
var elemEnter0 = elem0
  .enter()
  .append("g")
  .attr("transform", function (d) {
    return "translate(" + d.x + "," + d.y + ")";
  });

//MAIN MAP POINTS////////////////////////////////////

//ZOOM/////////////////

var zoomFactor = 1.2; // distance
var panFactor = 50; // distance
let zoom = d3.zoom().on("zoom", handleZoom);

function handleZoom(e) {
  // d3.select("svg g").attr("transform", e.transform);
  // d3.select("svg g").attr("transform", d3.event.transform);
  d3.selectAll(".zoomCircle").attr("transform", d3.event.transform);
  // d3.select("svg g g").attr("transform", d3.event.transform);
}

function initZoom() {
  d3.select("svg").call(zoom);
}

d3.select("#zoom_in").on("click", function () {
  zoom.scaleBy(svg.transition().duration(750), 1.2);
});
d3.select("#zoom_out").on("click", function () {
  zoom.scaleBy(svg.transition().duration(750), 1.2);
});
d3.select("#zoom_reset").on("click", function () {
  zoom.scaleTo(svg.transition().duration(750), 1);
});
d3.select("#zoom_center").on("click", function () {
  svg
    .transition()
    .duration(750)
    .call(zoom.translateTo, 0.5 * width, 0.5 * height);
  // zoom.scaleTo(svg.transition().duration(750), 1);
  // zoom.translateTo(0.5 * width, 0.5 * height);
});
d3.select("#pan_left").on("click", function () {
  svg.transition().duration(750).call(zoom.translateBy, -200, 0);
});
d3.select("#pan_right").on("click", function () {
  svg.transition().duration(750).call(zoom.translateBy, 200, 0);
});
d3.select("#pan_up").on("click", function () {
  svg.transition().duration(750).call(zoom.translateBy, 0, -200);
});
d3.select("#pan_down").on("click", function () {
  svg.transition().duration(750).call(zoom.translateBy, 0, 200);
});

// CENTRAL WASH//////////////////////////////////

var elem2 = svg
  .selectAll("polygon")
  .data(polypoints)
  .enter()
  .append("polygon")
  .attr("points", polypoints)
  .attr("class", "zoomCircle")
  .attr("stroke", "red")
  .attr("fill", "none")
  .attr("stroke-width", 1);
// .attr("transform", "translate(-100,10)");
svg
  .append("text")
  .attr("class", "zoomCircle")
  .attr("x", width / 2)
  .attr("y", height / 2)
  .attr("font-family", "Arial")
  .style("font-size", "15px")
  .style("fill", "white")
  .text("Wash Main Site");

//BACKGROUND////////////////////////////////////
//DIRECT TO SVG
makeBackground(svg, width, height);
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
    // .select("#content g.main")
    // .select("svg g.main")
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
  var elem = document.elementFromPoint(coordinates[0], coordinates[1]);

  let tx = d3.event.x;
  let zf = d3.zoomTransform(this);

  updateToolTip(tx, coordinates[0], coordinates[1], zf.k, zf.x, zf.y);
});
