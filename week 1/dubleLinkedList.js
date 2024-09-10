class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
    }
  
    printf() {
      if (!this.head) {
        console.log("List is null");
      } else {
        let curr = this.head;
        let list = "";
        while (curr) {
          list += `${curr.value}, `;
          curr = curr.next;
        }
        console.log(list);
      }
    }
  
    delete(value) {
      if (!this.head) {
        return null;
      }
  
      let curr = this.head;
      while (curr) {
        if (curr.value === value) {
          if (curr === this.head) {
            this.head = curr.next;
          }
  
          if (curr === this.tail) {
            this.tail = curr.prev;
          }
  
          if (curr.prev) {
            curr.prev.next = curr.next;
          }
  
          if (curr.next) {
            curr.next.prev = curr.prev;
          }
          curr.next = null;
          curr.prev = null;
          return;
        }
        curr = curr.next;
      }
      console.log("Not found");
      return;
    }
  
    reverse() {
      if (!this.head) {
        return null;
      }
  
      let curr = this.head;
      let prev = null;
      while (curr) {
        let next = curr.next;
        curr.next = prev;
        curr.prev = next;
        prev = curr;
        curr = next;
      }
  
      this.tail = this.head;
      this.head = prev;
    }
  
    deleteByIdx(index) {
      if (!this.head) {
        console.log("List not found");
        return null;
      }
  
      let curr = this.head;
      let i = 0;
      while (curr) {
        if (index == i) {
          if (curr === this.head) {
            this.head = curr.next;
          }
  
          if (curr === this.tail) {
            this.tail = curr.prev;
          }
  
          if (curr.prev) {
            curr.prev.next = curr.next;
          }
  
          if (curr.next) {
            curr.next.prev = curr.prev;
          }
  
          curr.prev = null;
          curr.next = null;
          return;
        }
        i++;
        curr = curr.next;
      }
      console.log("No index found");
      return;
    }
  
    insertByIdx(index, value) {
      if (!this.head) {
        return console.log("Index not found");
      }
  
      let curr = this.head;
      let i = 0;
      const node = new Node(value);
      if (index === 0) {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        return;
      }
  
      while (curr) {
        if (index - 1 === i) {
          node.next = curr.next;
          node.prev = curr;
  
          if (curr.next) {
            curr.next.prev = node;
          }
  
          curr.next = node;
  
          if (!node.next) {
            this.tail = node; 
          }
          return;
        }
        i++;
        curr = curr.next;
      }
      console.log("Check index");
    }
  
    merge(list) {
      if (!list.head) {
        return null;
      }
      if (!this.head) {
        this.head = list.head;
        this.tail = list.tail;
      } else {
        this.tail.next = list.head;
        list.head.prev = this.tail; 
        this.tail = list.tail;
      }
    }
  
    sort() {
      if (!this.head || !this.head.next) {
        return null;
      }
      let curr = this.head.next;
      while (curr) {
        let key = curr;
        let prev = curr.prev;
        while (prev && prev.value > key.value) {
          [prev.value, key.value] = [key.value, prev.value];
          key = prev;
          prev = prev.prev;
        }
        curr = curr.next;
      }
    }
  
    deleteDuplicates() {
      if (!this.head) {
        return;
      }
  
      let curr = this.head;
      let values = new Set();
  
      while (curr) {
        if (values.has(curr.value)) {
          let next = curr.next;
          this.delete(curr.value);
          curr = next;
        } else {
          values.add(curr.value);
          curr = curr.next;
        }
      }
    }
  
    findSecondLargest() {
      if (!this.head || !this.head.next) {
        console.log("List too short");
        return null;
      }
  
      let curr = this.head;
      let largest = -Infinity;
      let secondLargest = -Infinity;
  
      while (curr) {
        if (curr.value > largest) {
          secondLargest = largest;
          largest = curr.value;
        } else if (curr.value > secondLargest && curr.value !== largest) {
          secondLargest = curr.value;
        }
        curr = curr.next;
      }
  
      if (secondLargest === -Infinity) {
        console.log("No second largest value");
        return null;
      }
  
      console.log("Second largest:", secondLargest);
      return secondLargest;
    }
  }
  
  const list1 = new LinkedList();
  list1.append(10);
  list1.append(50);
  list1.append(30);
  list1.append(50); 
  
  const list2 = new LinkedList();
  list2.append(40);
  list2.append(20);
  list2.append(60);
  
  console.log("List 1:");
  list1.sort();
  list1.printf();
  
  console.log("List 2:");
  list2.printf();
  
  list1.merge(list2);
  
  console.log("Merged List:");
  list1.printf();
  list1.sort();
  
  console.log("Merged and Sorted List:");
  list1.printf();
  
  list1.deleteDuplicates();
  console.log("List after deleting duplicates:");
  list1.printf();
  
  list1.findSecondLargest();
  