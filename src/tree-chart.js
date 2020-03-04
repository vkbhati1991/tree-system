
var jsondata = [{
  "displayName": "P",
  "image": "xyz",
  "urlPath": "http://google.com",
  "isActive": "true",
  "relationship": [
    {
      "displayName": "W1",
      "image": "xyz",
      "urlPath": "http://google.com",
      "isActive": "true",
      "other": "true",
      "children": [
        {
          "displayName": "C1",
          "image": "xyz",
          "urlPath": "http://google.com",
          "isActive": "false",
          "other": "false"
        },
        {
          "displayName": "C2",
          "image": "xyz",
          "urlPath": "http://google.com",
          "isActive": "false",
          "other": "false"
        },
        {
          "displayName": "C2",
          "image": "xyz",
          "urlPath": "http://google.com",
          "isActive": "false",
          "other": "false"
        }
      ]
    },
    {
      "displayName": "W1",
      "image": "xyz",
      "urlPath": "http://google.com",
      "isActive": "true",
      "other": "true",
      "children": [
        {
          "displayName": "C1",
          "image": "xyz",
          "urlPath": "http://google.com",
          "isActive": "false",
          "other": "false"
        }
      ]
    }
  ]
}]

var margin = [10, 20, 20, 24];
var height = 600 - margin[0] - margin[2];
var width = 800 - margin[0] - margin[2]
var root = jsondata;
var i = 0;
var halfWidth = width / 2;
var duration = 300;
var nodeHeight = 40;
var nodeWidth = 80;
var nodeAdjust = nodeWidth/2;
var xAxisGap = 30;
var yAxisGap = 80;



//create a tree

var svgGrapgh = d3.select(body).append("svg")
  .attr("height", height)
  .attr("width", width)
  .style("border", "1px solid #000")
  .style("background-color", "lightyellow");
  var svgGrapgG = svgGrapgh.append("g")
  .attr("transform", "translate(" + margin[3] + "," + margin[0] + ")");;


updateSvg(root);

function createNode(node, xPos, yPos) {

  var nodeEnter = node.enter().append("g")
    .attr("class", "node")
    .attr("fill", "red")
    .attr("transform", "translate(" + xPos + "," + yPos + ")")
    .on("click", function (d) { updateSvg(d); });

  nodeEnter.append("svg:rect")
    .attr("height", nodeHeight)
    .attr("width", nodeWidth)
    .attr("stroke", "#00a99d")
    .attr("stroke-width", "1")
    .attr("rx", 5)
    .attr("x", -(nodeWidth/2))
    .attr("y", -(nodeHeight/2))
    .style("fill", "#fff");

}


function getXAxis(relationship) {
  return relationship.length;
}

function updateSvg(source) {

  var node = svgGrapgG.selectAll("g").data(source);

  var depthGroupOne = svgGrapgG.append("g");

  var nodeDepthOne = depthGroupOne.selectAll("g").data(source);

  var nodeLength = getXAxis(source[0].relationship);

  var xPositon = width / ((nodeLength + 1) * 2);

  //var constantPos = xPositon;

  //render
  createNode(nodeDepthOne, xPositon, 50);
  
  source[0].relationship.forEach((n, j) => {
    var constantPos = xPositon * (j + (j + 3));

    createNode(nodeDepthOne, (constantPos - 25), 50);

    if (n.children) {
      var nodeLength1 = getXAxis(n.children);

      var constantPosChild = ((width / nodeLength) / (nodeLength1 * 2));
      n.children.forEach((n, i) => {
        var p = ((width / nodeLength) * j) + constantPosChild * (i + (i + 1));
        createNode(node, (p - 25), 150);
      });
    }
  })


};
