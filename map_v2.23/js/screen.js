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
        // console.log(">>-->>", d3.select(this.childNode));
        // console.log("--> ", d);
        // console.log(">>>-->>", d.key);
        // console.log(">>>-->>", d3.select("" + d.key));
        // var elem = d3.select("#2_4");
        // elem.attr("fill", "black");
        // console.log(">>>", elem);

        showBatTooltip(d);
        // showTooltip(d);
      })
      .on("mouseleave", function (d, i) {
        hideTooltip();
      })
      .on("click", function (d, i) {
        playSound(d, i);
      });
    /*
    labels
      .attr("x", function (d) {
        return d.x;
      })
      .attr("y", function (d) {
        return d.y + 5;
      });
      */
  }
  //mouse move
  svg.on("mousemove", function (d, i) {
    var coordinates = d3.mouse(this);
    // console.log(">>->>", this);
    // var elem1 = document.elementFromPoint(coordinates[0], coordinates[1]);
    // console.log("--> ID::", d3.event);
    let tx = d3.event.x;
    let zf = d3.zoomTransform(this);
    // var selection = d3.select(this);
    // console.log(selection.node());
    // later via the selection you can retrieve the element with .node()
    // var elt = selection.node();
    // console.log(document.elementFromPoint(coordinates[0], coordinates[1])
    // console.log("event r:: ", d3.event.r);

    updateToolTip(tx, coordinates[0], coordinates[1], zf.k, zf.x, zf.y);
  });
}

function updateCircleDisplay(_updateData, _year) {
  //UPDATE INDIVIUAL VALUES HERE////
  updateData(_updateData, _year);
  /*
  for (i = 0; i < data.length; i++) {
    //CHANGE TO NEW DATA SET/////
    //leave data as it is
    //update values
    data[i].count = Math.floor(Math.random() * 30);
  }
  */
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
  // .attr("fill", function (d) {
  //   return colorScale(d.count);
  // });
}

//make text
function makeText() {
  //info text
  // svg
  //   .append("text")
  //   // .style("opacity", 0.6)
  //   .attr("font-family", "Arial")
  //   .attr("font-size", "11px")
  //   .style("fill", "white")
  //   .text(
  //     "Introduction: This is a map showing the Bat Data collected between Aug. 2022 and Oct. 2022.  If you roll obver the circles you can find out diferent information about the Bats. If you click on the circles you will hear the Bat noises collected at the different locations. The size of the circles indicates the total number of Bats recorded during this period. The frequencies they use are interesting [LINK TO MORE SOUND INFO.]"
  //   )
  //   .attr("x", 30)
  //   .attr("y", 200)
  //   .call(wrap, 190);
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
