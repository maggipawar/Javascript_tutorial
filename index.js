// ***  String Methods ** //

// 1) String indexOf()

// searches from start to end

// not matches found then it returns -1 

// let str = "Ganesh Pawar";

// console.log(str.indexOf('r',6));

// 2) string lastIndexOf()

//searches from end to start.

// not matches found then it returns -1 

// let str = "Ganesh Pawar";

// console.log(str.lastIndexOf('g',8))


// ** Extracting string parts ** //

// There are 3-methods for extracting parts of string.

// slice(start,end);
//substring(start,end);
//substr(start,length);


// 1) slice(start,end);

// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).


// let str = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
// let res = str.slice(0,18);
// console.log(res);

// 2) substring(start,end);
// The difference is that start and end values less than 0 are treated as 0 in substring().
// If you omit the second parameter, substring() will slice out the rest of the string.
//extracts a part of a string and returns the extracted part in a new string.

// let str = "Lorem ipsum, dolor sit amet";

// let res = str.substring(0,4);
// console.log(res);

// 3) substr(start,length);
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.


// ** Replacing string content ** //

// 1) string replace()


// ** Extracting String characters **//
// There are 3 methods t0 extract character from string

// charAt()
//charCodeAt()
// property access[]