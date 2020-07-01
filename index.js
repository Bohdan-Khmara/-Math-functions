/**
 * Finding factorial. Task 14
 * @type {number}
 */
let userInput = Number(prompt('inpur your value'));
let count = userInput;
let result;
for (let i = userInput; i > 1; i--) {
    --count;
    userInput = userInput * count;
    result = userInput;
}
alert(result);