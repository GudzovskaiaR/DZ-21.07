// Convert Celsius to Fahrenheit
// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

// function convertToF(celsius) {
//     let fahrenheit;
//     return fahrenheit = (celsius *9/5)+32
//   }
  
//   console.log(convertToF(30));

// -----------------------------------------------------------------------

// Reverse a String
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

// function reverseString(str) {

//     str=(str.split('').reverse()).join('')
//      return str;
//    }
   
//    console.log(reverseString("hello"));

// --------------------------------------------------------------------------------

// Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

// function factorialize(num) {
//     let f = 1;
//     for(let i=1; i<=num; i++){
//     f=f*i}
//        return f;
//   }
  
//   console.log(factorialize(5));

// -----------------------------------------------------------------------------------------------

// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// function findLongestWordLength(str) {
//     let words = str.split(' ');
//     let maxWordLength = 0;
//     words.forEach((word)=>{
//       if(word.length>maxWordLength) maxWordLength=word.length
//       })
//     return maxWordLength ;
//   }
  
//   findLongestWordLength("The quick brown fox jumped over the lazy dog");

// ------------------------------------------------------------------------------------------------------

// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// function largestOfFour(arr) {
//     let newArr = [];
//     arr.forEach((smallArr)=>{
//       let maxNumber = smallArr[0]
//       smallArr.forEach((num)=>{
//         if(num > maxNumber) maxNumber=num
//       })
//       newArr.push(maxNumber)
//     })
//       return newArr;
//     }
    
//     console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// -------------------------------------------------------------------------------------------------------------------

//     function confirmEnding(str, target) {
//     if (str.slice(-(target.length)) === target) return true
//     else return false
//     }
  
//     confirmEnding("Bastian", "n");  
    
//     function repeatStringNumTimes(str, num) {
//         let newStr = ("");
     
//          if(num>=0){
        
//      while(num>0){
//        newStr +=str
//        num--
//      }
     
//        return newStr;
//        }
//        else {
//          return ("") }
//      }
     
//      repeatStringNumTimes("abc", 3);
// -----------------------------------------------------------------------------------------------------
//     Truncate a String
//     Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

//     function truncateString(str, num) {
//         let ourStr
//       if (str.length>num){
//         ourStr = str.slice(0,num) +"..."
//       }
//       else{
//         ourStr =str
//       }
//         return ourStr;
//       }
      
     
       
//     ----------------------------------------------------------------------------------------------  
//     function findElement(arr, func) {
//         return arr.find(func);
//       }
     
//      console.log(findElement([1, 3, 5, 8, 9, 10  ], num => num % 2 === 0));

//     --------------------------------------------------------------------------------------------------------------

//     Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// function booWho(bool) {
//     if (typeof(bool) === true || bool===true || bool===false )  return true
//     else return false
//   }
  
//   booWho(null);
// ---------------------------------------------------------------------------------------------------------

// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// function titleCase(str) {
//     let ourStr = str.toLowerCase().split(' ').map((item)=>item[0].toUpperCase()+item.slice(1)).join(' ')
    
//     return ourStr;
//   }
//   ---------------------------------------------------------------------------------------------------------------
//   titleCase("I'm a little tea pot");
// function frankenSplice(arr1, arr2, n) {

//     let newArr = arr2.slice();
//     newArr.splice(n, 0, ...arr1.slice())
//     return newArr;
//   }
  
//   frankenSplice([1, 2, 3], [4, 5, 6], 1);
// -------------------------------------------------------------------------------------------------------------------

// Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

// function bouncer(arr) {
//     let fArr = [false, null, 0, "", undefined, NaN]
//     let newArr = arr.filter(item=> fArr.includes(item) == false )
//     return newArr;
//   }
  
//   bouncer([null, NaN, 1, 2, undefined]);

// -----------------------------------------------------------------------------------------------------------------------

// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
// let arr = [3, 8, 2]
// let newArr = arr.sort(function(a, b) { return a - b; })
// console.log(newArr);
// ------------------------------------------------------------------------------------------------------------------------------------

// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// function getIndexToIns(arr, num) {
//     arr.push(num)
//     let newArr = arr.sort(function(a, b) { return a - b; })
//     let index = newArr.indexOf(num)
  
//    return index  
//   } 
//   getIndexToIns([10, 20, 30, 40, 50], 30);
// ---------------------------------------------------------------------------------------------------------------------------------------
// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

// function mutation(arr) {
//     let oneWord = arr[0].toLowerCase().split('')
//     let secWord = arr[1].toLowerCase().split('')
//     let result = true
  
  
//    for (let i = 0; i<secWord.length; i++){
//      if (oneWord.indexOf(secWord[i])== -1){
//    result =  false
//      break
//    }
   
//    } 
//    return result
//   }
  
//   mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
// ---------------------------------------------------------------------------------------------------------------------------

// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// function chunkArrayInGroups(arr, size) {
//     let newArr = []
//     for (let i=0; i<arr.length; i = i+size){
//       newArr.push(arr.slice(i, size+i))
//     } 
 
//    return newArr
// }

// chunkArrayInGroups(["a", "b", "c", "d"], 2);