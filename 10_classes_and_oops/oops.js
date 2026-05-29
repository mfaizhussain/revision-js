// const user = {
//     userName : "Faiz",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log(`${this.userName} ${this.loginCount} ${this.signedIn}`);
//         console.log(this);
        
        
//     }
// }


// console.log(user.getUserDetails());
// console.log(this);


function User(userName, loginCount, isLoggedIn){
   this.userName = userName
   this.loginCount = loginCount
   this.isLoggedIn = isLoggedIn

   // return is implicit in this but still i write ve
   return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("faiz", 2, false)
// console.log(userOne);
console.log(userTwo.constructor());

