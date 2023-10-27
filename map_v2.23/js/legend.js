//legend
// The scale you use for bubble size
function makeLegend(_svg, _width, _height) {
  var size = d3
    .scaleSqrt()
    .domain([1, 10]) // What's in the data, let's say it is percentage
    .range([1, 10]); // Size in pixel
  // Add legend: circles
  var valuesToShow = [10, 40, 80];
  var xCircle = _width - 180;
  var xLabel = _width - 280;
  var yCircle = _height - 50;
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
    .attr("x2", xLabel - 60)
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
    .attr("x", xLabel - 100)
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
    .attr("x", xCircle - 200)
    .attr("y", 610)
    .attr("font-family", "Arial")
    .text("Legend - Circle Size ");
}

function makeAltKey(_svg) {
  //title

  //
  var startX = 30;
  var startY = 600;
  var horX = 50; //unit spacing
  // var vertY = height - 200;

  _svg
    .append("text")
    .attr("x", startX)
    .attr("y", startY)
    .attr("font-family", "Arial")
    .style("font-size", "15px")
    .style("fill", "white")
    .text("Key");
  // .text("Totals [ needs work!! ]");

  var totalsFactor = 4;
  for (i = 0; i < media_assets.length; i++) {
    // console.log(">>>>>>>>>>>>> ", media_assets[i].totals);
    _svg
      .append("circle")
      .attr("id", "keyCircle_" + i)
      .attr("cx", startX + 20 + horX * i)
      .attr("cy", startY + 30)
      .attr("r", 15)
      .style("fill", media_assets[i].col)
      .attr("opacity", "0.7")
      .attr("stroke", "white");
    // var rotateX = startX + 20 + 50 * i;
    // var rotateY = horY;
    // console.log(">>>>> raduii >>>> ", media_assets[i].totals / totalsFactor);
    // horX = horX + media_assets[i].totals / totalsFactor;
    keyCircleArr.push(startX + 20 + horX * i); //utils
    // horX = horX + media_assets[i].totals / totalsFactor;
    // keyCircleArr.push(startX + media_assets[i].totals);
    _svg
      .append("text")
      .attr("x", startX + 20 + horX * i)
      .attr("y", startY + 30 + 30)
      .attr("text-anchor", "start")
      .attr("font-family", "Arial")
      .style("font-size", "9px")
      .style("fill", "white")
      .attr("class", "keyLable")
      .text(media_assets[i].name)
      // .text(media_assets[i].name + " Total: " + media_assets[i].totals)
      .call(wrap, 70);
  }

  // _svg.selectAll(".keyLabel").attr("transform", "translate(0,0)rotate(45)");
}
