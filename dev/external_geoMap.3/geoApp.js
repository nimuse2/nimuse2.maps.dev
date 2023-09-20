let projection = d3
  .geoMercator()
  .scale(1500000) //400
  .translate([200, 280])
  .center([-3.7373521109426804, 50.473602050689635]); //0,5

let geoGenerator = d3.geoPath().projection(projection);
/*
function handleMouseover(e, d) {
  let pixelArea = geoGenerator.area(d);
  let bounds = geoGenerator.bounds(d);
  let centroid = geoGenerator.centroid(d);
  let measure = geoGenerator.measure(d);

  d3.select("#content .info").text(
    d.properties.name +
      " (path.area = " +
      pixelArea.toFixed(1) +
      " path.measure = " +
      measure.toFixed(1) +
      ")"
  );

  d3.select("#content .bounding-box rect")
    .attr("x", bounds[0][0])
    .attr("y", bounds[0][1])
    .attr("width", bounds[1][0] - bounds[0][0])
    .attr("height", bounds[1][1] - bounds[0][1]);

  d3.select("#content .centroid")
    .style("display", "inline")
    .attr("transform", "translate(" + centroid + ")");
}
*/

function update(geojson) {
  let u = d3.select("#content g.map").selectAll("path").data(geojson.features);

  u.enter()
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
