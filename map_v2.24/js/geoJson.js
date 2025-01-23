//DRAW geoJson background features
function updateHabitat(geojson, _type) {
  let uh = habitat.selectAll("path").data(geojson.features);
  // console.log("HABITAT");
  uh.enter()
    .append("path")
    .attr("d", geoGenerator)
    .attr("stroke-width", function (d) {
      return d.properties.strokewidth;
    })
    .attr("style", function (d) {
      return "opacity:0.3; fill:" + d.properties.fill;
      // return "fill: #8dd3c7; opacity:0.1;";
    })
    .attr("stroke", function (d) {
      return d.properties.stroke;
    })
    .attr("class", "infocircle")
    .on("mouseover", function (d) {
      var coordinates = d3.mouse(this);
      showHabitatTooltip(d, coordinates[0], coordinates[1]);
    })
    .on("mouseleave", function (d, i) {
      hideTooltip();
    });
}
function updateFootprint(geojson, _type) {
  let un = footprint.selectAll("path").data(geojson.features);

  un.enter()
    .append("path")
    .attr("d", geoGenerator)
    .attr("stroke-width", function (d) {
      return d.properties.strokewidth;
    })
    .attr("style", function (d) {
      // return "fill:" + d.properties.fill;
      return "fill: #8dd3c7; opacity:0.1;";
    })
    .attr("stroke", function (d) {
      return d.properties.stroke;
    });
}
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
  let ul = midbackground.selectAll("path").data(geojson.features);

  ul.enter()
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
