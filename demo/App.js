import React from 'react';
import PropTypes from 'prop-types';
import {main,Chart} from "../dist/d3-pool-chart.esm"
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
export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Chart data={sampleData} domain={domain}/>
            </React.Fragment>
        );
    }
}

 App.propTypes = propTypes;
 App.defaultProps = defaultProps;