import React from "react";
import * as d3 from "d3";
import data from "./data.json";

class CrmnextMicroServices extends React.Component {
    componentDidMount() {
        createMicroServicesChart(data);
    }
    render() {
        return (
            <svg id="ms" height="500" width="1000">
            </svg>
        )
    }
}

export default CrmnextMicroServices;




function createMicroServicesChart(data) {
    let height = 500, width = window.innerWidth - 200, svgWidth = width - 200, maxDepth = 4;

    //Set Node and Links Array
    let tempdata = {
        nodes: [],
        links: []
    };

    let depthObject = {};

    let xForBigRect = svgWidth - (svgWidth / maxDepth / 2);

    function getCordinate(i, arr, dArray) {

        // const arrLength = arr.length;

        let xColSize = 130;//height / arrLength;
        let yColSize = svgWidth / maxDepth;

        let xCord = (yColSize / 2) + (dArray * yColSize);
        let yCord = (xColSize) + (i * xColSize);


        return {
            x: xCord,
            y: yCord
        };
    }

    function getElementsDepth(depth) {
        if (data && data.nodes && data.nodes.length > 0) {
            return data.nodes.filter((f) => f.depth === depth);
        }
        return null;
    }

    for (let i = 1; i <= maxDepth; i++) {
        depthObject[i] = getElementsDepth(i);
    }

    Object.keys(depthObject).forEach(dArray => {
        depthObject[dArray].forEach((d, i, arr) => {
            let coord = getCordinate(i, arr, dArray - 1);
            tempdata.nodes.push({ ...d, ...coord });
        });
    });

    function getSourceCoordinate(link) {

        if (tempdata && tempdata.nodes && tempdata.nodes.length === 0) {
            return null;
        }

        const node = tempdata.nodes.find(f => f.nodeId === link);

        return {
            x: node.x,
            y: node.y
        }
    }

    function setLinksValue() {
        if (data && data.links && data.links.length > 0) {
            data.links.forEach((d, index) => {
                tempdata.links.push({
                    node: d,
                    index,
                    source: getSourceCoordinate(d.source),
                    target: getSourceCoordinate(d.target)
                });
            });
        }
    }

    setLinksValue();

    console.log(tempdata.links[3])


    //Set Node and Links Array

    let svg = d3.select("#ms").attr("width", width).attr("height", height);
    let container = svg.append("g").classed("root", true);

    let path = container.append("g").classed("path", true);

    path.selectAll("path").data(tempdata.links)
        .enter()
        .append("path")
        .attr("fill", "none")
        .attr("stroke-width", function (d) { return d.node.stroke })
        .attr("stroke-dasharray", "8,2")
        .attr("stroke", function (d) { return d.node.color || "#3684ae" })
        .attr("d", function (d) {
            return "M" + d.source.x + "," + d.source.y
                + "C" + (d.source.x + d.target.x) / 2 + "," + d.source.y
                + " " + (d.source.x + d.target.x) / 2 + "," + d.target.y
                + " " + d.target.x + "," + d.target.y;
        });


    let node = container.append("g").classed("nodes", true);

    let nodeGroup = node.selectAll("g").data(tempdata.nodes)
        .enter()
        .append("g")
        .attr("transform", function (d) { return "translate(" + d.x + ", " + d.y + ")" });

    let gradientDef = nodeGroup.append("defs");

    let linearGradient = gradientDef.append("linearGradient")
        .attr("id", function (d, i) { return `grad${i}` })
        .attr("x1", function (d) { return d.grad.x1 })
        .attr("y1", function (d) { return d.grad.y1 })
        .attr("x2", function (d) { return d.grad.x2 })
        .attr("y2", function (d) { return d.grad.y2 });

    linearGradient.append("stop")
        .attr("offset", function (d) { return d.startoffset })
        .style("stop-color", function (d) { return d.startcolor })
        .style("stop-opacity", 1);

    linearGradient.append("stop")
        .attr("offset", function (d) { return d.endoffset })
        .style("stop-color", function (d) { return d.endcolor })
        .style("stop-opacity", 1);


    nodeGroup.append("rect")
        .attr("height", 30)
        .attr("width", 30)
        .attr("rx", 2)
        .attr("ry", 2)
        .attr("x", -15)
        .attr("y", -15)
        .attr("stroke-width", 2)
        .attr("stroke", "#000")
        .attr("fill", function (d, i) { return `url(#grad${i})` });

    nodeGroup.append("polygon")
        .attr("points", "15,-6 20,0 15,6")
        .style("fill", "#000")

    nodeGroup.append("text")
        .text(function (d) { return d.text })
        .attr("y", -30)


    let bigRect = container.append("g").classed("bigRect", true)
        .attr("transform", function (d) { return "translate(" + xForBigRect + ", 130)" });

    bigRect.append("rect")
        .attr("height", 250)
        .attr("width", 250)
        .attr("x", -30)
        .attr("y", -18)
        .attr("stroke-width", 0)
        .attr("stroke", "#000")
        .attr("fill", "#efe4d6");

    function decidePositions(n) {
        var arr = [];
        for (var i = 0; i < n; i++) {
            arr.push({
                x: Math.random() * 200,
                y: Math.random() * 200
            })
        }
        return arr;
    }

    bigRect.selectAll("g").data(decidePositions(150))
        .enter()
        .append("g")
        .append("circle")
        .attr("r", 3)
        .attr("cx", function (d, i) { return d.x })
        .attr("cy", function (d, i) { return d.y })
        .attr("fill", function (d, i) { return i % 2 === 0 ? "#ff8e0d" : "#043d61" });
}