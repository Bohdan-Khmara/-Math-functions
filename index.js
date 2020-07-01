/**
 * Fill an array with random numbers. Task 10
 * @type {*[]}
 */
let arrOfRandom = [];
for (let i = 0; i < 10; i++) {
    arrOfRandom.push(Math.round(Math.random() * 100));
}
alert(arrOfRandom);