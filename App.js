// const accountId = 19131034;
// let accountEmail = "atulkumar@gmail.com";
// var accountPass = "@tul123";
// accontCity = "Dehradun";
// let accountState;

// console.table([accountId, accountEmail, accountPass, accontCity, accountState,]);


//  null is object in JS.
// undefined is a type in JS.


// let score = 33

// console.log(typeof score);



// ***************** Operations ******************************

// let value = 3;
// let negValue = -value;
// console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2%2);
// console.log(2*2);
// console.log(2**2);

// console.log(  );


// ********* Stack and Heap Memory ******************************

// Primitive Data Type use ------> Stack Memory
// in Stack the variable copy are used.


// Non-Primitive use the --------> Heap Memory
// in heap pass the referance which is the passing original value.


// ************ Strings ***********************

// *** String interpolation *********
// const name = "Atul";
// const repoCount = 15;
// console.log(`Hello my name is ${name} and repoCount are ${repoCount}`);

// Other way to define strings with new keywords


// const str = new String('Atul'); // 2nd way to declare.
// const str = "Atul"; // 1st way to declare.
// console.log(str);


// ****Nums and Maths ****************************

// const score  = 400;
// const balance  = Number(100);
// console.log(balance);



// ************** Math ****************************


// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random()*(max - min + 1)) + min);


// ******* Date and Time ****************************

// let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());


// ****** Array ************

// const myArr  = [1,2,3,4,5,6];
// console.log(myArr);

// slice and splice


// const myn1 = myArr.slice(1, 3);
// console.log(myn1);
// console.log(myArr);
// const myn2 = myArr.splice(1, 3);
// console.log(myn2);
// console.log(myArr);


//  *********** Objects in depth ****************************

// Declearing Symbol varibale

// const mySym = Symbol("key1");

// const userA = {
//     name: "Atul kumar",
//     accountId: 19131034,
//     rollNo: 2201106,
//     cityName: "Dehradun",
//     collegeName: "GEHU",
//     // symbol declear in Object;
//     [mySym]: "myKey1"
// }

// Object Printing way 
// console.log(userA.rollNo);
// console.log(userA["cityName"]);
// console.log(userA["collegeName"]);
// console.log(userA[mySym]);


// changing value in object

// userA.collegeName = "GEU";
// console.log(userA["collegeName"]);


// freezing value in object that nobody can change.
// Object.freeze(userA);

//after freezing objet try to update value collegeName. 
// userA.collegeName = "GEU";
// console.log(userA["collegeName"]);


// Declearing function in Object

// userA.greeting = function(){
//     console.log("Hello Buddy");
// }


// userA.greeting2 = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }


// Printing the greeting
// console.log(userA.greeting);
// console.log(userA.greeting());


// console.log(userA.greeting2);
// console.log(userA.greeting2());


// ************ Objects in Depth part 2 *******************************

// Combining Objects

// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "c", 4: "d"};

// // const obj3 = {obj1, obj2};
// // const obj4 = Object.assign({}, obj1, obj2);
// const obj5 = {...obj1, ...obj2};
// console.log(obj5);


// database send data in Array Object  like:

// const datas = [
//     {
//         name: "ak",
//         id: 123,
//         email: "user@example.com"
//     },
//     {
//         name: "ab",
//         id: 123,
//         email: "user@example.com"
//     },
//     {
//         name: "kk",
//         id: 123,
//         email: "user@example.com"
//     },
//     {
//         name: "dk",
//         id: 123,
//         email: "user@example.com"
//     },
//     {
//         name: "mk",
//         id: 123,
//         email: "user@example.com"
//     }
// ];


// console.log(datas[1].id);

// const tinderUser = {
//     name: "Atul",
//     userId: "1913ak",
//     status: "Single"
// }

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// ****** Objects Destructuring and JASON API ********************

const course = {
    courseName: "JS",
    price: "999",
    courseInst: "Atul"
}

// ******* Destructuring ***********

// const {courseInst} = course;
// console.log(courseInst);
// we can write like this also 
// const {courseInst: ci} = course;
// console.log(ci);

// Object Destructuring

// const navbar = ({company}) =>{

// }

// navbar(company = "hitesh");


// *********** API ******************** 

// JSON
// {
//     "name": "Atul",
//     "courseINss": "JS",
//     "price": "free"
// }

