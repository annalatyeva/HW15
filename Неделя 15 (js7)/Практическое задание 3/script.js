let numbers = [];
for (let i = -10; i <= 10; i++) {
    numbers.push (i);
}
numbers = numbers.filter(number => number >= 0);

let squaredNumbers = numbers.map (number => number * number);

let sortedSquaredNumbers = squaredNumbers.sort(function sortNumbers(a, b) {
    if (a > b) {
    return -1;
    } else if (a < b) {
    return 1;
    } else {
    return 0;
    }
    });

let unique = sortedSquaredNumbers.filter(function(item, index, sortedSquaredNumbers) {
    return index === sortedSquaredNumbers.indexOf(item);
})

