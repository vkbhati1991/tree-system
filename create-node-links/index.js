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
    let height = 350, width = 600, maxDepth = 3;

    //Set Node and Links Array
    let tempdata = {
        nodes: [],
        links: []
    };

    let depthObject = {}

    function getCordinate(i, arr, dArray) {

        const arrLength = arr.length;

        let xColSize = height / arrLength;
        let yColSize = width / maxDepth;

        let xCord = (yColSize / 2) + (dArray * yColSize);
        let yCord = (xColSize / 2) + (i * xColSize);


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


    //Set Node and Links Array

    let svg = d3.select("#ms").attr("width", width).attr("height", height);
    let container = svg.append("g").classed("root", true);

    let node = container.append("g").classed("nodes", true);
    let nodeGroup = node.selectAll("g").data(tempdata.nodes)
        .enter()
        .append("g")
        .attr("transform", function (d) { return "translate(" + d.x + ", " + d.y + ")" });

    nodeGroup.append("rect")
        .attr("height", 40)
        .attr("width", 40)
        .attr("rx", 40)
        .attr("ry", 40)
        .attr("x", -20)
        .attr("y", -20)
        .attr("fill", "red");

    nodeGroup.append("text")
        .text(function (d) { return d.nodeId })

    let path = container.append("g").classed("path", true);
    path.selectAll("line").data(tempdata.links)
        .enter()
        .append("line")
        .attr("x1", function (d) { return d.source.x })
        .attr("y1", function (d) { return d.source.y })
        .attr("x2", function (d) { return d.target.x })
        .attr("y2", function (d) { return d.target.y })
        .attr("stroke", "red")
        .attr("stroke-width", 2)


}