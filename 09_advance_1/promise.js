
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

// with await 
// async function getOne(){
//     const one = await promiseOne
//     console.log(one);
    
// }
// getOne()

promiseOne.then( function(){
    console.log("promise 1 is consumed ");
    
})

new Promise(function (res, rej) {
    setTimeout( ()=>
        {
            console.log("asyn 2 task");
            res()
        },1000)
}).then(
    function() {
        console.log("asyn 2 is resolved");
        
    }
)

const promiseThree = new Promise(function(res, rej){
    setTimeout(function(){
        res({username: "Chai", email: "chai@example.com"})
    }, 1000)
})


promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then(function(user)
{
   return user.username;
})
.then((username)=> console.log(username)
).catch( (er)=> console.log(` Error: ${er}`)
)
async function consumeOne(){
    try {
        const res = await promiseOne
        // data = await res.json()
        console.log(res);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumeOne();

async function getAllUsers(){
    try {
        const res = await fetch('https://api.github.com/users/mfaizhussain')
        data = await res.json()
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}

 getAllUsers()

fetch('https://api.github.com/users/mfaizhussain').then(
    function(res){
         return res.json();
    }
).then((dat1)=>
{
    console.log(dat1);
    console.log(dat1.url);
    
}).catch((err) =>{
    console.log(err);

}
    
).catch((err)=>
{
    console.log(err);
    
})