//DRAW geoJson background features
function update(geojson) {
  let uu = svg.selectAll("path").data(geojson.features);

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
