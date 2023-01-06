/*

Write a function `choosePrimes(nums)` that takes in an array of numbers as args.
The function should return a new array containing the primes from the original
array.

A prime number is a number that is only divisible by 1 and itself.

Hint: consider creating a helper function to check if a number is prime!

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

*/

let isPrime = function(num) {
    // Your code here
    let prime = true

    if(num < 2){
        prime = false
    }
    let divisibors = []
    for(let i = 2; i < num; i++){
        divisibors.push(i)
    }

    divisibors.forEach(function(number){
        if(num % number === 0){
            prime = false
        }
    })
    return prime
}

let choosePrimes = function(nums) {
    // Your code here
    let newArray = nums.filter(isPrime)
    return newArray
}

// alternative solution using Array.filter
// let choosePrimes = function(nums) {
//     return nums.filter(isPrime);
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = choosePrimes;
} catch (e) {
    module.exports = null;
}
