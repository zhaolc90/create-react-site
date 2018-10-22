import React from 'react';
import { Link } from "react-router-dom";

const propTypes = {};

const defaultProps = {};
const Add = (props) =>{
    return(
        <div 
            style={{
                width: "100%",
                backgroundColor:"aquamarine"
            }}
        >
            +
        </div>
    )
}
export default class Nav extends React.Component {
    render() {
        const {menus, devMode} = this.props
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
                {devMode
                    ? <li key={"add"}>
                              <Add/>
                      </li>
                    :null}
            </ul>
        );
    }
}

 Nav.propTypes = propTypes;
 Nav.defaultProps = defaultProps;
