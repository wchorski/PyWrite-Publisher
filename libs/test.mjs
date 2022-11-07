const arr1 = ['banana', 'monkey banana', 'apple', 'kiwi', 'orange'];
const arr2 = ['red', 'blue'];

const checker = (input, val) => val.some(element => input.includes(element));

console.log(checker(arr1, ['banana']));
console.log(checker(arr2, ['banana']));