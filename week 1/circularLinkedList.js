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
      let node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
        this.tail.next = this.head; 
      } else {
        this.tail.next = node;
        this.tail = node;
        this.tail.next = this.head; 
      }
      this.size++;
    }
  
    prepend(value) {
      let node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
        this.tail.next = this.head;
      } else {
        node.next = this.head;
        this.head = node;
        this.tail.next = this.head; 
      }
      this.size++;
    }
  
    delete(value) {
      if (this.isEmpty()) return;
  
      let curr = this.head;
      let prev = null;
  
      if (curr.value === value) {
        if (this.size === 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = this.head.next;
          this.tail.next = this.head; 
        }
        this.size--;
        return;
      }
  
      while (curr !== this.tail && curr.value !== value) {
        prev = curr;
        curr = curr.next;
      }
  
      if (curr.value === value) {
        if (curr === this.tail) {
          this.tail = prev;
        }
        prev.next = curr.next;
        this.size--;
      }
    }
  
    isCircular() {
      if (this.isEmpty()) {
        return null;
      }
      if (this.size === 1) {
        return this.head === this.tail.next;
      }
  
      let fast = this.head;
      let slow = this.head;
  
      while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
          return true;
        }
      }
      return false;
    }
  
    findMiddle() {
      if (this.isEmpty()) {
        return null;
      } else {
        let fast = this.head;
        let slow = this.head;
  
        while (fast !== null && fast.next !== null) {
          slow = slow.next;
          fast = fast.next.next;
        }
        return slow.value;
      }
    }
  
    firstLargest() {
      if (this.isEmpty()) {
        console.log("List is empty");
        return;
      }
      let curr = this.head;
      let max = this.head.value;
  
      do {
        if (curr.value > max) {
          max = curr.value;
        }
        curr = curr.next;
      } while (curr !== this.head); 
  
      console.log("First largest:", max);
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("List is empty");
        return;
      }
  
      let curr = this.head;
      let list = `${this.head.value}`;
  
      curr = curr.next;
      while (curr !== null && curr !== this.head) {
        list += `, ${curr.value}`;
        curr = curr.next;
      }
  
      console.log(list);
    }
  }
  
  const linkedList = new LinkedList();
  linkedList.append(4);
  linkedList.append(8);
  linkedList.append(84);
  linkedList.append(89);
  
  console.log("Is circular?", linkedList.isCircular());
  linkedList.firstLargest();
  linkedList.print();
  
  linkedList.prepend(99);
  linkedList.delete(84);
  linkedList.print();
  