import React from "react";
import Button from './Button';
import PropTypes  from "prop-types";

import isNumber from '../util/isNumber';
import "./Panel.css";

const propTypes = {

    clickHandler: PropTypes.func,
};
 
const neurtal = ['AC', '+/-', '%' , '.'];
const rows = {
    0: ['AC', '+/-', '%', '/'],
    1: ['7', '8', '9', 'x'],
    2: ['4', '5', '6', '-'],
    3: ['1', '2', '3', '+'],
    4: ['0', '.', '='],
};

class Panel extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(buttonName) {
        return this.props.clickHandler(buttonName);
    }

    render() {

        const buttonPanel = Object.entries(rows).map(([key, value]) => {
            return value.map(item => {
                let buttonType = isNumber(item) || neurtal.includes(item) ? 'Number' : 'Operator';  
                return <Button key={item} name={item} type={buttonType} clickHandler={this.handleClick} />;
            });
         });

        return (
            <div className="panel">
                {buttonPanel}
            </div>
        );
    }
}

Panel.propTypes = propTypes;
export default Panel;
