 // singleton object
 const tinderUser = new Object(); // this is a constructor function that creates an empty object

tinderUser.id = "123abc";
tinderUser.name = "Faiz";
tinderUser.isLoggedIn = false;
//  console.log(tinderUser);

const regularUser = {
    email: "faiz@example.com",
    fullname: {
        userfullname: {
            firstname: "Faiz",
            lastname: "Hussain"
        }

    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};  
const obj4 = {...obj1, ...obj2}; // this will merge the two objects and return a new object

const obj3 = Object.assign({}, obj1, obj2); // this will merge the two objects and return a new object

// console.log(obj3);
// console.log(obj4);

const arr =
[
    {
        email:"faiz@example.com",
        isLoggedIn: false
    },
    {
        email:"john@example.com",
        isLoggedIn: true
    },
    {
        email:"jane@example.com",
        isLoggedIn: false
    }
]

// console.log(arr[0].email);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty("name"));


const course = {
    courseName: "JS in hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

 // const {courseInstructor: instructor} = course; // this is called destructuring assignment
 // console.log(instructor);

//  {
//     "name": "Hitesh",
//     "course": "JS in hindi",
//     "price": 999
//  }

[
    {},
    {},
    {}
]





 