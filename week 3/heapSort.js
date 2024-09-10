class Heap {
    constructor(array) {
      this.array = array;
    }
  
    heapify(n, i) {
      let largest = i; 
      let left = 2 * i + 1; 
      let right = 2 * i + 2; 
  
      if (left < n && this.array[left] > this.array[largest]) {
        largest = left;
      }
  
      if (right < n && this.array[right] > this.array[largest]) {
        largest = right;
      }
  
      if (largest !== i) {
        [this.array[i], this.array[largest]] = [this.array[largest], this.array[i]]; 
  
        this.heapify(n, largest);
      }
    }
  
    sort() {
      let n = this.array.length;
  
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        this.heapify(n, i);
      }
  
      for (let i = n - 1; i > 0; i--) {
        [this.array[0], this.array[i]] = [this.array[i], this.array[0]];
  
        this.heapify(i, 0);
      }
    }
  
    getSortedArray() {
      return this.array;
    }
  }
  
  const array = [4, 10, 3, 5, 1];
  const heapSort = new Heap(array);
  
  console.log("Original array:", array);
  heapSort.sort();
  console.log("Sorted array:", heapSort.getSortedArray());
  