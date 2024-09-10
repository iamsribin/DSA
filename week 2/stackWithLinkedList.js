class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class StackLinkedList {
    constructor() {
      this.top = null;  
    }
  
    isEmpty() {
      return this.top === null;
    }
  
    push(value) {
      const newNode = new Node(value);
      newNode.next = this.top; 
      this.top = newNode;       
      console.log(`${value} pushed to stack`);
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log("Stack underflow");
        return null;
      }
      const poppedValue = this.top.value;
      this.top = this.top.next;  
      return poppedValue;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      return this.top.value;
    }
  
    display() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return;
      }
      let current = this.top;
      let stackContent = "";
      while (current) {
        stackContent += current.value + " ";
        current = current.next;
      }
      console.log("Stack contents:", stackContent);
    }
  }
  
  const stackLinkedList = new StackLinkedList();
  stackLinkedList.push(10);
  stackLinkedList.push(20);
  stackLinkedList.push(30);
  stackLinkedList.display(); 
  console.log("Popped:", stackLinkedList.pop());  
  stackLinkedList.display();
  