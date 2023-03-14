//  ** Arrays in Javascript ** //

// 1) indexOf: 
// Element is not available then it returns -1.

// const myFriendsName= ['Ganesh','Vaishali','laxmi','shruti'];
// const arry = myFriendsName.indexOf('laxmi');
// console.log(arry);

// 2) lastIndexOf:
// Element is not available then it returns -1.

// const myFriendsName= ['Ganesh','Vaishali','laxmi','shruti'];
// const arry = myFriendsName.lastIndexOf('ganesh');
// console.log(arry);


// 3) for in loop:
// for in loop returns only Index number of an Array.

// const myFriendsName= ['Ganesh','Vaishali','laxmi','shruti'];

// for (let elements in myFriendsName){
//     console.log(elements);

// }


// 4) For of loop:

// const myFriendsName= ['Ganesh','Vaishali','laxmi','shruti'];

// for(let elements of myFriendsName){
//     console.log(elements);
// }



// 5) forEach()

// const myFriendsName= ['Ganesh','Vaishali','laxmi','shruti'];
// myFriendsName.forEach(function(Element,index,arry){
//     console.log(Element,index,arry);
// });

// 6) includes() method:

// The includes() method returns true if an array contains a specified value.

// The includes() method returns false if the value is not found.

// The includes() method is case sensitive.

// Syntax
// array.includes(element, start)

// search from forward direction only.

// const myFriendsName= ['Ganesh','Vaishali','laxmi','shruti'];
// const arr = myFriendsName.includes('laxmi',1);
// console.log(arr);

// 7) find() method:
// The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.

// The find() method returns undefined if no elements are found.

// The find() method does not execute the function for empty elements.

// The find() method does not change the original array.

// Syntax
// array.find(function(currentValue, index, arr),thisValue)

// const ages = [4,12,16,18,20];
// let allAges = ages.find(function(age){
//     return age > 17;
// });

// console.log(allAges);

// 8) Array findIndex()

// The findIndex() method executes a function for each array element.

// The findIndex() method returns the index (position) of the first element that passes a test.

// The findIndex() method returns -1 if no match is found.

// The findIndex() method does not execute the function for empty array elements.

// The findIndex() method does not change the original array.

// Syntax
// array.findIndex(function(currentValue, index, arr), thisValue)

// const ages = [4,12,16,18,20];
// let allAges = ages.findIndex(function(age){
//     return age > 17;
// });

// console.log(allAges);

// 9) Array filter()

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

// The filter() method returns []  empty array if no match is found.


// Syntax
// array.filter(function(currentValue, index, arr), thisValue)

// const ages = [4,12,16,18,20];
// let allAges = ages.filter(function(ages){
//     return ages > 3;
// });

// console.log(allAges);

// 10) Array sort()
// The sort() sorts the elements of an array.

// The sort() overwrites the original array.

// The sort() sorts the elements as strings in alphabetical and ascending order.
// Syntax
// array.sort(compareFunction)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = fruits.sort();
// fruits.reverse();
// console.log(result);

// const points = [40, 100, 1, 5, 25, 10];

// let result = points.sort(function(a,b){
//     return b-a;

// })

// console.log(result);