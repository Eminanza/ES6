"use strict";

// ---------------------------------------------
// Function with default parameter 
// ---------------------------------------------

const func = (a, b = 10) => {
    console.log(a + b); 
}
   
func(20);

// ---------------------------------------------
// Forof in array + block scoped variable
// ---------------------------------------------

let arr = [5,2,3,4,1];

for (let item of arr) {
    console.log(item);
}

// ---------------------------------------------
// Forof in a string 
// ---------------------------------------------

let s = "This is a string";

for (let character of s) {
    console.log(character);
}

// ---------------------------------------------
// Spreading on arrays and element
// ---------------------------------------------

const sumElements = (...arr) => {
    console.log(arr);

    let total = 0;
    for (let item of arr) {
        total += item;
    }
    console.log(total);
}

sumElements(10,20,30,40,50)

// ---------------------------------------------
// String templating
// ---------------------------------------------

let customer = {name : "Mike"};

let str = `Hello ${customer.name}, how are you ?`

console.log(str);

// ---------------------------------------------
// Destructuring + string templating
// ---------------------------------------------

const logUpperCase = ({text, message}) => {
    this.string = text.toUpperCase();
    console.log(`Actually, ${this.string} ${message} !`);
}
logUpperCase({ text: "es6 rocks", message: "for life" });

// Of array

const printFirstAndSecondElement = ([first, second])=> {
    console.log('First element is ' + first + ', second is ' + second)
}

const printSecondAndFourthElement = ([, second, , fourth]) => {
    console.log('Second element is ' + second + ', fourth is ' + fourth)
}

var array = [1, 2, 3, 4, 5]

printFirstAndSecondElement(array)
printSecondAndFourthElement(array)


// Of object

const printBasicInfo = ({firstName, secondName, profession}) => {
	console.log(firstName + ' ' + secondName + ' - ' + profession)
}

var person = {
  firstName: 'John',
  secondName: 'Smith',
  age: 33,
  children: 3,
  profession: 'teacher'
}

printBasicInfo(person)

// ---------------------------------------------
// Mapping
// ---------------------------------------------

var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9'];
var messages = ids.map(value => `ID is ${value}`);

console.log(messages);

// ---------------------------------------------
// Promises
// ---------------------------------------------

var wait1000 =  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
}).then(() => console.log('Yay!'));

// *******

const asyncFunc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const result = Math.random();
          result > 0.5 ? resolve(result) : reject('Oppps....I cannot calculate')
        }, 1)
    });
}

for (let i=0; i<10; i++) {
	asyncFunc()
    	.then(result => console.log('Result is: ' + result))
    	.catch(result => console.log('Error: ' + result))
}

// ---------------------------------------------
// Classes + getter & setter
// ---------------------------------------------

class Consumer {
    constructor (name, firstname) {
        this.name = name;
        this.firstname = firstname;
    }

    get Name() {
        return this.name;
    }

    set Name(value) {
        this.name = value;
    }
}

let consumer = new Consumer("Tihon", "Mike");

console.log(consumer);

consumer.Name = "Leunus";

console.log(consumer);

// ---------------------------------------------
// Array helper
// ---------------------------------------------


var colors = ['red', 'green', 'blue'];

const print = val => {
  console.log(val);
}

colors.forEach(print);

// ---------------------------------------------
// Map
// ---------------------------------------------

var colors = ['red', 'green', 'blue'];

const capitalize = val => val.toUpperCase();

var capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);

// ---------------------------------------------
// Array copy
// ---------------------------------------------

var array = ['red', 'blue', 'green']
var copyOfArray = [...array]

console.log('Copy of', array, 'is', copyOfArray)
console.log('Are', array, 'and', copyOfArray, 'same?', array === copyOfArray)

// ---------------------------------------------
// Array merge
// ---------------------------------------------

var defaultColors = ['red', 'blue', 'green']
var userDefinedColors = ['yellow', 'orange']

var mergedColors = [...defaultColors, ...userDefinedColors]

console.log('Merged colors', mergedColors)

// ---------------------------------------------
// Rest
// ---------------------------------------------

const printColors = (first, second, third, ...others) => {
    console.log(`Top three colors are ${first}, ${second} and ${third}. Others are: ${others}`)
}

printColors('yellow', 'blue', 'orange', 'white', 'black')