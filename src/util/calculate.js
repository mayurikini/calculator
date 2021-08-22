import Big from 'big.js';

import operate from './operate';
import isNumber from './isNumber';


function calculate(stateMap, button) {
    // reset state when AC is selected
    if (button === "AC") {
        return {
            total: null,
            next: null,
            operation: null,
        }
    }

    if (isNumber(button)) {
        if (button === "0" && stateMap.next === "0") {
            return {};
        }
        if (stateMap.operation) {
            if (stateMap.next) {
                // concatenate value
                return  { next: stateMap.next + button };
            } 
            return {next: button};
        }
        if (stateMap.next) {
            const next = stateMap.next === "0" ? button : stateMap.next + button;
            return  { total: null, next: next };
        }
        return {
            total: null,
            next: button,
        }
    }

    if (button === ".") {
        if (stateMap.next) {
            if (stateMap.next.includes(".")) {
                return {};
            }
            return {next: stateMap.next + "."};
        }
        return {next: "0."};

    }
    if (button === "%") {
        // console.log(stateMap);
        if (stateMap.next) {
            if (stateMap.operation) {
                const result = operate(stateMap.total, stateMap.next, stateMap.operation);
                return {next: null, total: Big(result).div(Big("100")).toString()};
            }
            return {next: Big(stateMap.next).div(Big("100")).toString()};
        }  

        return {};
    }

    if (button === "=") {
        if (stateMap.next && stateMap.operation) {
            return {
                total: operate(stateMap.total, stateMap.next, stateMap.operation),
                next: null,
                operation: null,
            };
        } else {
            return {};
        }
    }

    if (button === "+/-") {
        if (stateMap.next) {
            return {next: (-1 * (stateMap.next)).toString() };
        }
        if (stateMap.total) {
            return {total: (-1 * (stateMap.total)).toString() };
        }
        return {};
    }


    if (stateMap.operation) {
        return {
            total: operate(stateMap.total, stateMap.next, stateMap.operation),
            next: null,
            operation: button,
        };
    }

    if (!stateMap.next) {
        return {operation: button };
    }

    return {
        total: stateMap.next,
        next: null,
        operation: button,
    };
}
export default calculate;
