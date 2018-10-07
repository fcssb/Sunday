"use strict";
// Write a function that takes the average of an array of number and returns the nearest whole number.
// Examples:
// number([1, 2]) => 2
// number([2, 4]) => 3
// number([23, 18, 1, 1, 1, 1]) => 8
// number([1, 2, 3, 4, 5]) => 3
exports.__esModule = true;
function number(numbers) {
    var numbersLength = numbers.length;
    var sum = 0;
    var count = 0;
    for (var i = 0; i < numbersLength; i++) {
        sum += numbers[i];
        count++;
        //console.log("I am dimsum:"+sum)
    }
    return Math.round(sum / count);
}
exports.number = number;
console.log(number([1, 2]));
console.log(number([2, 4]));
console.log(number([23, 18, 1, 1, 1, 1]));
console.log(number([1, 2, 3, 4, 5]));
