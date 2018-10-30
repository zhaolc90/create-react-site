import React from 'react';
import PropTypes from 'prop-types';
import {main,Chart} from "../dist/d3-pool-chart.esm"
import * as d3 from 'd3'
import "./App.css"

console.log(main())
const propTypes = {};

const defaultProps = {};
var sampleData = [
    {id: '5fbmzmtc', x: 7, y: 41, z: 6},
    {id: 's4f8phwm', x: 11, y: 45, z: 9},
    // ...
  ];
  var domain={x: [0, 30], y: [0, 100]}
  var draw = function(el, scales, data){
    var g = d3.select(el).selectAll('.d3-default');
    var text = "Chart Pool"
    var point = g.selectAll('.d3-note')
        .data(data, function(d) { return d.id; });

    // ENTER
    point.enter().append('circle')
        .attr('class', 'd3-point');

    // ENTER & UPDATE
    point.attr('cx', function(d) { return scales.x(d.x); })
        .attr('cy', function(d) { return scales.y(d.z); })
        .attr('r', function(d) { return scales.z(d.z); });

    // EXIT
    point.exit()
        .remove();
  }

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Chart data={sampleData} domain={domain} x={1}/>
                <Chart data={sampleData} domain={domain} draw={draw} x={2}/>
                <Chart data={sampleData} domain={domain} x={3}/>
            </React.Fragment>
        );
    }
}

 App.propTypes = propTypes;
 App.defaultProps = defaultProps;