
// fetch('https://api.github.com/users/mfaizhussain').then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data);
    
// }).catch((error) => console.log(error)
// )

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task 1 is compelete');
        resolve("Hello babu")
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"gagag@gmail.com"})
        // can sent any data type but mostly use with Obj
    },1000)
})

promiseThree.then(function(user){
  console.log(user);
  
})

const promiseFour = new Promise(function(resolve, reject){
    let error = false
    if(!error){
        setTimeout(function(){
            resolve({username: "faiz"})
        }, 1000)
    } else {
        reject("Error babu")
    }
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.username
    
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error) {
    console.log(error)
    
}).finally(() => console.log("Finally is run")
)


const promiseFive = new Promise(function(resolve, reject){
    let error = true
    if(!error){
        setTimeout(function(){
            resolve({username: "faiaz"})
        }, 1000)
    } else {
        reject("Error babu")
    }
})
// asyn await 

async function consumePromiseFive(){
   try{
     const response = await promiseFive
    console.log(response);
    }catch(err){
        console.log(err);
        
    }
    
}

consumePromiseFive()


// async function getAllUser()
// {

//     const response = await fetch("https://api.github.com/users/mfaizhussain")

//     // Add 'await' here because response.json() returns a Promise
//     const data = await response.json()
//     console.log(data);
    
    
// }

// getAllUser()

fetch("https://api.github.com/users/mfaizhussain")
.then((response) => { return response.json() })
.then((data) => {console.log(data)})
.catch((err) => {console.log("err  or")}
)











































// // with await 
// // async function getOne(){
// //     const one = await promiseOne
// //     console.log(one);
    
// // }
// // getOne()

// promiseOne.then( function(){
//     console.log("promise 1 is consumed ");
    
// })

// new Promise(function (res, rej) {
//     setTimeout( ()=>
//         {
//             console.log("asyn 2 task");
//             res()
//         },1000)
// }).then(
//     function() {
//         console.log("asyn 2 is resolved");
        
//     }
// )

// const promiseThree = new Promise(function(res, rej){
//     setTimeout(function(){
//         res({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })


// promiseThree.then(function(user){
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour.then(function(user)
// {
//    return user.username;
// })
// .then((username)=> console.log(username)
// ).catch( (er)=> console.log(` Error: ${er}`)
// )
// async function consumeOne(){
//     try {
//         const res = await promiseOne
//         // data = await res.json()
//         console.log(res);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// consumeOne();

// async function getAllUsers(){
//     try {
//         const res = await fetch('https://api.github.com/users/mfaizhussain')
//         data = await res.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }

//  getAllUsers()

// fetch('https://api.github.com/users/mfaizhussain').then(
//     function(res){
//          return res.json();
//     }
// ).then((dat1)=>
// {
//     console.log(dat1);
//     console.log(dat1.url);
    
// }).catch((err) =>{
//     console.log(err);

// }
    
// ).catch((err)=>
// {
//     console.log(err);
    
// })