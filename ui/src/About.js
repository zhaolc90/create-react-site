import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap'


const propTypes = {};

const defaultProps = {};

export default class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Button> Button Name</Button>
            </React.Fragment>
        );
    }
}

 About.propTypes = propTypes;
 About.defaultProps = defaultProps;