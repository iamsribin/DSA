//---------------bubble sort---------------------
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    console.log("bubble sort:", arr);
  }
  
  bubbleSort([4, 7, 2, 6, 3, 6, 8, 9]);
  
  //------------insertion sort ----------------------
  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key; 
    }
    console.log("insertion sort:", arr);
  }
  
  insertionSort([34, 5, 7, 4, 7, 4, 8, 3, 8, 1]);
  
  //---------seletion sort--------------
  function seletionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i; j < arr.length; j++) {
        if (arr[minIndex] > arr[j]) {
          minIndex = j;
        }
      }
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    console.log("seletion sort:", arr);
  }
  seletionSort([43, 56, 2, 67, 3, 68, 2, 72, 247, 8]);
  
  //--------quck sort-----------
  function quckSort(arr) {
    if (arr.length <= 1) return arr;
  
    let left = [];
    let right = [];
    let pivot = arr[arr.length - 1];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quckSort(left), pivot, ...quckSort(right)];
  }
  
  console.log("quck sort:", quckSort([2, 356, 3, 62, 7, 2, 6, 3, 7, 3, 8]));
  
  //-----------------merge sort------------------
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    let mid = Math.floor(arr.length / 2);
    let right = mergeSort(arr.slice(mid));
    let left = mergeSort(arr.slice(0, mid));
  
    return merge(left, right);
  }
  
  function merge(left, right) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < left.length && j < right.length) {
      if (left[i] > right[j]) {
        result.push(right[j]);
        j++;
      } else {
        result.push(left[i]);
        i++;
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  console.log("merge sort:", mergeSort([3, 45, 6, 3, 7, 3, 7, 2, 6, 3, 6, 3, 3]));
  