/* screen related stuff */
//loaded last
//update to dynamic?
var width = 1280,
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

  circles = svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", function (d, i) {
      return radiusScale(d.count);
    })
    .attr("fill", function (d, i) {
      return colorScale(d.count);
    })
    .attr("opacity", 0.8);

  labels = svg
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
}

function updateCircleDisplay() {
  //UPDATE INDIVIUAL VALUES HERE////
  for (i = 0; i < data.length; i++) {
    data[i].count = Math.floor(Math.random() * 30);
  }
  simulation.alpha(0.5).alphaTarget(0.3).restart();

  simulation.force("x").initialize(data);
  simulation.force("y").initialize(data);
  simulation.force("collide").initialize(data);

  circles
    .transition()
    .duration(800)
    .attr("r", function (d) {
      return radiusScale(d.count);
    })
    .attr("fill", function (d) {
      return colorScale(d.count);
    });
}
