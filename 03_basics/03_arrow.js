const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to our website`);
        console.log(this);
    }
    
}


// this point to current context, in this case it is user object


// user.welcomeMessage();
// user.username = "hitesh choudhary";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     let a = 10;
//     // console.log(this.a);  not going to work here but only objects can have properties and methods
// }

const chai = () => {
    // let username = "hitesh";
    const username = {
        name: "therfe"
    }
    console.log(this.username); // this will not work here because arrow functions do not have their own 'this' context, they inherit it from the parent scope
}

 chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(10, 20));

 // implicit return
// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => ({username: "hitesh", price: 999}); // withot parentheses it will be treated as a code block and not an object literal

console.log(addTwo(2,80));


const myArray = [1,2,3,4,5];

myArray.forEach((element) => {
    console.log(element);
})

