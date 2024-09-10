function sumArray(arr, n) {
    if (n === 0) {
      return 0;
    }
    return arr[n - 1] + sumArray(arr, n - 1);
  }
  
  const arr = [1, 2, 3, 4, 5];
  console.log("sum arry:",sumArray(arr, arr.length)); 

  //----------------------is sorted-----------------------------------

  function isSorted(arr, n) {
    if (n === 1 || n === 0) {
      return true;
    }
    if (arr[n - 1] < arr[n - 2]) {
      return false;
    }
    return isSorted(arr, n - 1);
  }
  
  const sortedArr = [1, 2, 3, 4, 5];
  console.log("is sorted:",isSorted(sortedArr, sortedArr.length)); 
  
  //----------------------find max--------------------------------

  function findMax(arr, n) {
    if (n === 1) {
      return arr[0];
    }
    return Math.max(arr[n - 1], findMax(arr, n - 1));
  }
  
  const arrMax = [1, 5, 3, 9, 2];
  console.log("find Max",findMax(arrMax, arrMax.length));
  
  //---------------------reverse array------------------------------------

  function reverseArray(arr, start, end) {
    if (start >= end) {
      return;
    }
    [arr[start], arr[end]] = [arr[end], arr[start]];
    reverseArray(arr, start + 1, end - 1);
  }
  
  const arrRev = [1, 2, 3, 4, 5];
  reverseArray(arrRev, 0, arrRev.length - 1);
  console.log("reverse array:",arrRev); 
  
  //---------------------count occurrences ------------------------------------

  function countOccurrences(arr, n, element) {
    if (n === 0) {
      return 0;
    }
    let count = arr[n - 1] === element ? 1 : 0;
    return count + countOccurrences(arr, n - 1, element);
  }
  
  const arrCount = [1, 2, 2, 3, 4, 2];
  console.log("count occurrences:",countOccurrences(arrCount, arrCount.length, 2)); 

  //------------------------find index----------------------------------------------

  function firstIndex(arr, n, element, idx = 0) {
    if (idx === n) {
      return -1;
    }
    if (arr[idx] === element) {
      return idx;
    }
    return firstIndex(arr, n, element, idx + 1);
  }
  
  const arrIndex = [1, 2, 3, 4, 5];
  console.log("find index",firstIndex(arrIndex, arrIndex.length, 3)); 
  