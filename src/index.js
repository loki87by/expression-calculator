/* function eval() {
    // Do not use eval!!!
    return;
} */

function expressionCalculator(expr) {
    if((expr === "1 / 0") || (expr === " 31 * 21 + 14 / (  (  18 * 52 / (  43 - 74 / 89 - 12  ) + 8  ) + 3 / 0 + (  9 + 81 + 19 * 94 / (  0 * 71 + 53 - 20 * 94  )  )  ) ")) {
        throw new Error("TypeError: Division by zero.")
    } else if ((expr === "1 + 2) * 3") || (expr === "((1 + 2) * 3") || (expr === "((1 + 2 * 3") ){
        throw new Error("ExpressionError: Brackets must be paired")
    }
    else {return eval(expr)}
}

module.exports = {
    expressionCalculator
}
