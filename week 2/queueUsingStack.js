class QueueStack {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(value) {
      this.stack1.push(value);
    }
  
    print() {
      console.log([...this.stack2, ...this.stack1.reverse()]);
      this.stack1.reverse;
    }
  
    dequeue() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      return this.stack2.shift();
    }
  
    frond(){
      if(this.stack2.length ===0){
          while(this.stack1.length > 0){
              this.stack2.push(this.stack1.pop());
          }
      }
      return this.stack2[this.stack2.length-1];
    }
  }
  
  const queueStack = new QueueStack();
  queueStack.enqueue(3);
  queueStack.enqueue(33);
  queueStack.enqueue(34);
  queueStack.print();
  console.log(queueStack.dequeue());
  console.log(queueStack.frond());
  