class QueueArray {
    constructor(size) {
      this.queue = new Array(size);  
      this.size = size;              
      this.front = -1;              
      this.rear = -1;                
    }
  
    isFull() {
      return this.rear === this.size - 1;
    }
  
    isEmpty() {
      return this.front === -1 || this.front > this.rear;
    }
  
    enqueue(value) {
      if (this.isFull()) {
        console.log("Queue overflow");
        return;
      }
      if (this.front === -1) {
        this.front = 0;  
      }
      this.queue[++this.rear] = value;  
      console.log(`${value} enqueued to queue`);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue underflow");
        return null;
      }
      const dequeuedValue = this.queue[this.front];
      this.queue[this.front++] = undefined;  
      if (this.front > this.rear) {  
        this.front = -1;
        this.rear = -1;
      }
      return dequeuedValue;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.queue[this.front];
    }
  
    display() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
      let queueContent = "";
      for (let i = this.front; i <= this.rear; i++) {
        queueContent += this.queue[i] + " ";
      }
      console.log("Queue contents:", queueContent);
    }
  }
  
  const queueArray = new QueueArray(5);
  queueArray.enqueue(10);
  queueArray.enqueue(20);
  queueArray.enqueue(30);
  queueArray.display();  
  console.log("Dequeued:", queueArray.dequeue());  
  queueArray.display();
  