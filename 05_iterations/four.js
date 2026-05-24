const myObject = {
    js: "JavaScript",
    py: "Python",
    java: "Java",
    cpp: "C++"
}

for (const key in myObject) {
    console.log(`${key} for ${myObject[key]}`);
    
}

const myArray = ["Pizza", "Burger", "Pasta", "Fries"];  
for (const key in myArray) {
    console.log(myArray[key]);

}
