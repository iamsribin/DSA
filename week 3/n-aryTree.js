class Node {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
  
  class NTree {
    constructor(limit) {
      this.limit = limit;
      this.root = null;
    }
  
    insert(value) {
      const node = new Node(value);
  
      if (!this.root) {
        this.root = node;
        return;
      }
  
      let queue = [this.root];
  
      while (queue.length) {
        let curr = queue.shift();
  
        if (curr.children.length < this.limit) {
          curr.children.push(node);
          break;
        } else {
          queue.push(...curr.children);
        }
      }
    }
  
    delete(value) {
      if (!this.root) {
        return null;
      }
  
      if (this.root.value === value) {
        if (this.root.children.length === 0) {
          this.root = null;
          return;
        } else {
          let lastNode = this.getLastNode();
          this.root.value = lastNode.value;
          this.deletedeep(lastNode);
          return;
        }
      }
  
      let queue = [this.root];
      let lastNode = null;
      let deleteNode = null;
  
      while (queue.length) {
        lastNode = queue.shift();
  
        if (lastNode.value === value) {
          deleteNode = lastNode;
        }
        queue.push(...lastNode.children);
      }
  
      if (deleteNode) {
        deleteNode.value = lastNode.value;
        this.deletedeep(lastNode);
      }
    }
  
    getLastNode() {
      let queue = [this.root];
      let lastNode = null;
      while (queue.length) {
        lastNode = queue.shift();
        queue.push(...lastNode.children);
      }
      return lastNode;
    }
  
    deletedeep(deepNode) {
      let queue = [this.root];
  
      while (queue.length) {
        let curr = queue.shift();
  
        for (let i = 0; i < curr.children.length; i++) {
          if (curr.children[i] === deepNode) {
            curr.children.splice(i, 1);
            return;
          } else {
            queue.push(curr.children[i]);
          }
        }
      }
    }
  
    print() {
      if (!this.root) {
        return null;
      }
  
      let queue = [this.root];
  
      while (queue.length) {
        let curr = queue.shift();
        console.log(curr.value);
        queue.push(...curr.children);
      }
    }
  
    search(value) {
      if (!this.root) {
        return false;
      }
  
      let queue = [this.root];
  
      while (queue.length) {
        let curr = queue.shift();
        if (curr.value === value) {
          return true;
        } else {
          queue.push(...curr.children);
        }
      }
      return false;
    }
  }
  
  const nTree = new NTree(2);
  nTree.insert(3);
  nTree.insert(36);
  nTree.insert(23);
  nTree.insert(34);
  nTree.insert(93);
  nTree.insert(13);
  nTree.insert(33);
  nTree.insert(30);
  nTree.print(); 
  console.log(nTree.search(903)); 
  nTree.delete(36);
  console.log("after delete:");
  nTree.print(); 
  