import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const propTypes = {};

const defaultProps = {};
const Add = (props) =>{
    return(
        <div 
            style={{
                width: "100%",
                backgroundColor:"yellow"
            }}
        >
            +
        </div>
    )
}
export default class Nav extends React.Component {
    render() {
        const {menus} = this.props
        return (
            <ul  style={{ listStyleType: "none",paddingInlineStart: 0}}>
              {menus.map(
                  (menu, idx)=>{
                      return(
                    <li key={idx}>
                        <Link to={menu.path}>{menu.name}</Link>
                    </li>)
                  }
              )}
              <li key={"add"}>
                        <Add/>
                </li>
            </ul>
        );
    }
}

 Nav.propTypes = propTypes;
 Nav.defaultProps = defaultProps;
