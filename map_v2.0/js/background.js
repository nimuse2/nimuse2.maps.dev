function makeBackground(_svg, _w, _h) {
  cRad = [200, 400, 600, 800];

  for (i = 0; i < cRad.length; i++) {
    _svg
      .append("circle")
      .attr("cx", "50%")
      .attr("cy", "50%")
      .attr("r", cRad[i])
      .attr("class", "zoomCircle")
      .attr("stroke", "rgba(100, 100, 100,0.4)")
      .attr("fill", "none");
  }
  //lines
  _svg
    .append("line")
    .style("stroke", "rgba(100, 100, 100,0.4)")
    .attr("class", "zoomCircle")
    .attr("x1", 0)
    .attr("y1", _h / 2)
    .attr("x2", _w)
    .attr("y2", _h / 2);
  _svg
    .append("line")
    .attr("class", "zoomCircle")
    .style("stroke", "rgba(100, 100, 100,0.4)")
    .attr("x1", _w / 2)
    .attr("y1", 0)
    .attr("x2", _w / 2)
    .attr("y2", _h);
  // _svg
  //   .append("text")
  //   .attr("x", 20)
  //   .attr("y", 20)
  //   .attr("font-family", "Arial")
  //   .style("font-size", "16px")
  //   .style("fill", "white")
  //   // .attr("fill", "none")
  //   .text(
  //     "Bat Sonic Map v.1.2. Showing Bat activity in 1500m radius around Wash Farm, Buckfastleigh"
  //   );
  _svg
    .append("text")
    .attr("class", "zoomCircle")
    .attr("x", _w / 2 + (17 / 100) * _w)
    .attr("y", _h / 2)
    .attr("font-family", "Arial")
    .style("font-size", "16px")
    .style("fill", "white")
    .text("500m");
  _svg
    .append("text")
    .attr("class", "zoomCircle")
    .attr("x", _w / 2 + (34 / 100) * _w)
    .attr("y", _h / 2)
    .attr("font-family", "Arial")
    .style("font-size", "16px")
    .style("fill", "white")
    .text("1000m");
  _svg
    .append("text")
    .attr("class", "zoomCircle")
    .attr("x", _w / 2 + (51 / 100) * _w)
    .attr("y", _h / 2)
    .attr("font-family", "Arial")
    .style("font-size", "16px")
    .style("fill", "white")
    .text("1500m");
}
