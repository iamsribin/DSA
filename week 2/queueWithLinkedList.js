class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class QueueLinkedList {
    constructor() {
      this.front = null;  
      this.rear = null;   
    }
  
    isEmpty() {
      return this.front === null;
    }
  
    enqueue(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.front = this.rear = newNode;  
      } else {
        this.rear.next = newNode;  
        this.rear = newNode;      
      }
      console.log(`${value} enqueued to queue`);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue underflow");
        return null;
      }
      const dequeuedValue = this.front.value;
      this.front = this.front.next;  
      if (!this.front) {             
        this.rear = null;
      }
      return dequeuedValue;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.front.value;
    }
  
    display() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
      let current = this.front;
      let queueContent = "";
      while (current) {
        queueContent += current.value + " ";
        current = current.next;
      }
      console.log("Queue contents:", queueContent);
    }
  }
  
  const queueLinkedList = new QueueLinkedList();
  queueLinkedList.enqueue(10);
  queueLinkedList.enqueue(20);
  queueLinkedList.enqueue(30);
  queueLinkedList.display();  
  console.log("Dequeued:", queueLinkedList.dequeue()); 
  queueLinkedList.display();
  