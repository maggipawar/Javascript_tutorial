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

