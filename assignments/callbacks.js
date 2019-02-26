

// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array. 
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 

  firstItem(items, function(first) {
    console.log(first)
  });

*/


// getLength passes the length of the array into the callback.

function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, function(length){
  console.log(length);
});

// last passes the last item of the array into the callback.

function getLast(arr, cb) {
  return cb(arr[arr.length-1]);
}

getLast(items, function(last){
  console.log(last);
});

 // sumNums adds two numbers (x, y) and passes the result to the callback.

function sumNums(x, y, cb) {
  return cb(x, y);
}

function add (a, b) {
  return a + b;
}

console.log(sumNums(2, 3, add));

// multiplyNums multiplies two numbers and passes the result to the callback.

function multiplyNums(x, y, cb) {
  return cb(x, y);
}

function multiple (a, b) {
  return a * b;
}

console.log(multiplyNums(2, 3, multiple));

// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.

function contains(item, list, cb) {
  if(list.includes(item)){
    return cb(true);
  } else {
    return cb(false);
  }
}

contains("Book", items, function(item){
  console.log(item);
});






/* STRETCH PROBLEM */

const myitems = ['Pencil', 'Gum', 'Notebook', 'yo-yo', 'Gum'];

function removeDuplicates(array, cb) {
  var itemsUnique = array.filter(cb);
  console.log(itemsUnique);

  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

removeDuplicates(myitems, function(item, index, arr){
  console.log(arr.indexOf(item));
  return index == arr.indexOf(item);
});


