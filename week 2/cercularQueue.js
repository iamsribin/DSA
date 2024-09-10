class Queue {
    constructor(size) {
      this.items = new Array(size);
      this.size = size;
      this.currentSize = 0;
      this.rear = -1;
      this.frond = -1;
    }
  
    isFull() {
      return this.currentSize === this.size;
    }
  
    isEmpty() {
      return this.currentSize === 0;
    }
  
    enqueue(value) {
      if (!this.isFull()) {
        this.rear = (this.rear + 1) % this.size;
        this.items[this.rear] = value;
        this.currentSize++;
        if (this.frond === -1) {
          this.frond = this.rear;
        }
      } else {
        console.log("Queue is full");
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
      const item = this.items[this.frond];
      this.items[this.frond] = null;
      this.frond = (this.frond + 1) % this.size;
      this.currentSize--;
      if (this.isEmpty()) {
        this.frond = -1;
        this.rear = -1;
      }
      return item;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
      console.log(this.items[this.frond]);
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
      } else {
        let list = "";
        let i;
        for (i = this.frond; i !== this.rear; i = (i + 1) % this.size) {
          list += this.items[i] + " ";
        }
        list += this.items[i];
        console.log(list);
      }
    }
  
    findMiddle() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
      let midIndex = (this.frond + Math.floor(this.currentSize / 2)) % this.size;
      console.log("Middle element:", this.items[midIndex]);
    }
  
    isCircularQueue() {
      if (this.isEmpty()) {
        return false;
      }
      return (this.rear + 1) % this.size === this.frond;
    }
  }
  
  const queue = new Queue(5);
  queue.enqueue(2); 
  queue.enqueue(22);
  queue.enqueue(28);
  queue.enqueue(22);
  queue.enqueue(28); 
  queue.print();
  console.log(queue.dequeue());
  queue.enqueue(200);
  queue.print();
  queue.peek();
  
  queue.findMiddle();
  
  console.log("Is Circular Queue:", queue.isCircularQueue());
  