// ** 2015 ES6 FEATURES** //

// Object Destructuring

// let myBio = {
//     myFName : "Ganesh",
//     myLName : "pawar",
//     myAge  : 30
// }

// let {myFName,myLName,myAge} = myBio;

// console.log(myAge);

// Array Destructuring

// let myBio = ['Ganesh', 'pawar',30];

// let [myFName,myLName,myAge,myDegree='CSC'] = myBio;

// console.log(myDegree);

// Object properties

// 1) Properties get dynamic value

// let myFName = 'Ganesh';

// let myBio = {
//     [myFName] : "How are you?",
//     myAge :30
// }

// console.log(myBio);

// 2) properties: key ,value are same then no need write pair,we can write single value.

// let myFName = 'Ganesh';
// let myAge = 30;

// let myBio = {
//     myFName,
//     myAge
// }

// console.log(myBio);

//Spread operator for Array

// let myBio = ['Ganesh', 'pawar',30];

// let myDetails = [...myBio,'Laxmi'];

// console.log(myBio);
// console.log(myDetails);

// ** 2016 ES7 FEATURES**//

// 1) Array includes() If element is avalable then it returns true otherwise return false.

// let myBio = ['Ganesh', 'pawar',30];

// let result = myBio.includes(31);
// console.log(result);

// 2) Exponatation operator

// console.log(2**2); // 4

// ** 2018 ES8 FEATURES** //

// 1) String padding:: provinding padding to lemements

// 2) Object.values and Object.entries

// let myBio ={name : 'ganesh', myAge : 30}

// console.log(Object.values(myBio));
// console.log(Object.entries(myBio)); // it converts from Object to an Array

// let arrObj = Object.entries(myBio);

// console.log(Object.fromEntries(arrObj)); // it converts from an Array to back Object

// 3)Rest/Spread Operator for Object

// let myBio = {myFName : 'Ganesh', myAge : 30};

// let myDetails = {...myBio,degree : 'CSC'};

// console.log(myBio);

// console.log(myDetails);

// ** 2019 ES9 FEATURES** //

// 1) Flat() method

// let arr = [
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7','zone_8',['zone_7',['zone_7','zone_8']]]
// ]

// console.log(arr.flat(3));
