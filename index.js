
//**** Section 4 */ Data Types In Javascript

// Six Data Types that are Primitives

// 1=> Undefined:typeof instance === "undefined"
// 2=> Boolean: typeof instance === "boolean"
// 3=> Number: typeof instance === "number"
// 4=> String: typeof instance === "string"
// 5=> BigInt: typeof instance === "bigint"
// 6=> Symbol: typeof instance === "symbol"


// Challenge Time 

//  10 + "20"      //1020
//  9 - "5"       //4  this is a Bug
//  "java" + "script"     //javascript
//  " " + " "     // nathing output
//  " " + 0        //0
//  "Gansh" - "pawar"   //NaN
//  true + true     // 1+1=2
//  true + false    // 1+0=1
//  false + true    // 0+1=1
//  false - true    // 0-1=-1

// console.log(false - true);


// INterview question

// 1) Diffence between null and undefined?

// var iAM;

// console.log(iAM);

// console.log(typeof iAM);

// 2) What is NaN?

// var myPhoneNo = 9876543210;
// var myName = "Ganesh";

// console.log(isNaN (myPhoneNo));
// console.log(isNaN (myName));

// if(isNaN (myPhoneNo)){
//     console.log("Please enter correct number");
// }else{
//     console.log("Number is Correct");
// }

// Challenge time

// NaN === NaN    // false
// Number.NaN === NaN  // false
// isNaN(NaN)         // true
// isNaN(Number.NaN)   // true
// Number.isNaN(NaN)   // true

// console.log(isNaN(Number.NaN));