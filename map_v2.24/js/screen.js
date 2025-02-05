/* screen related stuff */
//loaded last
//update to dynamic?
var width = 1380,
  height = 720;

//BUILD MAIN CIRCLES
function makeCircleDisplay() {
  simulation = d3
    .forceSimulation()
    .force(
      "x",
      d3
        .forceX(function (d, i) {
          return d.long;
        })
        .strength(0.05)
    )
    .force(
      "y",
      d3
        .forceY(function (d, i) {
          return d.lat;
        })
        .strength(0.05)
    )
    .force(
      "collide",
      d3.forceCollide().radius(function (d, i) {
        return radiusScale(d.count);
      })
    );

  circles = foreground
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", function (d, i) {
      return radiusScale(d.count);
    })
    .attr("fill", function (d, i) {
      // return colorScale(d.count);
      var splitKey = d.key.split("_");
      // return rgbColor[splitKey[1]];
      return set3col[splitKey[1]];
    })
    .attr("opacity", 0.7);

  labels = foreground
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("font-size", "9px")
    .text(function (d) {
      return d.name;
    })
    .style("text-anchor", "middle");

  simulation.nodes(data).on("tick", ticked);

  function ticked() {
    //writing to screen
    circles
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      })
      .attr("class", "infocircle")
      .attr("id", function (d) {
        return d.key;
      })
      .on("mouseover", function (d) {
        showBatTooltip(d);
        // showTooltip(d);
      })
      .on("mouseleave", function (d, i) {
        hideTooltip();
      })
      .on("click", function (d, i) {
        playSound(d, i);
      });
  }
  //mouse move
  svg.on("mousemove", function (d, i) {
    var coordinates = d3.mouse(this);

    let tx = d3.event.x;
    let zf = d3.zoomTransform(this);

    updateToolTip(tx, coordinates[0], coordinates[1], zf.k, zf.x, zf.y);
  });
}

function updateCircleDisplay(_updateData, _year) {
  //UPDATE INDIVIUAL VALUES HERE////
  updateData(_updateData, _year);

  simulation.alpha(0.5).alphaTarget(0.3).restart();

  simulation.force("x").initialize(data);
  simulation.force("y").initialize(data);
  simulation.force("collide").initialize(data);

  circles
    .transition()
    .duration(800)
    .attr("r", function (d) {
      return radiusScale(d.count);
    });
}

//make text
function makeText() {
  //info text

  //title text
  svg
    .append("text")
    // .style("opacity", 0.8)
    .attr("font-family", "Arial")
    .attr("font-size", "14px")
    .style("fill", "rgba(255,255,255,0.9)")
    .text(
      "Methodology Note: Due to the amount of variables now in the 3 year Analysis the accuracy of the individual recordings needs further testing"
    )
    .attr("x", 50)
    .attr("y", 100)
    .call(wrap, 200);

  //note text
  svg
    .append("text")
    // .style("opacity", 0.8)
    .attr("font-family", "Arial")
    .attr("font-size", "11px")
    .style("fill", "rgba(255,255,255,0.9)")
    .text(
      "*All Numbers are Average Bat calls per night. Data collected during period of May to August recorded using Anabat Recorder placed at different locations around the site."
    )
    .attr("x", width - 220)
    .attr("y", 640)
    .call(wrap, 200);

  //big text
  for (i = 0; i < locationLabelList.length; i++) {
    svg
      .append("text")
      // .style("opacity", 0.8)
      .attr("font-family", "Arial")
      .attr("font-size", "14px")
      .style("fill", "rgba(255,255,255,0.7)")
      .text(locationNameList[i])
      .attr("x", locationLabelList[i][0])
      .attr("y", locationLabelList[i][1]);
  }
  //small text
  for (i = 0; i < smlLocationLabelList.length; i++) {
    svg
      .append("text")
      // .style("opacity", 0.8)
      .attr("font-family", "Arial")
      .attr("font-size", "9px")
      .style("fill", "rgba(255,255,255,0.6)")
      .text(smlLocationNameList[i])
      .attr("x", smlLocationLabelList[i][0])
      .attr("y", smlLocationLabelList[i][1]);
  }
}
