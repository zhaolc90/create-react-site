// d3Chart.js
import * as d3 from "d3"

var d3Chart = {};

d3Chart.create = function(el, props, state) {
  var svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height);

  svg.append('g')
      .attr('class', 'd3-default');
  this.update(el, state, props.draw);
};

d3Chart.update = function(el, state, cb) {
  var scales = this._scales(el, state.domain);
  if(cb && typeof cb === 'function') {
      cb(el, scales, state.data)
  }
  else{
    this._draw(el, scales, state.data);
  }
};

d3Chart.destroy = function(el) {
};

d3Chart._draw = function(el, scales, data) {
  var g = d3.select(el).selectAll('.d3-default');
  var text = "Chart Pool"
  var point = g.selectAll('.d3-note')
    .data(data, function(d) { return d.id; });

  // ENTER
  point.enter().append('circle')
      .attr('class', 'd3-point');

  // ENTER & UPDATE
  point.attr('cx', function(d) { return scales.x(d.x); })
      .attr('cy', function(d) { return scales.y(d.y); })
      .attr('r', function(d) { return scales.z(d.z); });

  // EXIT
  point.exit()
      .remove();
};

d3Chart._scales = function(el, domain) {
  if (!domain) {
    return null;
  }

  var width = el.offsetWidth;
  var height = el.offsetHeight;

  var x = d3.scale.linear()
    .range([0, width])
    .domain(domain.x);

  var y = d3.scale.linear()
    .range([height, 0])
    .domain(domain.y);

  var z = d3.scale.linear()
    .range([5, 20])
    .domain([1, 10]);

  return {x: x, y: y, z: z};
};
export default d3Chart