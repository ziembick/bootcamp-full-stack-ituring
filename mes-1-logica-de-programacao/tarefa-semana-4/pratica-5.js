const numbers = [4, 9, 7, 1, 8, 12]

function compareFunction(a, b) {
    return a - b;
}

numbers.sort(compareFunction)

console.log(numbers)