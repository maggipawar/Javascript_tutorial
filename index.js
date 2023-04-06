// ** Advanced Javascript **  //

// 1) Event Propagation (Event Bubbling and Event Capturing).
// 2) Higher Order Function
// 3) Call Back Function
// 4) Function Currying
// 5) CallBack Hell
// 6) AJAX call using XMLHttprequest
// 7) JSON
// 8) Fetch API
// 9) Promisses
// 10) Async-await
// 11) Error Handling

// 1) Event Propagation (Event Bubbling and Event Capturing).

// i) What is Event Propagation?
// Ans=> The Event Propagation Mode determines in which order the elements receive the Event.
// but By default Event Bubbling mode Captured.

// ii) What is Event Capturing?
// Ans=> With Event capturing, the event is first captured by the outermost  element  and
// propagated to the inner element.

// capturing is also called "trickling", which helps remember the propagation order.

// iii) What is Event Bubbling?
// Ans=> With Event Bubbling,the event is first captured and handled by the innermost Element
// and then propagated to the outer Element.

// NOte: To stop Event Propagation we can use event.stopPropagation() method.

// 2) Higher Order Function.

// i) Higher Order Function.
// Ans=> Function which takes another function as an arguments is called HOF.

// ii) Call Back Function.
// Ans=> Function which get passed as an arguments to another function is called CBF.

// EX:
// const add = (a,b) => {   /// call back function
//     return a + b;
// }

// const sub = (a,b) => {  // call back function
//     return a - b;
// }

// const mul = (a,b) => {       // call back function
//     return a * b;
// }

// const calculator = (num1,num2,operator) => {    // higher order function
//     return operator(num1,num2);
// }

// console.log(calculator(5,2,add));

// 4) Function Currying

// Ex:

// function sum (num1){
//     return function(num2){
//         return function(num3){
//             console.log(num1+num2+num3);
//         }

//     }
// }

// sum(5)(3)(8);

// 7) JSON:
//   JSON havin two mainly methods which used to convert JSON to js object and js
//   object JSON.

// i) JSON.stringify() : convert js object into JSON string.
// ii) JSON.parse(): convert JSON string into js object.

// 8) Fetch API

// 9) Promises:

// i) fullfilled
// ii) reject

// 10) Async-await

// 11) Error Handling

// 1) Hoisting in javascript
// 2) scope chain
// 3) Lexical scoping in javascript
// 4) Use strict mode
// 5) This keyword
// 6) Closure in javascript
// 7) Whar is Asynchronous javascript programming?
// 8) What is Event Loop?

// 3) Lexical scoping in javascript

// Lexical scoping means now, the inner function can get access  to their parent functions
// variables but the voice verss is not true.

// EX:
//  let a = "Hello guys";
//  const first = () => {
//     let b = "How are you?";

//     const second = () =>{
//         let c = " i am fine ,thanks";

//         // console.log(a+b+c);
//     }
//     second();
//     console.log(a+b+c);
//  }
//  first();

// 6) Closure in javascript

// In other words, a closure gives you  access to an outer functions scope
// from an inner function.

// 8) What is Event Loop?

//***************************************************************************** *//

// console.log(NaN(NaN));

// How to reverse the String

// function reverseString(str) {
//   return str.split("").reverse("").join("");
// }
// console.log(reverseString("hello"));

//   const mulFun = () => {
//     for (var i = 1; i <= 9; i++) {
//       if (i % 3 == 0) {
//         console.log("Fizz");
//       } else if (i % 5 == 0) {
//         console.log("Buzz");
//       } else if (i % 3 == 0 && i % 5 == 0) {
//         console.log("Fizz-Buzz");
//       }
//     }
//   };
//   mulFun();

// let a = [];
// let b = [];
// console.log(a==b); // it compates with array memory and memory always not same.
// console.log(a===b);
// console.log(typeof(a));

// let a = []; // a passing memory location to b will be same
// let b = a;
// console.log(a==b);
// console.log(a===b);

// let a = [20];
// let b = [20];
// console.log(a[0]==b[0]); // Here comparing array elements not memory location
// console.log(a[0]===b[0]);

// Remove duplicate elements from an Array in Javascript with 4-ways

// var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
// const arr = [1,2,3,2,3];

// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates(arr));

// var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr));

// Remove Duplicate characters in string

//       var x = "GaneshG";
// var removeDup = [...new Set(x. split(","))];
// console.log(removeDup);

// let data = fetch("https://jsonplaceholder.typicode.com/users");
// data.then((res1) =>{
//   console.log(res1.status);
//   console.log(res1.ok);
//   return res1.json();
// }).then((res2) =>{
//   console.log(res2);
// })

// var scope = "global scope";
// function outer() {
//   var scope = "outer";
//   function inner() {
//     var scope = "inner";
//     // console.log(scope);
//   }
//   inner();

//   console.log(scope);
// }
// console.log(scope);

// outer();

//   const x={foo:1}
//   function scope(){
//     delete x.foo;
//     return x.foo;
//   }
//  console.log(scope());

// IIFE Immediately invoked function expression in javascript

// (function(fName){
//   // var fName='Ganesh';
//   console.log("My Name is:" + fName );
// })('ReactJs');

// Closure in Javascript

// function outer(b){
//   let a = 10;
//   function inner(){
//     let sum = a+b;
//     console.log(`sum of two no is: ${sum}`);
//   }
//   return inner;
// }
// let inn = outer(10);
// // console.log(inn);
// inn();

//*** Promise in Javascript***//
// 1) Promise producing code

// let prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const roll_no = [1, 2, 3, 4, 5];
//     resolve(roll_no);
//   }, 2000);
// });

// const getBiodata = (indexData) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (indexData) => {
//         let biodata = {
//           name: "Ganesh",
//           age: 30,
//         };
//         resolve(
//           `My Roll no is: ${indexData} and name is ${biodata.name} and age is ${biodata.age}`
//         );
//       },
//       2000,
//       indexData
//     );
//   });
// };

// *** Promise consuming code ***//

// prom
//   .then((rollNo) => {
//     console.log(rollNo);
//     return getBiodata(rollNo[1]);
//   })
//   .then((roll) => {
//     console.log(roll);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// *** Async and await in Javascript ***//

// 2) Promise Produce the code

// let prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const roll_no = [1, 2, 3, 4, 5];
//     resolve(roll_no);
//   }, 2000);
// });

// const getBiodata = (indexData) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (indexData) => {
//         let biodata = {
//           name: "Ganesh",
//           age: 30,
//         };
//         resolve(
//           `My Roll no is: ${indexData} and name is ${biodata.name} and age is ${biodata.age}`
//         );
//       },
//       2000,
//       indexData
//     );
//   });
// };

// Promise Consume the code  by using Async and await

//  async function getData() {
//   try{
//     const rollnoData = await prom;
//   console.log(rollnoData);
//   const biodatas = await getBiodata(rollnoData[1]);
//   console.log(biodatas);
//   return biodatas;
//   } catch(error){
//     console.log(` The error:${error}`);
//   }
// }
// let getName = getData().then((myName)=>{
//   console.log(myName);
// })

// 3) fetch() Data with Promise  ****//

// fetch("https://jsonplaceholder.typicode.com/users").then((apiData)=>{
//   // console.log(apiData);
//   return apiData.json();
// }).then((finalData)=>{
//   console.log(finalData);
// }).catch((error)=>{
//   console.log(error);
// })

//*** fetch() data by using Async and await  ***//

//   async function getData(){
//     try{
//       const apiData = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonData = await apiData.json();
//     console.log(jsonData);
//     }
//     catch(error){
//       console.log(error);
//     };
//      }
//   getData();

// const getdat = () =>{
//     document.getElementById('demo').innerHTML="Good Morning";
// }

// const changeColor = () =>{
//     document.getElementById('innerDiv').style.backgroundColor='red';
// }

//******** Call() apply() and bind() methods */

// const user1 = {
//   name: "peter",
//   age: 25,
//   feature: function (email, edu) {
//     console.log(`Myname is ${this.name} and i am
//             ${this.age} years old, my email id ${email}
//             i am passed out  ${edu} from pune univercity`);
//   },
// };
// user1.feature('peter@gmail.com','B.E');

// const user2 = {
//   name: "jony",
//   age: 30,
// };

// user1.feature.call(user2, "peter@gmail.com", "Diploma");
// user1.feature.apply(user2, ["peter@gmail.com", "Diploma"]);

//******* bind() method */

// const user1 = {
//   name: "peter1",
//   age: 25,
// };

// const user2 = {
//   name: "peter2",
//   age: 26,
// };

// const user3 = {
//   name: "peter3",
//   age: 27,
// };

// function feature(email, education) {
//   console.log(`Myname is ${this.name} and i am
//             ${this.age} years old, my email id ${email}
//             i am passed out  ${education} from pune univercity`);
// }

// let fee1 = feature.bind(user1);

// fee1("peter@gmail.com", "B.E");

// ****** INTERVIEW QUESTION OF JAVASCRIPT ********//

// 1)

// const data = new Set([1,1,2,3,4]);
// console.log(data); // return unique not repeat.

// 2)

// let data={name:'ganesh'}
// console.log(delete data.name); // return true

// 3)
// let data={name:'ganesh'}
// console.log(delete data); // return false we can not delete object direct.

// 4)
// const data = ['peter','jony','lara'];
// const [y]=data;
// console.log(y);  // return peter destructuring of an array.

// 5)
// const data = ['peter','jony','lara'];
// const [,y]=data;
// console.log(y);  // return direct 2nd element as output destructuring of an array.

// 6)
// const data ={name:'peter',age:20,game:'hockey'}
// const {name}=data;
// console.log(name);  // it will return direct output object destructing

// 7)
// let data = {name:'peter',age:30};
// let info = {city:'jony',email:'jony@gmail.com'};
// dataInfo = {...data,...info}
// console.log(dataInfo);  // using spread operator we can join two object.

// 8)
// let data = {name:'peter',age:30};
// let info = {city:'jony',email:'jony@gmail.com'};
// dataInfo = {data,...info}
// console.log(dataInfo);  // using spread operator we can join two object.

// 9)
// let data = {name:'peter',age:30};
// let info = {city:'jony',email:'jony@gmail.com',age:40};
// dataInfo = {...data,...info}
// console.log(dataInfo);  // using spread operator we can join two object.

// 10)

// const name ='peter';
// console.log(name()); // error name is not a function

// 11)
// const result = false || {} || null;
// console.log(result);  // return empty {}

// 12)
// const result = null || false || "";
// console.log(result);  // when all values are negative that time it return last value.

// 13)
// const result = [] || 0 || true;
// console.log(result);  // return empty []

// 14)
// console.log(Promise.resolve(5));  // return promise fullfilled

// 15)
// JSON.parse();
// parses JSON data to javscript value.

// 16)
// let name = 'Ganesh';
// function getData() {
// console.log(name);
// let name = 'pawar';
// }
// getData();   //  ReferenceError: Cannot access 'name' before initialization

// 17)
// let name = 'Ganesh';
// function getData() {
// console.log(name);
// }
// getData();   // return Ganesh

// 18)
// console.log(`${(x => x)('i love')} to program`); // o/p: i love to program

// 19)
// const name = 'Ganesh';
// console.log(!typeof name === 'object'); // o/p: false
// console.log(!typeof name === 'string');  // o/p: false

// // 20)
// const name = 'Ganesh';
// const age = 30;
// console.log(isNaN(name)); // true
// console.log(isNaN(age));  //false

// 21)
// let person = {name:'peter'};
// Object.seal(person);
// person.name='Pawar';
// console.log(person);  // we can modify value of object ,but not add new value

// 22) remove first element
// let data = [2,6,9,5];
// let result = data.shift();
// console.log(result);
// console.log(data);

// 23) remove last element
// let data = [2,6,9,5];
// data.pop();
// console.log(data);

// 24) check any value is odd or even
// let num = 30;
// console.log(num%2); // remaining value is Zero means Even or remaining value is 1 means odd

// // 25)
// let data = {name:'peter'};
// delete data.name;
// console.log(data); // o/p {}

// // 26)
// let data = "true";
// console.log(typeof !data); // boolean false

// 27)

// let data = "true";
// console.log(!!data); // boolean true

// 28)
// Difference between map anf forEach function

// // 29)
// const data = ['peter','jony','rose'];
// delete data[1];  // it contains empty space
// console.log(data);

// 30)

// const data = ['peter','jony','rose'];
// delete data[1];
// console.log(data.length); // o/p:3

// 31) merge two Array
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [...arr1,...arr2];
// console.log(arr3); // o/p: [1, 2, 3, 4, 5, 6]

// 32)
// let arr1 = [1,2,3,4];
// let arr2 = [4,5,6];
// let arr3 = [...arr1,...arr2];
// console.log(arr3); // o/p: [1, 2, 3, 4, 4, 5, 6]

// 33)
// let c = 3**3;
// console.log(c); // o/p: 27 square of 3*3*3

// 34)
// let a = 2;
// setTimeout(()=>{
//   console.log(a);
// },0)   // o/p: 100
// a=100;

// 35)
// let a = 20;
// let A = 30;
// console.log(A); // o/p: 30

// 36)
// let A10 = 'like';
// let 10A = 'ok';
// console.log(A10);  // o/p: like
// console.log(10A); // o/p: error

// 37)
// let a = "like";
// let b = `like`;
// console.log(a === b); // o/p: true

// 38)
// let a = 1;
// let b = 2;
// console.log(--b === a); // o/p: true --b=1

// 39)
// let a = 1;
// let b = 1;
// let c = 2
// console.log(a === b === --c); // o/p: false rason a===b is true and true===--c and c is number so that it false.

// // 40)
// console.log(3*3); // o/p: 9
// console.log(3**3); // o/p: 27
// console.log(3***3); // o/p: syntax error

// 41)
// console.log(a);
// var a; // o/p: undefined

// 42)
// console.log(a); // o/p: a is not defined

// 43)
// console.log([[[[]]]]); // o/p: nested Array [[[[]]]]

// 44)
// how to know os name?
// ans: navigator.platform on console

// 45)
// let for = 100; // o/p: error

// 1)find out unique age from an array of object

// const array = [
//     {
//       name: "Joe",
//       age: 17,
//     },
//     {
//       name: "Bob",
//       age: 17,
//     },
//     {
//       name: "Joe",
//       age: 35,
//     },
//     {
//         name: "jony",
//         age: 35,
//       },
//       {
//         name: "Bob",
//         age: 35,
//       },
//   ];
//   const unique = [...new Set(array.map((item) => item.age))];
//   console.log(unique);

// 2)find out unique Name from an array of object
// const array = [
//     {
//       name: "Joe",
//       age: 17,
//     },
//     {
//       name: "Bob",
//       age: 17,
//     },
//     {
//       name: "Joe",
//       age: 35,
//     },
//     {
//         name: "Jony",
//         age: 35,
//       },
//   ];
//   const unique = Array.from(new Set(array.map((elem)=>elem.age)));
//   console.log(unique);

// 3) Reverse the given string

// let str = "Ganesh Is Software";
// let result = str.split("").reverse().join("");
// console.log(result);

// 4)multiply an array with 2 number  by using map method

// const arr = [1,2,3,4,5,6,7,8];
// let result = arr.map((elem)=>elem * 2);
// console.log(result);

// 5)multiply an array with 2 number  by using map method with function

// const arr = [1, 2, 3, 4];

// function dubleArray(elem){
//     return elem * 2;
// }
// let result = arr.map(dubleArray);
// console.log(result);

// function dubleArray() {
//   let result = arr.map((elem) => elem * 2);
//   // return result;
//   console.log(result);
// }
// dubleArray();

//  let data = dubleArray() ;
// console.log(data);

// 6)find out which element is greater than 10 in given an array

// const arr = [1,2,11,12];
// let data = arr.filter((elem)=>elem > 10);
// console.log(data);

// function greaterThan10(elem){
//     return elem > 10;
// }
// let result = arr.filter(greaterThan10);
// console.log(result);

// 7) result should be only odd number

// const arr = [1,2,3,4,5,6,7,8];
// let result = arr.filter((elem)=>elem % 2 );
// console.log(result);

// 8) result should be only even number

// const arr = [1,2,3,4,5,6];
// let result = arr.filter((elem)=>elem % 2 ===0);
// console.log(result);

// let result = Array.from(new Set(arr));
// console.log(result);

// 9) result will be  odd number and even number by using function

// const arr = [1, 2, 3, 4];
// const filterData = (elem) => {
//   return elem % 2;
// };

// let result = arr.filter(filterData);
// console.log(result);

// 10) Find sum of numbers with Rest Parameters

// const findSum =(...numbers) =>{
// var sum=0;
// numbers.forEach((num)=>{
// sum = sum + num;
// });
// return sum;
// }
// console.log(findSum(1,2,3));

// 11) find out max number by using spread operator

// var array1 = [3, 5, -10];
// var array2 = [6, 2, -7, 3, 5];
// console.log(Math.max(3, ...array1, 10, ...array2, 11));

// var fruits = ["apple", "mango", "pineapple"];
// var allFruits = ["grapes", ...fruits, "strawberry"];

// console.log(allFruits);

// 12) How to join two objects in javascript

// let user1 = {
//   name: "peter",
//   age: 30,
// };

// const user2 = {
//   city: "Jony",
//   email: "peter@gmail.com",
// };

// let result = {
//   ...user1,
//   ...user2,
// };

// console.log(result);

// const arr = [5,1,3,2,6];

// let result = arr.map((elem)=> elem * 2 );
// console.log(result);

const getData = () =>{
    document.getElementById("demo").innerHTML="Pawar";
    }
  