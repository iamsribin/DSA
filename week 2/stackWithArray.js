class StackArray {
    constructor(size) {
      this.stack = new Array(size);  
      this.size = size;              
      this.top = -1;                
    }
  
    isEmpty() {
      return this.top === -1;
    }
  
    isFull() {
      return this.top === this.size - 1;
    }
  
    push(value) {
      if (this.isFull()) {
        console.log("Stack overflow");
        return;
      }
      this.stack[++this.top] = value;
      console.log(`${value} pushed to stack`);
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log("Stack underflow");
        return null;
      }
      return this.stack[this.top--];
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      return this.stack[this.top];
    }
  
    display() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return;
      }
      let stackContent = "";
      for (let i = this.top; i >= 0; i--) {
        stackContent += this.stack[i] + " ";
      }
      console.log("Stack contents:", stackContent);
    }
  }
  
  const stackArray = new StackArray(5);
  stackArray.push(10);
  stackArray.push(20);
  stackArray.push(30);
  stackArray.display(); 
  console.log("Popped:", stackArray.pop());
  stackArray.display();
  