// Chart.js
import React from "react"
import ReactDOM from "react-dom"
import d3Chart from './d3Chart'

const findDOMNode = ReactDOM.findDOMNode
class Chart extends React.Component{
  componentDidMount(){
    var el = findDOMNode(this)
    d3Chart.create(el, {
      width: '100%',
      height: '300px',
      draw:this.props.draw
    }, this.getChartState());
  }

  componentDidUpdate(){
    var el = findDOMNode(this);
    d3Chart.update(el, this.getChartState(), this.props.draw);
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
      <div className="chart"></div>
    );
  }
}

export default Chart