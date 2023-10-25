//DRAW geoJson background features
function update(geojson, _type) {
  let uu = background.selectAll("path").data(geojson.features);

  uu.enter()
    .append("path")
    .attr("d", geoGenerator)
    .attr("stroke-width", function (d) {
      return d.properties.strokewidth;
    })
    .attr("style", function (d) {
      if (_type == "hedges") {
        // return "fill: rgba(251, 192, 147,0.3)";
        return "stroke: rgba(127, 143, 143,0.8); fill:none";
        // return "fill: rgba(251, 192, 147,0.3) ";
      } else {
        return "fill:" + d.properties.fill;
      }
    })
    // .attr("fill", function (d) {
    //   return "fill:" + d.properties.fill;
    // })
    .attr("stroke", function (d) {
      return d.properties.stroke;
    });
}
