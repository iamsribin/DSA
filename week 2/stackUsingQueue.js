class stackUsingQueue {
    constructor() {
      this.queur1 = [];
      this.queur2 = [];
    }
  
    isEmpty() {
      return queur1.length === 0;
    }
  
    push(value) {
      this.queur2.push(value);
      while (this.queur1.length > 0) {
        this.queur2.push(this.queur1.shift());
      }
  
      [this.queur1, this.queur2] = [this.queur2, this.queur1];
    }
  
    pop() {
      if (queur1.length === 0) {
        console.log("stack is empty");
        return null;
      }
  
      return this.queur1.shift();
    }
  
    top() {
      if (queur1.length === 0) {
        console.log("stack is empty");
        return null;
      }
      return this.queur1[0];
    }
  
    print() {
      console.log(this.queur1);
    }
  }
  
  const queur1 = new stackUsingQueue(4);
  queur1.push(23);
  queur1.push(23);
  queur1.push(9);
  queur1.push(2);
  queur1.print();
  console.log(queur1.pop());
  console.log(queur1.top());
  
  