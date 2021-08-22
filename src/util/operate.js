import Big from "big.js"


export default function operate(numberOne, numberTwo, operation) {

    const one = Big(numberOne || "0");
    const two = Big(numberTwo || (operation === '÷' || operation === 'x' ? '1' : '0'));
    switch (operation) {
        case '+': 
            return one.plus(two).toString();
        case '-':
            return one.minus(two).toString();
        case 'x':
            return one.times(two).toString();
        case '/':
            if(two.toString() === "0") {
                alert("Can not divide by 0");
                return '0';
            } else {
                return one.div(two).toString();
            }
        default:
          alert(`Sorry, ${operation} is not valid.`);
          throw Error(`Unknown operation '${operation}'`);
    }
}
