//legend
// The scale you use for bubble size
function makeLegend(_svg, _width, _height) {
  var size = d3
    .scaleSqrt()
    .domain([1, 100]) // What's in the data, let's say it is percentage
    .range([1, 100]); // Size in pixel
  // Add legend: circles
  var valuesToShow = [10, 40, 80];
  var xCircle = 100;
  var xLabel = 280;
  var yCircle = _height - 40;
  _svg
    .selectAll("legend")
    .data(valuesToShow)
    .enter()
    .append("circle")
    .attr("cx", xCircle)
    .attr("cy", function (d) {
      return yCircle - size(d);
    })
    .attr("r", function (d) {
      return size(d);
    })
    .style("fill", "none")
    .attr("font-family", "Arial")
    .attr("stroke", "white");

  // Add legend: segments
  _svg
    .selectAll("legend")
    .data(valuesToShow)
    .enter()
    .append("line")
    .attr("x1", function (d) {
      return xCircle + size(d);
    })
    .attr("x2", xLabel)
    .attr("y1", function (d) {
      return yCircle - size(d);
    })
    .attr("y2", function (d) {
      return yCircle - size(d);
    })
    .attr("stroke", "white")

    .style("stroke-dasharray", "2,2");

  // Add legend: labels
  _svg
    .selectAll("legend")
    .data(valuesToShow)
    .enter()
    .append("text")
    .attr("x", xLabel)
    .attr("y", function (d) {
      return yCircle - size(d);
    })
    .text(function (d) {
      return Math.floor(d * 0.7) + " bats";
    })
    .style("font-size", "11px")
    .style("fill", "white")
    .attr("font-family", "Arial")
    .attr("alignment-baseline", "middle");
  _svg
    .selectAll("legend")
    .data(valuesToShow)
    .enter()
    .append("text")
    .style("fill", "white")
    .attr("x", 30)
    .attr("y", _height - 230)
    .attr("font-family", "Arial")
    .text("Legend - Circle Size ");
}

function makeKey(_svg) {
  //title
  _svg
    .append("text")
    .attr("x", 360)
    .attr("y", height - 230)
    .attr("font-family", "Arial")
    .style("font-size", "15px")
    .style("fill", "white")
    .text("Key");
  //
  var startX = 360;
  var horX = 50;
  var vertY = height - 80;

  for (i = 0; i < soundProps.length; i++) {
    _svg
      .append("circle")
      .attr("cx", startX + 20 + horX * i)
      .attr("cy", height - 80)
      .attr("r", 15)
      .style("fill", soundProps[i].col)
      .attr("stroke", "white");
    var rotateX = startX + 20 + 50 * i;
    // var rotateY = horY;
    _svg
      .append("text")
      .attr("x", 0)
      .attr("y", 0)
      .attr("text-anchor", "start")
      .attr("font-family", "Arial")
      .style("font-size", "15px")
      .style("fill", "white")
      .attr("class", "keyLable")
      .attr(
        "transform",
        "translate(" + rotateX + "," + (height - 100) + ")rotate(-45)"
      )
      // .attr("transform", "translate(0," + height - 400 + ")")
      // .attr("transform", "rotate(-65)")
      .text(soundProps[i].name);
  }
  // _svg.selectAll(".keyLabel").attr("transform", "translate(0,0)rotate(45)");
}
