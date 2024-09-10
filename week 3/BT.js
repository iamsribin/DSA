class Node {
    constructor(value) {
      this.value = value;
      this.right = null;
      this.left = null;
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const node = new Node(value);
      if (!this.root) {
        this.root = node;
        return;
      }
  
      let queue = [this.root];
      while (queue.length > 0) {
        let curr = queue.shift();
  
        if (!curr.left) {
          curr.left = node;
          break;
        } else {
          queue.push(curr.left);
        }
  
        if (!curr.right) {
          curr.right = node;
          break;
        } else {
          queue.push(curr.right);
        }
      }
    }
  
    print() {
      if (!this.root) {
        return null;
      }
  
      let queue = [this.root];
  
      while (queue.length > 0) {
        let curr = queue.shift();
        console.log(curr.value);
  
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
    }
  
    search(value) {
      if (!this.root) return null;
  
      let queue = [this.root];
  
      while (queue.length > 0) {
        let curr = queue.shift();
  
        if (curr.value === value) {
          return true;
        }
  
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
      return false;
    }
  
    delete(value) {
      if (!this.root) {
        return null;
      }
  
      let queue = [this.root];
      let lastNode = null;
      let deleteNode = null;
  
      while (queue.length) {
        lastNode = queue.shift();
  
        if (lastNode.value === value) {
          deleteNode = lastNode;
        }
  
        if (lastNode.left) {
          queue.push(lastNode.left);
        }
  
        if (lastNode.right) {
          queue.push(lastNode.right);
        }
      }
  
      if (deleteNode) {
        deleteNode.value = lastNode.value;
        this.deepDelete(lastNode);
      }
    }
  
    deepDelete(deepNode) {
      let queue = [this.root];
  
      while (queue.length) {
        let curr = queue.shift();
  
        if (curr == deepNode) {
          curr = null;
        }
  
        if (curr.left) {
          if (curr.left === deepNode) {
            curr.left = null;
            return;
          } else {
            queue.push(curr.left);
          }
        } 
        
        if (curr.right) {
          if (curr.right === deepNode) {
            curr.right = null;
            return;
          } else {
            queue.push(curr.right);
          }
        }
  
      }
    }
  }
  
  const tree = new Tree();
  tree.insert(4);
  tree.insert(42);
  tree.insert(41);
  tree.insert(40);
  tree.insert(70);
  tree.insert(90);
  tree.insert(80);
  
  tree.print();
  console.log("search value", tree.search(41));
  tree.delete(4);
  tree.print();
  