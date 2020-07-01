/**
 * Math function. Take the square root. Task 5
 * @type {number[]}
 */
let array = [4, 2, 5, 19, 13, 0, 10];
let inCube = [];
let sumInCube = 0;
let sqrtInCube = 0;

for (let i = 0; i < array.length; i++) {
    inCube.push(Math.pow(array[i], 3));
}

for (let j = 0; j < inCube.length; j++) {
    sumInCube += inCube[j];
    sqrtInCube = Math.sqrt(sumInCube);
}
console.log(sqrtInCube);