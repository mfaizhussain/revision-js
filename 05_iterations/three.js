//  // for of
//  // ["", "", "", ""]
//  // [{}, {}, {}, {}]

//  let myArray = [{name: "Pizza", price: 10},
//                 {name: "Burger", price: 5},
//                 {name: "Pasta", price: 8},
//                 {name: "Fries", price: 3}];

//  // const myObject = {name: "Pizza", price: 10, calories: 500};
// for (const item of myArray) {
//     console.log(item);
// }

// const greeting = "Hello, World!";

// // for (const char of greeting) {
// //     console.log(char);
// // }

//  // Maps

// //  const map = new Map();
// //  map.set("name", "Alice");
// //  map.set("age", 30);
// //  map.set("city", "New York");

// //  console.log(map.get("name")); // Output: Alice
// //  console.log(map.get("age")); // Output: 30 
// //  console.log(map.get("city")); // Output: New York

// const map = new Map();
// map.set("IN", "India");
// map.set("US", "United States");
// map.set("UK", "United Kingdom");

//    console.log(map);
//    console.log(typeof map);


//    // de strucing of arr for key and value
//   for (const [key, value] of map) { 
//     // console.log(`${key}: ${value}`);
//         // console.log(key);
//         // console.log(value);
//   }

// //   for (const key of map.keys()) {
// //     console.log(key);
// //   }


// // for (const key of map.values()) {
// //      console.log(key);
// //    }

// // for (const key in map) {
// //     console.log(key);
    
// // }

// const codings = ["JavaScript", "Python", "Java", "C++", 80];


// // codings.forEach( function (val){
// //     console.log(val);
// // } );


// // codings.forEach((key, index) => {
// //     console.log(`${index}: ${key}`);
// // });

// // codings.forEach(value => console.log(value));

// codings.forEach( (item, index, arr) => console.log(item, index, arr) );

// const myCoding = [
//     {
//         languageName: "JavaScript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "Python",
//         languageFileName: "py"
//     },
//     {
//         language: "Java",
//         languageFileName: "java"
//     }
    
// ]

// myCoding.forEach( (item) => console.log(item.languageName) );


// myObject = {
//     cpp: "cpp",
//     js: "Javascript"
// }

// for( const key in myObject)
// {
//     console.log(`${key} :- ${myObject[key]}`);
    
// }


const arr = [120, 4, 3, 56]

arr.forEach((a) => {
    console.log(a)
})
arr.forEach(print)

function print(e){
    console.log(e)
}