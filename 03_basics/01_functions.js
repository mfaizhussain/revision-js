

function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("I");
  console.log("S");
  console.log("H");
}

//sayMyName();

//sayMyName is reference to the function

function addTwoNumbers(num1, num2) {
  console.log("num1 + num2");
  return num1 + num2;
  
}

// console.log(addTwoNumbers(3, 4));
// console.log(addTwoNumbers(3,"4"));
// console.log(addTwoNumbers(3,"a"));

const result = addTwoNumbers(3, 4);
//console.log(`The Result is ${result}`)

function loginUserMessage(userName){
  if(!userName || userName === undefined) {
    return "Please enter your name";
  }else {
   return `Welcome back ${userName}`;
  }
}

//if we not set argument then not null but undefined

//console.log(loginUserMessage("Faiz"));
//console.log(loginUserMessage());


function calculateCartValue(...num1){
  return num1;
}
  

// function calculateCartValue(val1, val2,...num1){
//   return num1;
// }
console.log(calculateCartValue(200, 10, 46, 65, 45));

const user = {
  name: "Faiz",
  price: 199
}

function haldleObject(obj)
 {
  console.log(`Username is ${obj.name} and price is ${obj.price}`);
}

haldleObject(user);
// haldleObject({
//   name: "Faiz",
//   price: 499
// });


function calculateCardPrice(val1,...nums){
  return nums;
}

console.log(calculateCardPrice(29, 67, 90));

