let upperRightArrow = function () {
    let output = ""
    let arrowSize = 4
    for (var i = 1; i < arrowSize; i++) {
        for (var j = 1; j < arrowSize; j++) {
            if (i === j || i < j) {
                output += "X"
            } else {
                output += " "
            }
        }
        output += "\n"
    }
    console.log(output)
}

let lowwerLeftArrow = function () {
    let output = ""
    let arrowSize = 4
    for (var i = 1; i < arrowSize; i++) {
        for (var j = 1; j < arrowSize; j++) {
            if (i === j || i > j) {
                output += "X"
            } else {
                output += " "
            }
        }
        output += "\n"
    }
    console.log(output)
}

let lowwerRighArrow = function () {
    let output = ""
    let arrowSize = 4
    for (var i = 1; i < arrowSize; i++) {
        for (var j = 1; j < arrowSize; j++) {
            if (i + j >= arrowSize) {
                output += "X"
            } else {
                output += " "
            }
        }
        output += "\n"
    }
    console.log(output)
}

let upperLeftArrow = function () {
    let output = ""
    let arrowSize = 4
    for (var i = 1; i < arrowSize; i++) {
        for (var j = 1; j < arrowSize; j++) {
            if (i + j <= arrowSize) {
                output += "X"
            } else {
                output += " "
            }
        }
        output += "\n"
    }
    console.log(output)
}

let rightArrow = function () {
    let output = ""
    let arrowSize = 4
    for (var i = 1; i < arrowSize; i++) {
        for (var j = 1; j < arrowSize; j++) {
            if (i + j <= arrowSize && (i === j || i > j)) {
                output += "X"
            } else {
                output += " "
            }
        }
        output += "\n"
    }
    console.log(output)
}

let downArrow = function () {
    let output = ""
    let arrowSize = 4
    for (var i = 1; i < arrowSize; i++) {
        for (var j = 1; j < arrowSize; j++) {
            if (i + j <= arrowSize && (i === j || i < j)) {
                output += "X"
            } else {
                output += " "
            }
        }
        output += "\n"
    }
    console.log(output)
}

let leftArrow = function () {
    let output = ""
    let arrowSize = 4
    for (var i = 1; i < arrowSize; i++) {
        for (var j = 1; j < arrowSize; j++) {
            if (i + j >= arrowSize && (i === j || i < j)) {
                output += "X"
            } else {
                output += " "
            }
        }
        output += "\n"
    }
    console.log(output)
}

let upArrow = function () {
    let output = ""
    let arrowSize = 4
    for (var i = 1; i < arrowSize; i++) {
        for (var j = 1; j < arrowSize; j++) {
            if (i + j >= arrowSize && (i === j || i > j)) {
                output += "X"
            } else {
                output += " "
            }
        }
        output += "\n"
    }
    console.log(output)
}

let oddChessBoard = function () {
    let output = ""
    let arrowSize = 4
    for (var i = 1; i < arrowSize; i++) {
        for (var j = 1; j < arrowSize; j++) {
            if ((i + j) % 2 === 0) {
                output += "X"
            } else {
                output += " "
            }
        }
        output += "\n"
    }
    console.log(output)
}

let evenChessBoard = function () {
    let output = ""
    let arrowSize = 4
    for (var i = 1; i < arrowSize; i++) {
        for (var j = 1; j < arrowSize; j++) {
            if ((i + j) % 2 === 0) {
                output += " "
            } else {
                output += "X"
            }
        }
        output += "\n"
    }
    console.log(output)
}

let min = function (a, b) {
    if (a < b) {
        return a
    } else return b
}

let max = function (a, b) {
    if (a > b) {
        return a
    } else return b
}

let countChar = function (word, char) {
    let count = 0
    for (var i = 0; i < word.length; i++) {
        if (word[i] === char) {
            count += 1
        }
    } return count
}

let rangeNumbers = function (begin, end, steps) {
    let output = []
    if (steps === null || steps === 0) {
        for (var i = begin; i <= end; i++) {
            output.push(i)
        }
        return output
    } else if (steps > 0) {
        for (var i = begin; i <= end; i += count) {
            output.push(i)
        }
        return output
    } else {
        for (var i = begin; i >= end; i += count) {
            output.push(i)
        }
        return output
    }
}

let sumRangeNumbers = function (rangeNumbers) {
    let sum = 0
    for (var i = 0; i < rangeNumbers.length; i++) {
        sum += rangeNumbers[i];
    }
    return sum
}

let reverseArray = function (array) {
    let reverse = []
    for (var i = array.length-1; i >= 0; i--) {
        reverse.push(array[i])        
    }
    return reverse
}
