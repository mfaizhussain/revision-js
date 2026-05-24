const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map((val) =>
{
     return val +10;
}).map( (val) => val + 1).filter( (val) => val >= 20)

console.log(newNums);

// const totalCart = myNumbers.reduce(((acc, curr) => acc + curr), 45)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

totalCart = shoppingCart.reduce(((acc, item) => {
    return item.price + acc
}
), 0)
console.log(totalCart);


