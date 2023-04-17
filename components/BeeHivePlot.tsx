import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

type DataPoint = {
  name: string;
  value: number;
};

type Props = {
  data: DataPoint[];
  width: number;
  height: number;
};

const BeeHivePlot: React.FC<Props> = ({ data, width, height }) => {
  const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
    if (!svgRef.current) return;

    // set up the D3 chart
    const svg = d3.select(svgRef.current);
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal()
      .range(d3.schemeCategory10);

    const pie = d3.pie<DataPoint>()
      .sort(null)
      .value(d => d.value);

    const arc = d3.arc<d3.PieArcDatum<DataPoint>>()
      .innerRadius(radius * 0.67)
      .outerRadius(radius - 1);

    // render the chart
    const arcs = pie(data);
    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    g.selectAll('path')
      .data(arcs)
      .enter().append('path')
      .attr('fill', d => color(d.data.name) as number)
      .attr('d', arc)
      .append('title')
      .text(d => `${d.data.name}: ${d.data.value}`);

  }, [data, height, width]);

  return (<div >
            <svg ref={svgRef} width={width} height={height} />
          </div>
  );
};

export default BeeHivePlot;
