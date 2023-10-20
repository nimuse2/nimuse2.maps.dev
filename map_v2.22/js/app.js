//update to live
var width = 1280,
  height = 720;
var testNum = 6;

//AUDIO////////////////////////////////////
//text formatting
var leading = 20;
var fontSize = "9px;";

var radiusFactor = 6; //factor to visually increase/decrease size of circle

//MODEL//////////////////////////////////////
//MAIN CIRCLES - UPSIDE DOWN??
var projection = d3
  .geoMercator()
  .angle(90)
  .reflectY(true)
  .scale(1500000) //700000-smaller - 1900000 - bigger - 3000000 //180000
  // .center([washData[0].lat, washData[0].long])
  .center([50.47339, -3.74031])
  .rotate([0, 0])
  .translate([width / 2 - 200, height / 2 + 100]);

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
  .scale(1400000) //400
  .translate([width / 2 + 80, height / 2 + 150])
  .center([-3.7373521109426804, 50.473602050689635]); //0,5
// .center([-3.7318, 50.4735]);

let geoGenerator = d3.geoPath().projection(projectionGeo);

//GEOLOCATIONS ARE IN REVERSE ORDER FROM geojson.io
//GENERAL LANDMARK TEXT
var txtWashArr = projectionGeo([-3.7378617233992486, 50.47349061251626]);
var txtLandscoveArr = projectionGeo([-3.724649238636232, 50.48079468366879]);
var txtFurzdonArr = projectionGeo([-3.719349734624757, 50.46898784499817]);
var txtBaeraArr = projectionGeo([actualData[0].lat, actualData[0].long]);
var txtDartArr = projectionGeo([-3.759630557527089, 50.47286464147538]);

//BAT LOCATIONS
var location_1Arr = projectionGeo([-3.7340826458860477, 50.48125083257165]); //screen x,y
var location_2Arr = projectionGeo([-3.7379118447883855, 50.478985467531714]);
var location_3Arr = projectionGeo([-3.7338732365712417, 50.47563481262637]);
//4?
var location_4Arr = [100, 100];
var location_5Arr = projectionGeo([-3.72412074561538, 50.47180792190633]);
var location_6Arr = projectionGeo([-3.7318, 50.4735]);
var location_7Arr = projectionGeo([-3.735728004789479, 50.47830012562318]);
var location_8Arr = projectionGeo([-3.726334511991382, 50.47900450221542]);
var location_9Arr = projectionGeo([-3.7546645805163053, 50.478338205228596]);
var location_10Arr = [100, 100];

var geoLocations = [
  location_1Arr,
  location_2Arr,
  location_3Arr,
  location_4Arr,
  location_5Arr,
  location_6Arr,
  location_7Arr,
  location_8Arr,
  location_9Arr,
  location_10Arr,
];

//VIEW//////////////////////////////////////////////

var svg = d3
  .select("#map")
  .append("svg")
  .attr("viewBox", `0 0 ${width} ${height}`)
  .style("background", "#303030");

var elem = svg.selectAll("g").data(mapCircles).enter().append("g"); //for collision
//
svg
  .append("text")
  // .style("opacity", 0.6)
  .attr("font-family", "Arial")
  .attr("font-size", "11px")
  .style("fill", "white")
  .text(
    "Introduction: This is a map showing the Bat Data collected between Aug. 2022 and Oct. 2022.  If you roll obver the circles you can find out diferent information about the Bats. If you click on the circles you will hear the Bat noises collected at the different locations. The size of the circles indicates the total number of Bats recorded during this period. The frequencies they use are interesting [LINK TO MORE SOUND INFO.]"
  )
  .attr("x", 30)
  .attr("y", 230)
  .call(wrap, 190);

/////////////////////////////////////////////////
svg
  .append("text")
  .style("opacity", 0.6)
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("Wash Farm")
  .attr("x", txtWashArr[0])
  .attr("y", txtWashArr[1]);
svg
  .append("text")
  .style("opacity", 0.6)
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("Landscove")
  .attr("x", txtLandscoveArr[0] - 50)
  .attr("y", txtLandscoveArr[1]);
svg
  .append("text")
  .style("opacity", 0.6)
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("Furzdon")
  .attr("x", txtFurzdonArr[0])
  .attr("y", txtFurzdonArr[1]);
// svg
//   .append("text")
//   .style("opacity", 0.6)
//   .attr("font-family", "Arial")
//   .attr("font-size", "9px")
//   .style("fill", "white")
//   .text("Higher Baera")
//   .attr("x", txtBaeraArr[0])
//   .attr("y", txtBaeraArr[1]);
svg
  .append("text")
  .style("opacity", 0.6)
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("River Dart")
  .attr("x", txtDartArr[0] - 60)
  .attr("y", txtDartArr[1]);

//bat locations

//
svg
  .append("text")
  .style("opacity", 0.6)
  .style("font-size", "9px")
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("Caddaford orchard")
  .attr("x", location_1Arr[0])
  .attr("y", location_1Arr[1]);
svg
  .append("text")
  .style("opacity", 0.6)
  .style("font-size", "9px")
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("Wooded area near stream and reservoir")
  .attr("x", location_2Arr[0])
  .attr("y", location_2Arr[1]);
svg
  .append("text")
  .style("opacity", 0.6)
  .style("font-size", "9px")
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("Torr Hill North")
  .attr("x", location_3Arr[0])
  .attr("y", location_3Arr[1]);
//4?
svg
  .append("text")
  .style("opacity", 0.6)
  .style("font-size", "9px")
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("Green Lane")
  .attr("x", location_4Arr[0])
  .attr("y", location_4Arr[1]);
svg
  .append("text")
  .style("opacity", 0.6)
  .style("font-size", "9px")
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("Kiln close Orchard Hedge")
  .attr("x", location_5Arr[0])
  .attr("y", location_5Arr[1]);
svg
  .append("text")
  .style("opacity", 0.6)
  .style("font-size", "9px")
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("newly planted hedge")
  .attr("x", location_6Arr[0])
  .attr("y", location_6Arr[1]);
svg
  .append("text")
  .style("opacity", 0.6)
  .style("font-size", "9px")
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("Fence line adjacent to wooded stream")
  .attr("x", location_7Arr[0])
  .attr("y", location_7Arr[1]);
svg
  .append("text")
  .style("opacity", 0.6)
  .style("font-size", "9px")
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("Agroforestry near to wooded valley")
  .attr("x", location_8Arr[0])
  .attr("y", location_8Arr[1]);
svg
  .append("text")
  .style("opacity", 0.6)
  .style("font-size", "9px")
  .attr("font-family", "Arial")
  .style("fill", "white")
  .text("Wooded stream")
  .attr("x", location_9Arr[0])
  .attr("y", location_9Arr[1]);

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
// makeLegend(svg, width, height);
// makeHorzKey(svg);
makeAltKey(svg);

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
var simulation = {};
//
function makeNodes(_actualData) {
  var numNodes = 100; //circles (nodes) per location (xCenter,yCenter) 10x10
  var _key = 0;
  var _nodes = d3.range(numNodes).map(function (d, i) {
    if (i % 10 == 0) {
      _key = i / 10;
    }
    return {
      radius:
        (_actualData[_key].results[i % 10].count / _actualData[_key].days) *
        radiusFactor,
      category: _key, //grouping by _key - location
      color: i % 10,
    };
  });
  return _nodes;
}
var radiusScale = d3.scaleSqrt().domain([0, 40]).range([5, 30]);
var xScale = d3.scaleSqrt().domain([0, 40]).range([5, 300]);
function updateCircleDisplay(_newData) {
  //_newData = nodes
  var newNodes = makeNodes(_newData);
  /*
  // simulation.restart();
  // simulation.alpha(0.5).alphaTarget(0.3).restart();
  simulation.force("x").initialize(newNodes);
  // simulation.force("x").data(newNodes);
  // simulation.force("y").initialize(newNodes);
  simulation.force("collide").initialize(newNodes);
  // simulation.force("collide").data(newNodes);

  blobs
    .data(newNodes)
    .transition()
    .duration(1000)
    .attr("x", function (d) {
      return xScale(d.x);
    })
    .attr("r", function (d) {
      return radiusScale(d.radius);
      // return d.radius;
    });
*/

  var newCircleSelection = d3
    .select("svg g")
    .selectAll(".infocircle")
    .data(newNodes);
  // console.log(">>>newNodes: ", nodes);
  newCircleSelection.exit().remove();

  var newCircleEnter = newCircleSelection
    .enter()
    .append("circle")
    .attr("class", "infoCircle")
    .attr("r", function (d) {
      return d.radius;
    })
    .attr("cx", function (d, i) {
      return i * 20;
    });
  // .attr("cy", function (d) {
  //   return d.y;
  // });

  newCircleSelection
    .merge(newCircleEnter)
    .transition()
    .duration(1000)
    .attr("r", function (d) {
      return d.radius;
    });
  // .attr("cx", function (d, i) {
  //   return i * 20;
  // })
  // .attr("cy", function (d) {
  //   return d.y;
  // });
}
//simulation - cluster code
var blobs = {};
function makeCircleDisplay(_actualData) {
  nodes = makeNodes(_actualData);
  // console.log(">>>nodes::", nodes);

  //BUILD CIRCLES////////////////////
  console.log(">>>startNodes: ", nodes);
  simulation = d3
    .forceSimulation(nodes)
    // .force("charge", d3.forceManyBody().strength(5))
    .force(
      "x",
      d3.forceX().x(function (d, i) {
        // return mapCircles[d.category].x;
        return geoLocations[d.category][0];
      })
    )
    .force(
      "y",
      d3.forceY().y(function (d, i) {
        // return mapCircles[d.category].y;
        return geoLocations[d.category][1];
      })
    )
    .force(
      "collide",
      d3.forceCollide().radius(function (d) {
        // return radiusScale(d.radius);
        return d.radius;
      })
    )
    .on("tick", ticked);

  function ticked() {
    //blobs
    console.log(">>>finalNodes: ", nodes);
    blobs = d3
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
      .style("opacity", "0.4")
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
        // console.log("--> ", d);
        showTooltip(d);
      })
      .on("mouseleave", function (d, i) {
        hideTooltip();
      });
  }
}

makeCircleDisplay(actualData);

d3.select("#change2023").on("click", function () {
  updateCircleDisplay(testData);
  // makeCircleDisplay(testData);
});
d3.select("#change2022").on("click", function () {
  updateCircleDisplay(actualData);
});

svg.on("mousemove", function (d, i) {
  console.log(">>>>> ", d3.mouse(this));
  var coordinates = [];
  coordinates = d3.mouse(this);
  let tx = d3.event.x;
  let zf = d3.zoomTransform(this);

  updateToolTip(tx, coordinates[0], coordinates[1], zf.k, zf.x, zf.y);
});

//////////////////////////////
