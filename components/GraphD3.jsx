import React, {useRef, useEffect} from 'react'
import { useRouter } from "next/router";
import * as d3 from 'd3'
import {nodes, links, MANY_BODY_STRENGTH } from '../libs/nodeProcessor'


const colorDef = '#bdba2c'
const colorShade = '#383712'
const colorHi = 'yellow'

export const GraphD3 = () => {

  const svgraf = useRef(null);

  const router = useRouter()
  function onSvgLink(target){
    router.push(target.getAttribute('href'))
  }

  function onHoverOver(e){
    const circles = d3.selectAll('circle')
    // circles.attr('fill', '#377729')

    const friendLinks = e.currentTarget.__data__.friends
    
    circles._groups[0].forEach(circle => {
      friendLinks.includes(circle.__data__.id)
        ? d3.select(circle).attr('fill', colorDef)
        : d3.select(circle).attr('fill', colorShade)
    })

    d3.select(e.currentTarget).attr('fill', colorHi)
  }
  function onHoverOut(e){
    const circles = d3.selectAll('circle')
    circles.attr('fill', colorDef)
    d3.select(e.currentTarget).attr('fill', node => node.color || 'white')
  }
                      
                      
  useEffect(() => {

    const svgraf = d3.select('#svgraf')

    const width = +svgraf.attr('width')
    const height = +svgraf.attr('height')
    const centerX = width /2
    const centerY = height /2


    const simulation = d3.forceSimulation(nodes)
                      .force("charge", d3.forceManyBody().strength(MANY_BODY_STRENGTH))
                      .force("link",   d3.forceLink(links))
                      .force("center", d3.forceCenter(centerX, centerY))

    const dragNode = d3.drag().on('drag', (event, node) => {
      node.x = event.x // fx keep node in place after drag
      node.y = event.y // fy keep node in place after drag
      simulation.alpha(1) 
      simulation.restart()
    })

    // var toolTip = d3.tip()
    // .attr('class', 'd3-tip')
    // .offset([-10, 0])
    // .html(function(d) {
    //     return "<div style='margin-bottom: -12px; color:"+d.data.color+"'>"+d.name+"</div></br><div style='margin-bottom: -5px'>"+ d.data.label+"</div></br>";
    // });
                        
                      
    const lines = svgraf.selectAll('line')
                      .data(links)
                      .enter()
                      .append('line')
                      .attr('fill', 'white')
                      .attr('stroke', link => link.color || 'white')

    const circles = svgraf.selectAll('circle')
                          .data(nodes)
                          .enter()
                          .append('circle')
                          .attr('fill', node => node.color || 'white')
                          .attr('r', node => node.size)
                          .style('cursor', 'pointer')
                          .attr('href', node => node.id)
                          .call(dragNode)

    const text = svgraf.selectAll('text')
                          .data(nodes)
                          .enter()
                          .append('text')
                          .attr('text-anchor', 'middle')
                          .attr('alignnment-baseline', 'middle')
                          .attr('fill', 'black')
                          .style('pointer-events', 'none')
                          .style('font-size', '7px')
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
    <div className="graph">
      <h1>GraphD3</h1>
      <svg ref={svgraf} id="svgraf" width="300" height="300" style={{backgroundColor: "gray"}}>

      </svg>
    </div>
  )
}
