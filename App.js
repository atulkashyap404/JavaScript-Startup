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

// const course = {
//     courseName: "JS",
//     price: "999",
//     courseInst: "Atul"
// }

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


// ****** Function and Parameters *********

//  Rest Operator : it mean if we want to pass multiple value in function.

// function calculatorPrice(...num1){
//     return num1
// }

// console.log(calculatorPrice(200, 400, 500));

// passing objects in function.
// const user = {
//     name: "Atul",
//     course: "Prompt",
//     price: 199
// }


// function handleObject (anyobject){
//     console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
// }

// handleObject(user);
// we can pass object directly in function.
// handleObject({
//     name: "Atul",
//     price: 199
// })

// Passing Array in Funtion.
// const arr = [1,2,34,4,56,2];


// function handleArr (anyArr){
//     console.log(`My arra is ${anyArr} type of ${typeof anyArr}`);
// }

// handleArr(arr);



// ***** Hoisting ************


// we can call the function befor the function definition

// console.log(addNum(2))

// function addNum(){
//     return num + 1
// }


//---> Hoistion below

// addTwo(5)

// const assTwo = function(){
//     return num + 2
// }


// ++++++++ this and arrow function +++++++++++


// const user ={
//     username: "Atul",
//     price: 999,

//     welcomeMessage: function(){
//         // we are accessing the username so we can't use directly we use this keyword for refering the current context. 
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }


// user.welcomeMessage()
// console.log("----------------------");
// // here i change the context so now this keyword refering the current chnaged value.
// user.username = "joy";
// user.welcomeMessage()
// console.log("----------------------");
// console.log(this);



// --------> 1st way.
// function one(){
//     let username = "Atul";
//     // here this is printing undefined because the this keyword is not working in function. it is only work in objects.
//     console.log(this.username);
// }

// one();
// --------> 2nd way.
// const one = function(){
//     let username = "Atul";
//     // here this is printing undefined because the this keyword is not working in function. it is only work in objects.
//     console.log(this.username);
// }
// one();


// -----> arrow function.

// const one = ()=>{
//     let username = "Atul";
//     console.log(this.username);
//     console.log(this);
// }

// one()

// -----> basic arrow function

// const arrFun = (num1, num2) =>{
//     return num1 + num2
// }

// implisite return = it mean the return in same like ex given below no need to write return keyword -------->>

// first way to write. 
// const arrFun = (num1, num2) => num1 + num2;

// Second way to write.
// we use like this code in react so learm it.
// const arrFun = (num1, num2) => (num1 + num2);

// what if we have to return object. we have to wrap in ()paranthisies.

// const arrFun = (num1, num2) => ({username: "Atul"});

// console.log(arrFun());



//++++++++++ Immediately invoked function Expressions (IIFE) +++++++++

// globel scope ke pollution hota hai hame to tam IIFE ka use karna pasand karte hai .
// the outer paranthesise is function definition for IIFE.
// (function () {
//     console.log(`DB connect`);
// })(); //<--- excution call


// // writing IIFE in whithout name, arrow funtion.
// ( ()=>{
//     console.log(`DB connect..1`);
// }) ();


// // passing argument in IIFE arrow function.

// ( (name)=>{
//     console.log(`DB ${name} connect..2`);
// }) ("atul")

// ++++++ Control Flow in JavaScript ++++++++++

// if (true) {
//     console.log("I am true")
// }
// if (false) {
//     console.log("I am false")
// }

// falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy Values
// true, "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// ------ Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10

// val2 = null ?? 10

// console.log(val1);

// console.log(val2);

// Terniary Operator

// condition ? true : false
// const ice = 100;
// ice >= 80 ? console.log("lelo") : console.log("mat lo")

// ----> for loop break and continue ---------->>>>>>>

// let myArr = [2,34,56,3,63,6,4];
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// }

// +++++++ High Order array loops +++++++++++++++++++++++++++++++++


// for OF loop ---------------->>>>>>>>>>>

// const arr = [1,2,3,4];

// for (const val of arr) {
//     console.log(`value ${val}`);
// }

// const greeting = ["hello", "hi", "welcome", "Namaste"];

// for (const greet of greeting) {
//     console.log(`${greet}`);
// }

// Maps
// const map = new Map();
// map.set('IN', "India")
// map.set('US', "United State")
// map.set('FR', "France")

// // console.log(map);
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }


//  Object related work

// const myObj = {
//     js:"javaScript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift by apple"
// }


// for (const key in myObj) {
//     console.log(`${key}:${myObj[key]}`);
// }


// for in on array

// const pro = ["js", "java", "py", "ruby","react"];

// for (const key in pro) {
//     console.log(`${key} : ${pro[key]}`);
// }


// for In loop on map

// Maps is not itteratable
// const map = new Map();
// map.set('IN', "India")
// map.set('US', "United State")
// map.set('FR', "France")

// for (const key in map) {
//     console.log(key);
// }


// forEach loop

// const pro = ["js", "java", "py", "ruby","react"];

// using arrow function

// pro.forEach(element => {
//     console.log(element);
// });

// using classic function

// pro.forEach(function (item){
//     console.log(item);
// })


// other way

// function printarr(item){
//     console.log(item);
// }

// pro.forEach(printarr)

// pro.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// });

// const myCoding = [
//     {
//         languagesName: "JavaScript",
//         languagesFileName: "js"
//     },
//     {
//         languagesName: "Python",
//         languagesFileName: "py"
//     },
//     {
//         languagesName: "Ruby",
//         languagesFileName: "rb"
//     }
// ]

// myCoding.forEach( (item)=>{
//     console.log(item.languagesName);
// })


// +++++++++ Filter, Map and Reduce ++++++++++++++++

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// // using filters

// // const newNums = myNums.filter( (num)=> num > 4)

// // const newNums = myNums.filter( (num)=> {
// //     return num > 4
// // })


// // long way logic
// // const newNums = [];
// // myNums.forEach( (nums)=>{
// //     if(nums > 4){
// //         newNums.push(nums);
// //     }
// // })
// // console.log(newNums);

// const books = [
//     {
//         title: 'Book one', genre: 'Fiction', publish: 1987, edition: 1996
//     },
//     {
//         title: 'Book two', genre: 'History', publish: 1987, edition: 2010
//     },
//     {
//         title: 'Book three', genre: 'Science', publish: 1987, edition: 2014
//     },
//     {
//         title: 'Book four', genre: 'Non-Fiction', publish: 1987, edition: 2010
//     },
//     {
//         title: 'Book five', genre: 'Romantic', publish: 1987, edition: 2016
//     },
//     {
//         title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 1989
//     }
// ]


// const showBook = books.filter( (bk) => bk.genre === 'Fiction')
// console.log(showBook);
// const pubDate = books.filter( (pbk) => pbk.edition === 2014)
// console.log(pubDate);




// ++++++++++++++ Map +++++++++++++++++++++++++++++++++

// const myNums = [1,2,3,4,5,6,7,8,9,10]


// const newNumsMap = myNums.map( (num)=> num + 10)

//----------********** method chaining ************------------

// const newNums = myNums
//                         .map( (num) => num * 10)
//                         .map( (num) => num + 1)
//                         .filter( (num) => num >= 40)
// console.log(newNums);



// ---------********** Reduce **********------------- 

// const myNums = [1,2,3,4,5,6]

// // Classic Function
// const myTol = myNums.reduce(function (acc, curr){
//     return acc + curr
// }, 1)

// console.log(myTol);

// // arrow function
// const myTotal = myNums.reduce( (acc, curr) => {
//     return acc + curr
// }, 0)

// console.log(myTotal);