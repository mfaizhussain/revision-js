const marvelHeros = ["Thor", "Iron Man", "Captain America", "Hulk", "Black Widow"];
const dcHeros = ["Superman", "Batman", "Wonder Woman"];


// marvelHeros.push(dcHeros); 
// const marvelHeros = marvelHeros.concat(dcHeros)
// console.log(marvelHeros[5][1]); 


// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// const allNewHeros = [...marvelHeros, ...dcHeros] // spread operator
// console.log(allNewHeros);

const anotherArr = [1, 2, 3, 4, [5, 6, 7], 8, 9, [10, [11, 12]]];
console.log(anotherArr);

const usableAnotherArr = anotherArr.flat(Infinity); // flat(depth) depth is the level of nesting to flatten, default is 1, Infinity is to flatten all levels
console.log(usableAnotherArr);
