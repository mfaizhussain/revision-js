const userEmail = "faiz@gmail.com";

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("No user email foundjs");
}

// falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truethy value

// true, any non zero number, any non empty string like "0", {}, [], Symbol(), function(){}
// "0", 'false', " ", [], {}, function(){} are all truethy values in JavaScript. They will evaluate to true in a boolean context.

// if ( userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Empty object ");
// }

// Nullish coalescing operator (??): null undefined
let val1;
val1 = 10 ?? 10; // val1 will be 0 because it's not null or undefined
val1 = null ?? 10; // val1 will be 10 because null is considered nullish
val1 = undefined ?? 10; // val1 will be 10 because undefined is considered nullish
val1 = null ?? 110 ?? 100; // val1 will be 10 because null is considered nullish, so it moves to the next value which is 10
console.log(val1); // Output: 10

// Ternary Operator

// condition ? true : false

const age = 17;
const canVote = age >= 18 ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote); // Output: Yes, you can vote