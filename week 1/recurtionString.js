
function reverseString(str) {
    if (str === "") {
      return "";
    }
    return reverseString(str.slice(1)) + str[0];
  }
  
  //----------------palindrome-------------------------

  console.log(reverseString("hello")); 
  
  function isPalindrome(str) {
    if (str.length <= 1) {
      return true;
    }
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
    return isPalindrome(str.slice(1, str.length - 1));
  }
  
  console.log(isPalindrome("racecar")); 
  console.log(isPalindrome("hello"));   

  //------------------count occurrences----------------------------------

  function countOccurrences(str, char, index = 0) {
    if (index === str.length) {
      return 0;
    }
    const count = str[index] === char ? 1 : 0;
    return count + countOccurrences(str, char, index + 1);
  }
  
  console.log(countOccurrences("hello", "l")); 

  //-----------------remove duplicates -------------------------------

  function removeDuplicates(str, index = 0, result = "") {
    if (index === str.length) {
      return result;
    }
    if (!result.includes(str[index])) {
      result += str[index];
    }
    return removeDuplicates(str, index + 1, result);
  }
  
  console.log(removeDuplicates("hello")); 

  //-------------------replace char -------------------------

  function replaceChar(str, oldChar, newChar, index = 0) {
    if (index === str.length) {
      return str;
    }
    if (str[index] === oldChar) {
      str = str.slice(0, index) + newChar + str.slice(index + 1);
    }
    return replaceChar(str, oldChar, newChar, index + 1);
  }
  
  console.log(replaceChar("apple", "p", "b")); 
  
//-------------------capitalize words--------------

function capitalizeWords(str) {
    if (str.length === 0) {
      return "";
    }
  
    let capitalized = str[0].toUpperCase() + str.slice(1).toLowerCase();
    let nextSpaceIndex = capitalized.indexOf(' ');
  
    if (nextSpaceIndex === -1) {
      return capitalized;
    }
    
    return capitalized.slice(0, nextSpaceIndex + 1) + capitalizeWords(capitalized.slice(nextSpaceIndex + 1));
  }
  
  console.log(capitalizeWords("hello world from recursion")); 

  //------------------find len--------------------

  function findLength(str) {
    if (str === "") {
      return 0;
    }
    return 1 + findLength(str.slice(1));
  }
  
  console.log(findLength("hello")); 

  //-----------count substring----------------

function countSubstring(string, subString){
    let count = 0;
    let pos = string.indexOf(subString);

    while(pos !== -1){
    count++;
    pos = string.indexOf(subString, pos+1);
    }
    return count;
}


let mainStr = "hellohellohello";
let subStr = "lo";
console.log(countSubstring(mainStr, subStr))
  
//-----------delete char ---------------------------

function deleteChar(str, index, delValue){
    if(str.length === index){
        return str;
    }


    if(str[index] === delValue){
        str = str.replace(delValue, "");
       return deleteChar(str, index, delValue);
    }

    return deleteChar(str, index + 1, delValue);
}

console.log(deleteChar("hello", 0, "l"));
