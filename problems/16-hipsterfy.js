/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    let vowels = 'aeiouAEIOU'
    let splited = word.split("")
    let lastVowelIndex = -1

    splited.forEach(function(char, index) {
        if (vowels.includes(char)) {
            lastVowelIndex = index
        }
    })

    if (lastVowelIndex === -1) {
        return word
    }

    splited.splice(lastVowelIndex, 1)
    return splited.join("")
};

let hipsterfy = function(sentence) {
    // Your code here
    let newArray = sentence.split(" ").map(removeLastVowel).join(" ")
    return newArray
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
