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
    .text("Legend - Main Map circles");
}
function updateDynamic(_d) {
  // data1 = data2;
  // console.log("updateDynamic");
  for (i = 0; i < species_assets.length; i++) {
    svg
      .select("#keyCircle_" + i)
      // .data(data2)
      // .exit()
      .transition()
      .duration(800)
      .attr("r", radiusScale(_d[i].r / 2));

    svg.select("#keyLable_" + i).text(_d[i].r);
  }
}

function makeDynamicKey(_svg) {
  //title

  //
  var startX = 30;
  var startY = 600;
  var horX = 60; //unit spacing
  // var vertY = height - 200;

  _svg
    .append("text")
    .attr("x", startX)
    .attr("y", startY - 20)
    .attr("font-family", "Arial")
    .style("font-size", "15px")
    .style("fill", "white")
    .text("Survey Totals " + year + " (Click to link to BCT info.)");
  // .text("Totals [ needs work!! ]");

  var totalsFactor = 4;

  for (i = 0; i < species_assets.length; i++) {
    // console.log(">>>>>>>>>>>>> ", species_assets[i].totals);

    _svg
      .append("a")
      .attr("xlink:href", "" + species_assets[i].external_link)
      .append("circle")
      .attr("class", "kCirc")
      .attr("id", "keyCircle_" + i)
      .attr("cx", startX + 20 + horX * i)
      .attr("cy", startY + 30)
      // .attr("r", function (d) {
      //   console.log(d);
      //   return radiusScale(d);
      // })
      .attr("r", radiusScale(totalCount22[i].r / 2))
      // .attr("r", radiusScale(species_assets[i].totals / 3))
      .style("fill", species_assets[i].col)
      .attr("opacity", "0.7")
      .on("mouseover", function (d) {
        d3.select(this).attr("opacity", "1");
      })
      .on("mouseleave", function (d, i) {
        d3.select(this).attr("opacity", "0.7");
      })
      .attr("stroke", "white");
    // .attr("xlink:href", "http://example.com");
    // var rotateX = startX + 20 + 50 * i;
    // var rotateY = horY;
    // console.log(">>>>> raduii >>>> ", species_assets[i].totals / totalsFactor);
    // horX = horX + species_assets[i].totals / totalsFactor;

    keyCircleArr.push(startX + 20 + horX * i); //utils
    // horX = horX + species_assets[i].totals / totalsFactor;
    // keyCircleArr.push(startX + species_assets[i].totals);
    _svg
      .append("text")
      .attr("x", startX + horX * i)
      .attr("y", startY + 50 + 30)
      .attr("text-anchor", "start")
      .attr("font-family", "Arial")
      .style("font-size", "11px")
      .style("fill", "white")
      .attr("class", "keyLable")
      // .text(species_assets[i].name)
      .text(species_assets[i].name)
      .call(wrap, 65);
    _svg
      .append("text")
      .attr("x", startX + horX * i)
      .attr("y", startY + 50 + 30 + 30)
      .attr("text-anchor", "start")
      .attr("font-family", "Arial")
      .style("font-size", "13px")
      .style("fill", "white")
      .attr("class", "keyLable")
      .attr("id", "keyLable_" + i)
      // .text(species_assets[i].name)
      // .text("Totals: " + species_assets[i].totals)
      .text("" + totalCount22[i].r)
      .call(wrap, 70);
  }

  // _svg.selectAll(".keyLabel").attr("transform", "translate(0,0)rotate(45)");
}
