var json_data = {
  "name": "Root",
  "img": "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg",
  "children": [
    {
      "name": "Interactive tools",
      "img": "",
      "free": true,
      "description": "Interactive authoring tools",
      "children": [
        {
          "name": "Browser-based",
          "img": "data:image/jpeg;base64,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",
          "description": "Web-based 'cloud' applications for authoring data visualisations",
          "free": true,

        },
        {
          "name": "Desktop",
          "img": "data:image/jpeg;base64,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",
          "children": [
            {
              "name": "Tableau Desktop",
              "img": "data:image/jpeg;base64,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",
              "description": "Powerful tool for data analytics and visualisation",
              "url": "http://www.tableausoftware.com/products/desktop"
            },
            {
              "name": "Tableau Public",
              "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRylAIJU0zXHpjqJyeEor0Z-oM18RqUmPR-HSXySwJgCsVzvuJp",
              "description": "Free version of Tableau Desktop where charts are public",
              "url": "http://www.tableausoftware.com/products/public",
              "free": true
            }
          ]
        }
      ]
    },
    {
      "name": "Other",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHzkucWOorUVdVIRmf373jkmWjEmLGUxl32iX9QvmF7WLy8o9P",
      "description": "Non-JavaScript languages for producing web-based data visualisations",
      "free": true
    },
    {
      "name": "Coding",
      "description": "Code-based data visualisation creation",
      "free": true,
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9u6TCHl0dJUiFHgK2VDGzEyE7vvPoSwq6jGl9JSsLK2dsJULr",
      "children": [
        {
          "name": "JavaScript",
          "description": "The language behind most (all?) browser-based data visualisations",
          "free": true,
          "children": [
            {
              "name": "Charting libraries",
              "description": "Off-the-shelf pre-designed charts. Easy to use but less flexible.",
              "free": true

            },
            {
              "name": "Custom coded",
              "description": "For maximum flexibility, custom coding is the way to go. These libraries will lend a hand.",
              "free": true

            },
            {
              "name": "Custom coded",
              "description": "For maximum flexibility, custom coding is the way to go. These libraries will lend a hand.",
              "free": true

            }
          ]
        },
        {
          "name": "Other",
          "description": "Non-JavaScript languages for producing web-based data visualisations",
          "free": true
        },
        {
          "name": "Other",
          "description": "Non-JavaScript languages for producing web-based data visualisations",
          "free": true
        },
      ]
    }
  ]
}


function opacitFun(){
  alert();
}

var m = [40, 120, 20, 20],
  w = 1280 - m[1] - m[3],
  h = 800 - m[0] - m[2],
  i = 0,
  root;


var tree = d3.layout.tree()
.separation(function(a, b) { return a.children === b.children ? 1 : 1.2; })
.children(function(d) { return d.children; })
  .size([h, w]);


function drawStepPath(d) {
  const { source, target } = d
  return `M${d.source.x},${d.source.y}V${d.target.y}H${d.target.x}`
}


// var diagonal = d3.svg.diagonal()
//   .projection(function (d) { return [d.x, d.y]; });

var vis = d3.select("#body").append("svg:svg")
  .attr("width", w + m[1] + m[3])
  .attr("height", h + m[0] + m[2])
  .append("svg:g")
  .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

root = json_data;
root.x0 = h / 2;
root.y0 = 0;

function toggleAll(d) {
  if (d.children) {
    d.children.forEach(toggleAll);
    toggle(d);
  }
}

// Initialize the display to show a few nodes.
// root.children.forEach(toggleAll);
// toggle(root.children[1]);
// toggle(root.children[1].children[2]);
// toggle(root.children[9]);
// toggle(root.children[9].children[0]);

update(root);

function update(source) {
  var duration = d3.event && d3.event.altKey ? 300 : 300;

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse();

  // Normalize for fixed-depth.
  nodes.forEach(function (d) { d.y = d.depth * 180; });

  // Update the nodes…
  var node = vis.selectAll("g.node")
    .data(nodes, function (d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("svg:g")
    .attr("class", "node")
    .attr("fill", "red")
    .attr("transform", function (d) { return "translate(" + source.x0 + "," + source.y0 + ")"; })
    .on("click", function (d) { toggle(d); update(d); });

  nodeEnter.append("svg:rect")
    .attr("height", 50)
    .attr("width", 50)
    .attr("stroke", "#00a99d")
    .attr("stroke-width", "1")
    .attr("rx", 50)
    .attr("x", -25)
    .attr("y", -25)
    .style("fill", function (d) { return d._children ? "#00a99d" : "#fff"; });

  nodeEnter.append('a')
    .attr("class", "node-link")
    .attr('xlink:href', function (d) {
      return d.url;
    })
    .append("svg:text")
    .attr("x", function (d) { return -25; })
    .attr("y", function (d) { return -35; })
    .attr("dy", ".35em")
    //.attr("text-anchor", function(d) { return d.children || d._children ? "end" : "middle"; })

    .style("font-family", "arial")
    .style('fill', function (d) {
      return d.free ? '#000' : '#000 ';
    })
    .append("svg:tspan")
    .text(function (d) {
      var res = d.name.substr(0, 8);
      return d.name.length > 7 ? res + "..." : res;
    })
  // .style("fill-opacity", 1e-6);

  nodeEnter.append("svg:title")
    .text(function (d) {
      return d.name;
    });

  const defs = nodeEnter.append("defs");
  defs.append("clipPath")
    .attr("id", "avatar-clip")
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 23)

  nodeEnter.append("svg:image")
    .attr("xlink:href", function (d) { return d.img || "data:image/jpeg;base64,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"; })
    .attr("x", "-25px")
    .attr("y", "-25px")
    .attr("width", "50px")
    .attr("radius", "50px")
    .attr("clip-path", "url(#avatar-clip)")
    .attr("height", "50px");

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
    .duration(duration)
    .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });

  nodeUpdate.select("rect")
    .attr("height", 50)
    .attr("width", 50)
    .attr("stroke", "#00a99d")
    .attr("stroke-width", "1")
    .attr("rx", 50)
    .attr("x", -25)
    .attr("y", -25)
    .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
    .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
    .duration(duration)
    .attr("transform", function (d) { return "translate(" + source.x + "," + source.y + ")"; })
    .remove();

  nodeExit.select("circle")
    .attr("r", 1e-6);

  nodeExit.select("text")
    .style("fill-opacity", 1e-6);

  // Update the links…
  var link = vis.selectAll("path.link")
    .data(tree.links(nodes), function (d) { return d.target.id; });


  // Enter any new links at the parent's previous position.
  link.enter().insert("svg:path", "g")
    .attr("class", "link")
    .attr("stroke", "#777")
    .attr("fill", "none")
    .attr("stroke-width", 1)
    .transition()
    .duration(duration)
    .attr("d", function (d) {
      return drawStepPath(d);
    })

  
  

  // Transition links to their new position.
  link.attr("d", function (d) {
      return drawStepPath(d);
    })

    setTimeout(function(){
      link.attr("stroke-width", 1)
    },500)
    

  // Transition exiting nodes to the parent's new position.
  link.exit().attr("d", function (d) {
      return drawStepPath(d);
    })
    .remove();

  // Stash the old positions for transition.
  nodes.forEach(function (d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children.
function toggle(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
}