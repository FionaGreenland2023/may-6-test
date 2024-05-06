// const sumall= function (...all){
//     console.log(all);
//     let total = 0;
//    for ( let i of all) {
//     total += i;
//    }
//     return total;
// };
// console.log(sumall(2,3,4,5));


const chars = ["a","e","i","o","u"]
// chars.forEach(function (el){
// console.log(el);
// })
const nums = [1,2,3,4,5];

// console.log(nums.reduce(function(pv,cv){
//     console.log(pv,cv);
//     return pv + cv
// },0)
// );
// nums.forEach(function (el)  {
//     console.log(el);
// });

// const k = nums.map(function(el,index){
//     console.log(el,index);
//     return el + 20;
    
// });
// console.log(k);

const products = [
    { id: 101, name: "Laptop", price: 999.99, stock: 50, rating: 4.8 },
    { id: 102, name: "Smartphone", price: 699.99, stock: 100, rating: 4.5 },
    { id: 103, name: "Headphones", price: 149.99, stock: 200, rating: 4.3 },
    { id: 104, name: "Fitness Tracker", price: 79.99, stock: 150, rating: 4.0 },
    { id: 105, name: "Coffee Maker", price: 49.99, stock: 75, rating: 4.2 }
  ];

  console.table(products);
//   console.table(products.map((product) => {
//     product.price += 1000;
//     return product;
//   }));
console.table(products.filter((product) => product.stock >= 100  ));
// console.table(products.map((product) =>({...product,price:product.price +100})) );
//  const saleProducts = products.map(function(el){
//     el.price += 100 ;
//     return el;
//  });
// const cheap = products.filter(function(el){
//     return el.id === 105
// })

// //  console.table(cheap);

// console.log(chars.reduce(function(pv,cv){
//     console.log(pv,cv);
//     return pv + cv ;
// },""));


// const ArrDatefunn = (dateStr) =>{
//     const  date = new Date();
//     const currentYr = date.getFullYear();

//     const inputStr = new Date(dateStr);
//     const birthYr = inputStr.getFullYear();
//     return currentYr - birthYr;
// };
// console.log("Your Age is");
// console.log(ArrDatefunn("1999-5-6"));

