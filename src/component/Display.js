import React from "react";
import PropTypes  from "prop-types";

import './Display.css';

const propTypes = {
    value: PropTypes.string,
};

class Display extends React.Component {

    render() {
        return(
            <div className="display">
                <div>{this.props.value}</div>
            </div>
        )
    }
}

Display.propTypes = propTypes
export default Display;
