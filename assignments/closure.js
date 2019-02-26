
// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function a() {
  const one = 'from a';
  console.log(`Hello ${one}`);
  let messageToShare = "Hello World";

  function b() {
    const two = "from b";
    console.log(`${messageToShare} ${one} and ${two}!`);

    function c() {
      const three = "from c";
      console.log(`${messageToShare} ${one}, ${two} and ${three}!`);
    }
    c();
  }
  b();
}

a();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function () {
    return ++count;
  };
};
const newCounter = counter();
// console.log(newCounter()); //1
// console.log(newCounter()); //2
// console.log(newCounter()); //3

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

const counterFactory = () => {
  let count = 0;

  return function (){
    let obj = {
      increment: function(){return ++count;},
      decrement: function(){return --count;},
    };
    return obj;
  };
};

const insideFunc = counterFactory();
let counterObj = insideFunc();


console.log(counterObj.increment());
console.log(counterObj.increment());
console.log(counterObj.increment());

console.log(counterObj.decrement());




