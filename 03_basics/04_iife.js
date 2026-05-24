// Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that is defined and immediately executed.
//(most important) It is often used to create a new scope and avoid polluting the global namespace.

function chai() {
    console.log(`DB CONNECTED`);
    
}
// chai(); // this will work

// IIFE
(function() {
    console.log(`DB CONNECTED`);
})();


( () => {
    console.log(`DB CONNECTED`);
})();

( function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);  
  }
)();

(( 3 != 2)  {
    // IIFE with parameters
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");

//2<=2
//3 != 2

//<, >, <=, >=, ==, !=, ===(it also check type of the data type of variables)

