import React from 'react';
import {Button} from 'react-bootstrap'
var Chart = require('./Charts').default;

var sampleData = [
  {id: '5fbmzmtc', x: 7, y: 41, z: 6},
  {id: 's4f8phwm', x: 11, y: 45, z: 9},
  // ...
];

const propTypes = {};

const defaultProps = {};

export default class About extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data: sampleData,
            domain: {x: [0, 30], y: [0, 100]}
        }
    }
    render() {
        return (
                <Chart
                    data={this.state.data}
                    domain={this.state.domain} />
        );
    }
}

 About.propTypes = propTypes;
 About.defaultProps = defaultProps;
