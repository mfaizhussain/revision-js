 // singleton object
 // Object.create()

  // object literals
  const mySyb = Symbol("key1");
  const jsUser = {
    name : "faiz",
    [mySyb]: "This is a symbol",
    "full name" : "Faiz Hussain",
    age: 23,
    location: "New Delhi",
    email: "faizhussain@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
  }

//   console.log(jsUser.email);
//   console.log(jsUser["full name"]);
//   console.log(jsUser[mySyb]);

  jsUser.email = "faizhussain@microsoftt";
//   Object.freeze(jsUser);
   // freeze the object to prevent modification


  jsUser.email = "faizhussain@google"; // this will not change the email property because the object is frozen

//   console.log(jsUser.email);
//   console.log(jsUser);

jsUser.greeting = function() {
    console.log(`hello ${this.name}, welcome to JavaScript!`);

}

jsUser.greetingTwo = function() {
    console.log(`hello jsUser`);
}

console.log(jsUser.greetingTwo()); // this will call the greeting method and print the message to the console

console.log(jsUser.greeting());
