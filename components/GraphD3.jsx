import React, {useRef, useEffect} from 'react'
import * as d3 from 'd3'

const nodes = [
  {"id": "Alice"},
  {"id": "Bob"},
  {"id": "Carol"},
]

const links = [
  {"source": 0, "target": 1}, // Alice -> bob
  {"source": 1, "target": 2}, // Bob -> Carol 
]

export const GraphD3 = () => {

  const svgraf = useRef(null);
                      
                      
  useEffect(() => {

    const svgraf = d3.select('#svgraf')

    const width = +svgraf.attr('width')
    const height = +svgraf.attr('height')
    const centerX = width /2
    const centerY = height /2

    const simulation = d3.forceSimulation(nodes)
                      .force("charge", d3.forceManyBody())
                      .force("link",   d3.forceLink(links))
                      .force("center", d3.forceCenter(centerX, centerY))

                        
    const circles = svgraf.selectAll('circle')
                          .data(nodes)
                          .enter()
                          .append('circle')
                          .attr('r', 10)
    const lines = svgraf.selectAll('line')
                          .data(links)
                          .enter()
                          .append('line')
                          .attr('stroke', 'black')

      
    simulation.on('tick', () => {
      circles
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
      
      lines
        .attr('x1', link => link.source.x)
        .attr('y1', link => link.source.y)
        .attr('x2', link => link.target.x)
        .attr('y2', link => link.target.y);
    }) 
    // return () => {
    //   second
    // }
  }, [])
  


  return (
    <div className="graph">
      <h1>GraphD3</h1>
      <svg ref={svgraf} id="svgraf" width="300" height="300" style={{backgroundColor: "gray"}}>

      </svg>
    </div>
  )
}
