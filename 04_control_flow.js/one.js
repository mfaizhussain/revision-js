 // if

 const isUserLoggedIn = true;
 const temperature = 30;
 const balance = 600;

//  if ( 2 ) {
//     console.log("Hi, Faiz");
    
//  }

//  if (temperature < 50 ) {
//    console.log("Less than 50");
   
//  } else {
//    console.log("Greater than 50");
   
//  }

// implicit scope
// if (balance > 500) console.log("Test");

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard && balance > 500) {

   console.log("Allow to buy course ");
   
}

const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


