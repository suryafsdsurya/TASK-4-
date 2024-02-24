//a. Print add number in an array
//Anonymous
var odd = function (array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      console.log(array[i]);
    }
  }
};
odd([1, 2, 3, 4, 5, 6]);
//IIFE
(function (array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      console.log(array[i]);
    }
  }
})([1, 2, 3, 4]);

// -------------------------------------------------------------------------------------------

//b. Convert all strings to title caps in a string array
//Anonymous
var A = function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
console.log(A("poorani"));

//IIFE
(function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
})("poorani");

//-----------------------------------------------------------------------------------------------

//c. Sum of all numbers in an array
//Anonymous
let sum = function (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};
console.log(sum([2, 4, 6]));

//IIFE
(function (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
})([4, 4, 4, 4]);

//--------------------------------------------------------------------------------------------------------

//d. Return all the prime numbers in an array.
//Anonymous
let primeNumber = function (numArray) {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
};
primeNumber([1, 2, 3, 4, 5]);

//IIFE
(function (numArray) {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  return numArray;
})([1, 2, 3, 4, 5]);

//---------------------------------------------------------------------------------------------------------------

//e. Return all the palindromes in an array.
//Anonymous
let a = function (arr, n) {
  // Traversing each element of the array
  // and check if it is palindrome or not
  for (let i = 0; i < n; i++) {
    let ans = isPalindrome(arr[i]);
    if (ans == false) return false;
  }
  return true;
};
console.log(a([1, 2, 2, 3, 1, 2], 6));

//IIFE
(function (arr, n) {
  for (let i = 0; i < n; i++) {
    let ans = isPalindrome(arr[i]);
    if (ans == false) return false;
  }
  return true;
})([1, 2, 3], 3);
//---------------------------------------------------------------------------------------------------------
//f. Return median of two sorted arrays of the same size.
//Anonymous
let median = function () {
  function getMedian(ar1, ar2, n) {
    let j = 0;
    let i = n - 1;
    while (ar1[i] > ar2[j] && j < n && i > -1) {
      let temp = ar1[i];
      ar1[i] = ar2[j];
      ar2[j] = temp;
      i--;
      j++;
    }
    ar1.sort(function (a, b) {
      return a - b;
    });
    ar2.sort(function (a, b) {
      return a - b;
    });
    return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
  }

  let ar1 = [1, 12, 15, 2, 38];
  let ar2 = [2, 13, 17, 30, 45];

  let n1 = 5;
  let n2 = 5;
  if (n1 == n2) console.log(getMedian(ar1, ar2, n1));
};
median();

//IIFE
(function () {
  function getMedian(ar1, ar2, n) {
    let j = 0;
    let i = n - 1;
    while (ar1[i] > ar2[j] && j < n && i > -1) {
      let temp = ar1[i];
      ar1[i] = ar2[j];
      ar2[j] = temp;
      i--;
      j++;
    }
    ar1.sort(function (a, b) {
      return a - b;
    });
    ar2.sort(function (a, b) {
      return a - b;
    });
    return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
  }

  let ar1 = [1, 12, 15, 2, 38];
  let ar2 = [2, 13, 17, 30, 45];

  let n1 = 5;
  let n2 = 5;
  if (n1 == n2) console.log(getMedian(ar1, ar2, n1));
})();

//---------------------------------------------------------------------------------------------------------

//g. Remove duplicates from an array.
//anonymous
let dup = function (array) {
  let dup = [...new Set(array)];
  return dup;
};
console.log(dup([1, 1, 2, 3]));

//IIFE
(function (array) {
  let dup = [...new Set(array)];
  return dup;
})([1, 1, 2, 3, 4]);
//--------------------------------------------------------------------------------------------------------
//h. Rotate an array by k times
//Anonymous
var rotate = function () {
  let nums = [1, 2, 3, 6];
  let k = 2;
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  console.log(nums);
};
rotate();

///IIFE
(function () {
  let nums = [1, 2, 3, 6];
  let k = 2;
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  console.log(nums);
})();
