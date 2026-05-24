let a = 10;
const b = 20;
var c = 30;

{
    let a = 100;
    const b = 200;
    var c = 300;
    // console.log("Inner: ", a, b, c);
    
}

// console.log("Outer: ", a, b, c);


// Closure DOM 

function one(){
    const userName = "Hitesh";
    function two(){
        const website = "you tube";
        console.log(userName);
        
    }
    // console.log(website);
     

     two();
}

// one();


// if (true) {
//     const username = "Hitesh";
//     if (username === "Hitesh") {
//         const website = "YouTube";
//         console.log(username);
//         console.log(website);
//     }
// }


console.log(addone(5));

function addone(num){
    return num + 1;
}

console.log(addtwo(5));


const addtwo = function(num){
    return num + 2;
}
