
const nums = [2, 3, 6, 18, 19, 20];

// for (const num of nums) {
//     console.log(num);
// }

const mYNums = nums.map(num => num * 2);
console.log('mYNums', mYNums);

// const myNums = nums.filter(num => 
//     num % 2 === 0
// );
// const myNums = nums.filter((num) => 
//     num % 2 === 0
// );

const myNums2 = nums.filter((num) => {
    return num % 2 === 0;
});
console.log('myNums2', myNums2);


const newNums = [];
// nums.forEach(num => {
//     if(num > 4) {
//         newNums.push(num);
//     }
    
// });

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const selectedBooks = books.filter(book => book.genre === "Non-Fiction" );

const returnBooks = books.filter( (book) => book.genre === "History")

returnBooks.forEach( (book) =>
{
    console.log(book.title);
    
})
console.log(returnBooks);





