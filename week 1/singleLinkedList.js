class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    append(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
      this.size++;
    }
  
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
  
    remove(value) {
      if (this.isEmpty()) {
        console.log("List is empty");
        return null;
      }
  
      if (this.head.value === value) {
        this.head = this.head.next;
        if (this.head === null) {
          this.tail = null; 
        }
        this.size--;
        return;
      }
  
      let curr = this.head;
      let prev = null;
      while (curr !== null && curr.value !== value) {
        prev = curr;
        curr = curr.next;
      }
  
      if (curr === null) {
        console.log("No value found");
        return;
      }
  
      prev.next = curr.next;
  
      if (curr === this.tail) {
        this.tail = prev; 
      }
      this.size--;
    }
  
    reverse() {
      if (this.isEmpty()) {
        console.log("List is empty");
        return;
      }
  
      let curr = this.head;
      let prev = null;
      this.tail = this.head;
  
      while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      this.head = prev;
    }
  
    findMiddle() {
      if (this.isEmpty()) {
        console.log("List is empty");
        return;
      }
  
      let fast = this.head;
      let slow = this.head;
  
      while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
      }
  
      console.log("Middle element:", slow.value);
    }
  
    findOddNumbers() {
      if (this.isEmpty()) {
        console.log("List is empty");
        return;
      }
  
      let curr = this.head;
      let oddNumbers = [];
  
      while (curr !== null) {
        if (curr.value % 2 !== 0) {
          oddNumbers.push(curr.value);
        }
        curr = curr.next;
      }
  
      console.log("Odd numbers:", oddNumbers);
    }
  
    addBeforePosition(value, position) {
      if (position < 1 || position > this.size + 1) {
        console.log("Invalid position");
        return;
      }
  
      const node = new Node(value);
  
      if (position === 1) {
        this.prepend(value);
        return;
      }
  
      let curr = this.head;
      let prev = null;
      let currentPosition = 1;
  
      while (currentPosition < position) {
        prev = curr;
        curr = curr.next;
        currentPosition++;
      }
  
      node.next = curr;
      prev.next = node;
      this.size++;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("List is empty");
        return;
      }
  
      let curr = this.head;
      let list = "";
  
      while (curr) {
        list += `${curr.value}, `;
        curr = curr.next;
      }
  
      console.log(list.slice(0, -2));
    }
  }
  
  const linkedList = new LinkedList();
  linkedList.append(7);
  linkedList.append(8);
  linkedList.prepend(10);
  linkedList.print(); 
  
  linkedList.reverse();
  linkedList.print(); 
  
  linkedList.remove(8);
  linkedList.print(); 
  
  linkedList.findMiddle(); 
  
  linkedList.findOddNumbers(); 
  
  linkedList.addBeforePosition(5, 2); 
  linkedList.print(); 
  