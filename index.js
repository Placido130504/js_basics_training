//  console.log("Hello, World! index.js");

// let x = 5;
// const y = 10;

// function addNumbers(x, y) {
//     return x + y;

// }
// console.log (x);
// console.log (y); 

// console.log(addNumbers(x, y));

//  let z = addNumbers(x, y);
// console.log(z);

// let w = (x,y) =>  x + y; 
// console.log(w(x,y));

// function createUser(name, age, email = `${name}@gmail.com`) {
//     return {
//         name: name,
//         age: age,
//         email: email
//     };
// }
// console.log(createUser("blue", 30));
// console.log(createUser("green", 25, "green@yahoo.com"));

// function sumAll(...numbers) {
//     let total = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     return total;
// }

// console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// let callbackFunction = (callback, delay = 5000) => {
//     console.log("Before callback");
//     setTimeout(() => {
//         callback();
//         console.log("After callback");
//     }, delay);
// }
// callbackFunction(() => console.log("Inside callback"));

//array functions
let numbers = [1, 2, 3, 4, 5,0,-11,-2,-3,-4,-5];
//  numbers.forEach((num) => console.log(num * 2));
// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// const polynum_by4 = numbers.map((num) => num * 4);
// console.log(polynum_by4);
// numbers = numbers.filter((num) => num % 2 == 0);
// console.log(numbers);
// const findNum = numbers.find((num) => num > 3);
// console.log(findNum);
// const sortednumbers = numbers.sort();
// console.log(sortednumbers);
// let greaterthan = numbers.every((num) => num > -20);
// console.log(greaterthan);
// const somegreaterthan = numbers.some((num) => num > 5);
// console.log(somegreaterthan);
// const uniqueNumbers = [...new Set(numbers)];
// console.log(uniqueNumbers);

// const orders = [
//   { id: 1, product: "Laptop", quantity: 2, price: 1000 },
//   { id: 2, product: "Mobile", quantity: 3, price: 700 },
//   { id: 3, product: "iPad", quantity: 4, price: 600 }
// ];

// const getPrices = (orders) => {
//   return orders.map(order => order.price);
// };
// console.log(getPrices(orders));

// const getTotalPricePerOrder = (orders) => {
//   return orders.map(order => ({
//     ...order,
//     totalPrice: order.quantity * order.price
//   }));
// };

// console.log(getTotalPricePerOrder(orders));
// const user = {
//     name: "John Doe",
//     age: 30,
//     email: "hehehaha@gmail.com",
//     address: {
//         street: "456 Elm St",
//         city: "Los Angeles",
//         state: "CA",
//         zip: "90001"
//     }
// };

// const { name: username, age } = user;
// console.log("name:", username);
// console.log("age:", age);
// console.log("email:", user.email);
// console.log("street:", user.address.street);
// console.log("city:", user.address.city);
// console.log("state:", user.address.state);
// console.log("zip:", user.address.zip);

// const updatedUserandActivity = { ...user, role: "admin", activity: "active" };
// console.log(updatedUserandActivity);

// user.address = "123 Main St";
// console.log(user);

// //nullish coalescing operator
// const address = user.address ?? "Address not available";
// console.log(address);

// //modules and import/export
// import { greet, calculateArea } from './utils.js';
// console.log(greet("Alice"));
// console.log(calculateArea(5, 10));
// //promise and async/await
// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { 
//             const serverAvailable = true;

//             if (serverAvailable) {
//                 const data = { id: 1, name: "Sample Data" };
//                 resolve(data);
//             } else {
//                 reject("Error: Unable to fetch data from the server.");
//             }
//         }, 1000);
//     });
// };
// fetchData().then((data) => {
//     console.log("Data fetched successfully:", data);
// }).catch((error) => {
//     console.error("Failed to fetch data:", error);
// });

// const fetchpost = () => {
//     return fetch ("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//     });
//     return response.json();
//     }
//async await
// const fetchuserASYNCAWIT = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     if (!response.ok) {
//         throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     console.log(data);
//     return data;
// }
// fetchuserASYNCAWIT().then((data) => {
//     console.log("User data fetched successfully:", data);
// }).catch((error) => {
//     console.error("Failed to fetch user data:", error);
// });

// const axios = require('axios');
// const fetchuserAXIOS = async () => {
//   try {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to fetch user data using Axios: " + error.message);
//   }
// };

// fetchuserAXIOS()
//   .then((data) => {
//     console.log("User data fetched successfully using Axios:", data.slice(0, 5));
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });
//readline
// const readline = require('readline/promises');
// const { stdin: input, stdout: output } = require('process');

// async function main() {
//   const rl = readline.createInterface({ input, output });
//   const name = await rl.question('enter your name: ');
//   console.log(`Hello, ${name}!`);
//   rl.close();
// }

// main().catch((error) => {
//   console.error(error);
// });
