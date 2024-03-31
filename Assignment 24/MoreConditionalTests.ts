
// //Tests for equality and inequality with strings:

 console.log("Equality test with strings:","Apple" === "Apple"); 

// //Tests for inequality with strings:
 console.log("Inequality with strings:", ("Apple" as string) != "orange");

// //Tests using the lower case function:
 console.log("using the lower case function:", "HELLO".toLowerCase() === "hello");

// //Numerical tests involving equality and inequality: greater than and less than, greater than or equal to, and less than or equal to

// //Numerical tests involving equality:
 console.log("Numerical tests involving equality:", 10 === 10);

// //tests involving inequality:
 console.log("tests involving inequality:", (20 as number)!= 10);

// // greater than:
 console.log("greater than:", 15 > 10);

// //less than:
 console.log("less than:", 18 < 20); 

// // greater than or equal to :
 console.log("greater than or equal to :", 30 >= 10);

// //less than or equal to:
 console.log("less than or equal to:", 17 <= 21);

// // Tests using "and" and "or" operators:

// //Tests using "and" operators:
 console.log("Tests using and operators:", 50 === 50 && 100 > 81);

// //Tests using "or" operators:
  console.log("Tests using or operators:", (12 as number) != 15 || false);

// //Test whether an item is in a array:
 const daysName :string[] =["sunday","monday","tuesday","wednesday","thursday","friday"];
 console.log("Test monday an item is in a array:",daysName.includes("monday"));
// Test whether an item is not in a array:
 console.log("Test saturday an item is not in a array:",!daysName.includes("saturday"));


//now false tests:
console.log("\nnow false tests:\n");

//Tests for equality and inequality with strings:

console.log("Equality test with strings:",("Apple"as string) === "Mango"); 

//Tests for inequality with strings:
console.log("Inequality with strings:", ("Apple" as string) != "Apple");

//Tests using the lower case function:
console.log("using the lower case function:", "HELLO".toLowerCase() === "HELLO");

//Numerical tests involving equality and inequality: greater than and less than, greater than or equal to, and less than or equal to

//Numerical tests involving equality:
console.log("Numerical tests involving equality:", (10 as number )=== 20);

//tests involving inequality:
console.log("tests involving inequality:", (20 as number)!= 20);

// greater than:
console.log("greater than:", 10 > 15);

//less than:
console.log("less than:", 21 < 20); 

// greater than or equal to :
console.log("greater than or equal to :", 30 >= 40);

//less than or equal to:
console.log("less than or equal to:", 30 <= 21);

// Tests using "and" and "or" operators:

//Tests using "and" operators:
console.log("Tests using and operators:", (60 as number) === 55 && 100 > 178);

//Tests using "or" operators:
console.log("Tests using or operators:", (12 as number) != 12 || false);

//Test whether an item is in a array:
const dayName :string[] =["sunday","monday","tuesday","wednesday","thursday","friday"];
console.log("Test monday an item is in a array:",!dayName.includes("monday"));

//Test whether an item is not in a array:
console.log("Test saturday an item is not in a array:",dayName.includes("saturday"));