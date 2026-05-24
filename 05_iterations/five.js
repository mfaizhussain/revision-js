const coding = ["Js", "Python", "Java", "C++", "Ruby"];

for (const language in coding) {
    console.log(language);
}

// coding.forEach(language => console.log(language));

const myCoding = coding.map(language => language.toUpperCase());
// console.log('myCoding', myCoding);

// coding.forEach(language => console.log(language));

// coding.forEach( (item, index, arr) => {
//     console.log(`item: ${item}, index: ${index}, arr: ${arr}`);
// });


const myCoding2 = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding2.forEach( (item) => {
    
    console.log(item.languageName);
} )