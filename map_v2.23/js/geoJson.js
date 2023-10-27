//DRAW geoJson background features
function updateBack(geojson, _type) {
  let uu = background.selectAll("path").data(geojson.features);

  uu.enter()
    .append("path")
    .attr("d", geoGenerator)
    .attr("stroke-width", function (d) {
      return d.properties.strokewidth;
    })
    .attr("style", function (d) {
      return "fill:" + d.properties.fill;
    })
    .attr("stroke", function (d) {
      return d.properties.stroke;
    });
}
function updateMidBack(geojson, _type) {
  let uu = midbackground.selectAll("path").data(geojson.features);

  uu.enter()
    .append("path")
    .attr("d", geoGenerator)
    .attr("stroke-width", function (d) {
      return d.properties.strokewidth;
    })
    .attr("style", function (d) {
      return "fill:" + d.properties.fill;
    })
    .attr("stroke", function (d) {
      return d.properties.stroke;
    });
}
function updateMid(geojson, _type) {
  let um = midground.selectAll("path").data(geojson.features);

  um.enter()
    .append("path")
    .attr("d", geoGenerator)
    .attr("stroke-width", function (d) {
      return d.properties.strokewidth;
    })
    .attr("style", function (d) {
      return "stroke: rgba(0, 0, 0,0.9); fill:none";
    });
}
