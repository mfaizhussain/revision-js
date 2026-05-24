const myNums = [1, 2, 3, 4]

const nums = myNums.filter(num => num % 2 === 0);
// console.log('myNums', myNums);
// console.log('nums', nums);node

const myTotal = myNums.reduce((acc, num) => {
    // console.log(`accumulator : ${acc}, current: ${num}`);
    return acc + num;
}, 0);
// console.log('myTotal', myTotal);

const shoppingCart = [
    { name: 'laptop', price: 1000 },
    { name: 'phone', price: 1000 },
    { name: 'tablet', price: 1000 }
];

const totalPrice = shoppingCart.reduce(( acc, item) => acc + item.price , 0
)

console.log(totalPrice);
