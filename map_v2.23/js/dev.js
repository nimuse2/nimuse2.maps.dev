//remove from final/////////////////////////////////

//d3 projections

// var lambda = d3.scaleLinear().domain([0, width]).range([-180, 180]);
// var phi = d3.scaleLinear().domain([0, height]).range([90, -90]);

// .geoConicEqualArea() //nice
// .geoAlbers() //nice
// .geoEquiRectangular()
// .geoNaturalEarth1()
// .geoIdentity()
// .reflectY(true)
// .fitSize([width, height], apiData);
// .precision(0.3);
//d3 mercantile function

/*
var projection = d3
  .geoMercator()
  .center([50.4736996, -3.7428512])
  .scale(600000) //700000-smaller - 1900000 - bigger
  // .rotate([0, 0, 90])
  .translate([width / 2, height / 2]);
  */
/*
  .scale(width / 2.5 / Math.PI)
  
  .center([20, 20])
  .translate([width / 2, height / 2]);
  */
/*
  
  */
//update via geo-mercantile
// console.log("x: ", xCenter);
// console.log("y: ", yCenter);
//
/*Create and place the "blocks" containing the circle and the text */
/*
var svgContainer = d3
  .select("body")
  .append("svg")
  .attr("width", 800)
  .attr("height", 600);
var circles = svgContainer //main
  .selectAll("circle")
  .data(mapCircles)
  .enter()
  .append("circle");
var circleAttributes = circles
  .attr("cx", function (d) {
    return d.x;
  })
  .attr("cy", function (d) {
    return d.y;
  })
  .attr("r", 5)
  .attr("stroke", "black")
  .attr("fill", "none");
svgContainer
  .append("text")
  .attr("dx", function (d) {
    return -20;
  })
  .text(function (d) {
    return "test";
  });
*/
/*
var b = d3
  .select("svg")
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 20)
  .attr("stroke", "black")
  .attr("fill", "none");
*/
// elemEnter3
//   .append("text")
//   .attr("dx", function (d) {
//     return -15;
//   })
//   .attr("font-family", "Arial")
//   .style("font-size", "10px")
//   .style("fill", "white")
//   // .attr("fill", "none")
//   .text(function (d) {
//     return d.name;
//   });

//elem 3
//polar keys
// let xRange = [0, 0, 0, 0];
// let xfactor = 4;
/*
x = windowWidth / 2;
  y = windowHeight / 2;

  // vert/horizontal
  stroke("rgba(100, 100, 100,0.4)");
  line(x, 0, x, windowHeight);
  line(0, y, windowWidth, y);
  text("500m", x + (x * 28) / 100, y - 5);
  text("1000m", x + (x * 53) / 100, y - 5);
  text("1500m", x + (x * 78) / 100, y - 5);

  xRange.forEach((o, i) => {
    o = d + (i * windowWidth) / xfactor;
    noFill();
    stroke("rgba(100, 100, 100,0.4)");
    circle(x, y, o);
  });
*/

// var elem3 = svg.selectAll("g3");
// var elemEnter3 = elem3.append("g");

//wash
//BACKGROUND
//circles
