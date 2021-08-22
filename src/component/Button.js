import React from "react";
import PropTypes  from "prop-types";

import './Button.css';

const propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(['Number', 'Operator']),
    clickHandler: PropTypes.func,
};

class Button extends React.Component {

    handleClick = () => {
        this.props.clickHandler(this.props.name);
    }

    render() {
        const classname = ["button", this.props.type, this.props.name === "0" ? "wide" : ""]
        return(
            <div className={classname.join(" ")}>
                <button key={this.props.name} onClick={this.handleClick}>{this.props.name}</button>
            </div>
        )
    }
}

Button.propTypes = propTypes;
export default Button;
