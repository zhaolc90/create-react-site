import React from 'react';
import PropTypes from 'prop-types';
import {main,Chart} from "../dist/d3-pool-chart.umd"
console.log(main())
const propTypes = {};

const defaultProps = {};

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Chart/>
            </React.Fragment>
        );
    }
}

 App.propTypes = propTypes;
 App.defaultProps = defaultProps;