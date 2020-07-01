/**
 * Find arithmetic mean. Task 13
 * @type {number[]}
 */
let numbers = [12, 15, 20, 25, 59, 79];
let sum = 0;
let average = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    average = sum / (numbers.length);
}
alert(average);