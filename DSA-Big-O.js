// #1 What is the Big O for this?

// -- 1. O(1)
// -- 2. O(n)


// #2 Even or Odd
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// The Big O for this is O(1) because no matter what the value is, it needs to run once. 


// #3 Are you here?
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

// The Big O for this is O(n^2) because it's running two levels of nested loops


// #4 Doubler
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// The Big O for this is O(n) because the number of operations is directly proportional to the array's length n.


// #5 Naive Search
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// The Big O for this is  O(n) because the number of operations is directly proportional to the array's length n.
// Best case situation array[0] = item, worst case array[n] = item.


// #6 Creating Pairs
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// The Big O for this is O(n^2) because there are 2 levels of nested loops.


// #7 Compute the Sequence
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// This algorithm creates an array containing the Fibonacci sequence whose length is num.
// The Big O for this is is O(n) because the value of num is directly proportional to the amount of operations.

// #8 An Efficient Search
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

//The Big O for this is O(log n) because every time the operation is run, n is cut in half which makes the algorithm logarithmic.


// #9 Random Element
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// The Big O for this is O(1) because no matter how large the array is, there will only be one operation.


// #10 What am I?
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false; // return false if n is less than 2 or not an integer
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false; // count up to n with i. return false if n divides cleanly into i
    }
    return true;
}

// This algorithm returns true if n is a prime number.
// The Big O for this is O(n) because the number of operations is directly proportional to n.


// #11 Tower of Hanoi
let puzzleStart = [
    [1, ' ', ' '],
    [2, ' ', ' '],
    [3, ' ', ' ']
]

const hanoi = function(puzzle, i, j){
    if(puzzle[i][j+2] === 1 && puzzle[i+1][j+2] === 2 && puzzle[i+2][j+2] === 3){
        return 'Puzzle is solved'
    }

    
}

//console.log(hanoi(puzzleStart, 0, 0))


// #12 Iterative solves of 1-7 Recursion problems

// -- 1. Counting Sheep
function sheepCounter(num){
    let message = ''
    while(num > 0){
        message += `${num}: Another sheep jumps over the fence \n`;
        num --
    }
    if(num == 0){
        message += 'All sheep jumped over the fence'
    }
    return message;
}
// Big O = O(n)

//console.log(sheepCounter(5))


// -- 2. Power Calculator
function powerCalculator(int, exp){
    //let k = 1;
    let total = 0

    if(exp == 0){
        total = 1;
    }

    if(exp > 0){
        total = int;
    }

    while (exp > 1){
        total *= int;
        exp --
    }
    
    return total
}
// Big O = O(n)

//console.log(powerCalculator(5, 3))


// -- 3. Reverse String
function reverseString(string){
    let result = ''
    while(string.length > 0){
        result += string.substr(string.length - 1)
        string = string.slice(0, string.length - 1)
    }
    return result;
}
// Big O = O(n)

//console.log(reverseString('hello'))


// -- 4. nth Triangular Number
function triangularNumber(n){
    let result = 0;
    for(let i = 1; i <= n; i++){
        result += i
    }
    return result;
}
// Big O = O(n)

//console.log(triangularNumber(9))


// -- 5. String Splitter
function stringSplitter(string, separator){
    let splitStringArray = []
    let newString = string + '/'
    let sepIndex = 0;
    for(let i = 0; i <= newString.length; i++){
        if (newString[i] == separator){
            splitStringArray.push(newString.substr(sepIndex, i-sepIndex)) //push everything before the separator to the array
            console.log(sepIndex, i)
            //newString = newString.slice(sepIndex+1, string.length) // creates new string with the first section and separator removed
            sepIndex = i+1;
        }
    }
    return splitStringArray;
}
// Big O = O(n)

//console.log(stringSplitter('02/20/2020', '/'))


// -- 6. Fibonacci
function fib(num){
    let sequence = []
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            sequence.push(0);
        }
        else if (i === 2) {
            sequence.push(1);
        }
        else {
            sequence.push(sequence[i - 2] + sequence[i - 3]);
        }
    }
    return sequence;
}
// Big O = O(n)

//console.log(fib(10))


// -- 7. Factorial
function factorial(num){
    let result = 1
    for(let i = 1; i <= num; i++){
        result *= i
    }
    return result;
}
// Big O = O(n)

//console.log(factorial(5))


// #13 Recursive Big O

// -- 1. Sheep Counter
const sheepCounter = function(number) {
    // Base case
    if(number == 0){
        return(number + ': All sheep jumped over the fence \n')
    }

    //General case
    return (number + ': Another sheep jumps over the fence \n' + sheepCounter(number-1))
}
// Big O = O(n^2)


// -- 2. Power Calculator
const powerCalculator = function(base, exponent){
    //Base case
    if(exponent < 0){
        return ('Exponent should be >= 0')
    }
    else if(exponent == 0){
        return 1
    }

    else return(base * powerCalculator(base, exponent-1))
}
// Big O = O(2n)


// -- 3. Reverse String
const reverseString = function(string){
    //base case
    if(string === ''){
        return ''
    }
    else return reverseString(string.substr(1)) + string.charAt(0)
}
// Big O = O(2n)


// -- 4. nth Triangular Number
const triangularNumber = function(number){
    if(number === 0){
        return 0
    }

    else if(number === 1){
        return 1
    }

    else return number + triangularNumber(number - 1)
}
// Big O = O(2n)


// -- 5. String Splitter
const splitter = function(string, separator){
    var result = []
    if (string.indexOf(separator) === -1){
        result.push(string)
        return result
    }
    else {
        const index = string.indexOf(separator)
        let beginningWord = string.substr(0, index)
        console.log(beginningWord)
        result.push(beginningWord)
        let restOfWord = string.substr(index+1, string.length)
        splitter(restOfWord, separator)
    }
    return result
}
// Big O = O(2n)


// -- 7. Factorial
const factorial = function(num){
    if (num === 1) {
        return 1
    }
    else return num * factorial(num - 1)
}

// Big O = O(2n)
