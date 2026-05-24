//console.log('Hello, World!');

//console.log(accountPassword); //undefined because of hoisting


/* In mordern world we only use const not var
 because var is function scope and const is block scope.
  
    var can be re-declared and updated but const cannot be re-declared and updated.
    var can be hoisted but const cannot be hoisted.
    var can be initialized without value but const must be initialized with value.
    var can be used before declaration but const cannot be used before declaration.
*/
//immutable variable const
const accountId = 12345;

//mutable variable let
let accountEmail = "faiz@gmail.com";

//mutable variable var
var accountPassword = "12345";

//mutable variable let
accountCity = "Jaipur";

//console.table([typeof(accountId), typeof(accountEmail), typeof(accountPassword), typeof(accountCity)]);

const areaOfCircle = function(radius){
    return Math.PI * radius ** 2;
}

const areaOfCircle2 = (radius) => {
    return Math.PI * radius ** 2;
}

// console.log(areaOfCircle2(7));

const numbers = [1, 2, 3, 4, 5];

const newArr = numbers.map( (e) => e * e);
async function help(){
   setTimeout( ()=>{
    console.log("help");
    
   },0)
}
help()
console.log(newArr);


let arr1 = [12, 3, 56]
arr1.push("hello")
console.log(arr1);


const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(this);
        
        return `${this.username} , welcome to website`;
        
        
    }

}

console.log(user.welcomeMessage());



