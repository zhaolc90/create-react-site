// Chart.js
import React, {Component} from "react"
import {findDOMNode} from "react-dom"
var d3Chart = require('./d3Chart').default;

class Chart extends Component{
  componentDidMount(){
    var el = findDOMNode(this)
    d3Chart.create(el, {
      width: '100%',
      height: '300px'
    }, this.getChartState());
  }

  componentDidUpdate(){
    var el = findDOMNode(this);
    d3Chart.update(el, this.getChartState());
  }

  getChartState(){
    return {
      data: this.props.data,
      domain: this.props.domain
    };
  }

  componentWillUnmount(){
    var el = findDOMNode(this);
    d3Chart.destroy(el);
  }

  render(){
    return (
      <div className="Chart"></div>
    );
  }
}

export default Chart
