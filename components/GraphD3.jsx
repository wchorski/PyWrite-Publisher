import React, {useRef, useEffect} from 'react'
import { useRouter } from "next/router";
import * as d3 from 'd3'
import {nodes, links, MANY_BODY_STRENGTH } from '../libs/nodeProcessor'
import { StyledGraph } from "styles/Graph.styled";


export const GraphD3 = () => {

  const svgraf = useRef(null);
  const graf = useRef(null);

  const router = useRouter()
  function onSvgLink(target){
    router.push(target.getAttribute('href'))
  }

  function onHoverOver(e){

    const targetFriends = e.currentTarget.__data__.friends
    
    const circles = d3.selectAll('circle')
    circles._groups[0].forEach(circle => {
      targetFriends.includes(circle.__data__.id)
        ? d3.select(circle).classed("shaded", false).classed("active", true)
        : d3.select(circle).classed("shaded", true).classed("active", false)
    })
    
    const lines = d3.selectAll('line')
    lines._groups[0].forEach(line => {
      (e.currentTarget.__data__.id === line.__data__.source.id) 
        ? d3.select(line).classed("active", true)
        : d3.select(line).classed("active", false)
    })
    const texts = d3.selectAll('text')
    texts._groups[0].forEach(txt => {
      targetFriends.includes(txt.__data__.id) || e.currentTarget.__data__.id === txt.__data__.id
        ? d3.select(txt).classed("shaded", false)
        : d3.select(txt).classed("shaded", true)
    })


    d3.select(e.currentTarget).classed("shaded", false).classed("active", true)
  }
  function onHoverOut(e){
    d3.selectAll('circle').classed("shaded", false).classed("active", false)
    d3.selectAll('line').classed("active", false)
    d3.selectAll('text').classed("shaded", false)

    d3.select(e.currentTarget).classed("default", false)
  }

  function onZoomed(e) {
    console.log('i zoomy, ', e.transform);

    const z = e.transform.k

    // todo make this smoother
    switch (true) {
      case (z > 1):
        d3.selectAll('text').style('opacity', '1')
        break;
      case (z < 1  && z > .7):
        d3.selectAll('text').style('opacity', '.5')
        break;
      case (z < .7):
        d3.selectAll('text').style('opacity', '0')
        break;
    }

    d3.select('#graf')
		.attr('transform', e.transform);
  }
                  
                      
  useEffect(() => {

    const svgraf = d3.select('#svgraf')
    const g = d3.select('#graf')

    const width = +svgraf.attr('width')
    const height = +svgraf.attr('height')
    svgraf.call(d3.zoom()
      .on("zoom", onZoomed))
      
    const centerX = width /2
    const centerY = height /2


    const simulation = d3.forceSimulation(nodes)
                          .force("charge", d3.forceManyBody().strength(MANY_BODY_STRENGTH))
                          .force("link",   d3.forceLink(links))
                          .force("center", d3.forceCenter(centerX, centerY))

    const dragNode = d3.drag().on('drag', (event, node) => {
      node.fx = event.x // fx keep node in place after drag. x does not
      node.fy = event.y // fy keep node in place after drag
      simulation.alpha(1) 
      simulation.restart()
    })

    // var toolTip = d3.tip()
    // .attr('class', 'd3-tip')
    // .offset([-10, 0])
    // .html(function(d) {
    //     return "<div style='margin-bottom: -12px; color:"+d.data.color+"'>"+d.name+"</div></br><div style='margin-bottom: -5px'>"+ d.data.label+"</div></br>";
    // });
                        
                      
    const lines = g.selectAll('line')
                      .data(links)
                      .enter()
                      .append('line')

    const circles = g.selectAll('circle')
                          .data(nodes)
                          .enter()
                          .append('circle')
                          .attr('r', node => node.size)
                          .attr('href', node => node.id)
                          .call(dragNode)

    const text = g.selectAll('text')
                          .data(nodes)
                          .enter()
                          .append('text')
                          // .attr('text-anchor', 'middle')
                          .attr('alignnment-baseline', 'middle')
                          .text(node => node.name)

      
    simulation.on('tick', () => {
      circles
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        // .on("mouseover", toolTip.show )
        // .on("mouseout", toolTip.hide)
        .on('mouseover', (e) => onHoverOver(e))
        .on('mouseout', (e) => onHoverOut(e))
        .on('pointerdown', (e) => onSvgLink(e.target))

      text
        .attr('x', d => d.x)
        .attr('y', d => d.y);
      
      lines
        .attr('x1', link => link.source.x)
        .attr('y1', link => link.source.y)
        .attr('x2', link => link.target.x)
        .attr('y2', link => link.target.y);
    }) 
    // return () => {
    //   second
    // }
  }, [svgraf])
  


  return (

      <StyledGraph className='graph'>
        <svg ref={svgraf} id="svgraf" width="300" height="300" >
          <g ref={graf} id="graf"></g>
        </svg>
      </StyledGraph>
    
  )
}
