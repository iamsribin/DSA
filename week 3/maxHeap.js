class MaxHeap {
    constructor(array = []) {
      this.array = [];
      this.#buildHeap(array);
    }
  
    #buildHeap(array) {
      this.array = array;
      for (let i = this.#parent(array.length - 1); i >= 0; i--) {
        this.#shiftDown(i);
      }
    }
  
    #shiftDown(currIdx) {
      let endIdx = this.array.length - 1;
      let leftIdx = this.#leftChild(currIdx);
  
      while (leftIdx <= endIdx) {
        let rightIdx = this.#rightChild(currIdx);
        let idxToShift;
  
        if (rightIdx <= endIdx && this.array[rightIdx] > this.array[leftIdx]) {
          idxToShift = rightIdx;
        } else {
          idxToShift = leftIdx;
        }
  
        if (this.array[idxToShift] > this.array[currIdx]) {
          [this.array[idxToShift], this.array[currIdx]] = [
            this.array[currIdx],
            this.array[idxToShift],
          ];
          currIdx = idxToShift;
          leftIdx = this.#leftChild(currIdx);
        } else {
          return;
        }
      }
    }
  
    #shiftUp(currentIdx) {
      let parentIdx = this.#parent(currentIdx);
      while (currentIdx > 0 && this.array[parentIdx] < this.array[currentIdx]) {
        [this.array[parentIdx], this.array[currentIdx]] = [
          this.array[currentIdx],
          this.array[parentIdx],
        ];
        currentIdx = parentIdx;
        parentIdx = this.#parent(currentIdx);
      }
    }
  
    #parent(index) {
      return Math.floor((index - 1) / 2);
    }
  
    #leftChild(index) {
      return 2 * index + 1;
    }
  
    #rightChild(index) {
      return 2 * index + 2;
    }
  
    insert(value) {
      this.array.push(value);
      this.#shiftUp(this.array.length - 1);
    }
  
    remove() {
      if (this.array.length === 0) return null;
      const max = this.array[0];
      const end = this.array.pop();
  
      if (this.array.length > 0) {
        this.array[0] = end;
        this.#shiftDown(0);
      }
      return max;
    }
  
    print() {
      console.log(this.array);
    }
  }
  
  const maxHeap = new MaxHeap([3, 34, 67, 5, 6, 1, 7, 9]);
  maxHeap.print();            
  console.log("removed:",maxHeap.remove()); 
  maxHeap.print();             
  