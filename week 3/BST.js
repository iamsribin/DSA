class Node {
    constructor(value) {
      this.right = null;
      this.left = null;
      this.value = value;
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
      } else {
        let curr = this.root;
        while (true) {
          if (curr.value > node.value) {
            if (curr.left == null) {
              curr.left = node;
              break;
            } else {
              curr = curr.left;
            }
          } else if (curr.value < node.value) {
            if (curr.right == null) {
              curr.right = node;
              break;
            } else {
              curr = curr.right;
            }
          } else {
            console.log(
              "you can't add duplicate element",
              node.value,
              "already added"
            );
            return;
          }
        }
      }
    }
  
    inorder(root) {
      if (root) {
        this.inorder(root.left);
        console.log(root.value);
        this.inorder(root.right);
      }
    }

    preorder(root) {
        if (root) {
          console.log(root.value);
          this.preorder(root.left);
          this.preorder(root.rigth);
        }
      }
    
      postOrder(root) {
        if (root) {
          this.postOrder(root.left);
          this.postOrder(root.rigth);
          console.log(root.value);
        }
      }
  
    createArray(root, arr) {
      if (root) {
        this.createArray(root.left, arr);
        arr.push(root.value);
        this.createArray(root.right, arr);
      }
    }
  
    convertTOArray(root) {
      let arr = [];
      this.createArray(root, arr);
      return arr;
    }
  
    findSecoundLargest() {
      let first = -Infinity;
      let second = -Infinity;
  
      let node = this.root;
  
      function traverse(node) {
        if (!node) {
          return;
        }
  
        if (node.value > first) {
          second = first;
          first = node.value;
        } else if (node.value > second && node.value != first) {
          second = node.value;
        }
  
        traverse(node.left);
        traverse(node.right);
      }
  
      traverse(node);
  
      return [first, second];
    }
  
    delete(value) {
      if (!this.root) {
        return null;
      } else {
        this.root = this.deleteNode(this.root, value);
      }
    }
  
    min(root) {
      if (!root.left) {
        return root.value;
      }
      return this.min(root.left);
    }
  
    deleteNode(root, value) {
      if (!root) {
        return root;
      }
  
      if (root.value > value) {
        root.left = this.deleteNode(root.left, value);
      } else if (root.value < value) {
        root.right = this.deleteNode(root.right, value);
      } else {
        if (!root.left) {
          return root.right;
        }
        if (!root.right) {
          return root.left;
        }
  
        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
      return root;
    }
  
    findHeight(root) {
      if (!root) {
        return -1;
      }
  
      let leftHeight = this.findHeight(root.left);
      let rightHeight = this.findHeight(root.right);
  
      return Math.max(leftHeight, rightHeight) + 1;
    }
  
    levelOrder() {
      if (!this.root) {
        return null;
      }
  
      let queue = [];
      queue.push(this.root);
  
      while (queue.length) {
        let curr = queue.shift();
        console.log(curr.value);
        if (curr.left) {
          queue.push(curr.left);
        }
  
        if (curr.right) {
          queue.push(curr.right);
        }
      }
    }
  
    findDepth(node, value) {
      if (!node || !value) {
        return null;
      }
  
      let curr = node;
      let depth = 0;
      while (curr) {
        if (curr.value === value) {
          return depth;
        } else if (curr.value > value) {
          curr = curr.left;
        } else if (curr.value < value) {
          curr = curr.right;
        }
        depth++;
      }
      return -1;
    }
  
    findClosest(target) {
      let node = this.root;
      let closest = node.value;
  
      while (node) {
        if (Math.abs(target - closest) > Math.abs(target - node.value)) {
          closest = node.value;
        }
  
        if (node.value > target) {
          node = node.left;
        } else if (node.value < target) {
          node = node.right;
        } else {
          return node.value;
        }
      }
  
      return closest;
    }
  
    isBinarySearchTree(root, min = -Infinity, max = Infinity) {
      if (!root) return true;
      if (root.value <= min || root.value >= max) return false;
      return (
        this.isBinarySearchTree(root.left, min, root.value) &&
        this.isBinarySearchTree(root.right, root.value, max)
      );
    }
  
    findOddNumbers(root, oddNumbers = []) {
      if (root) {
        if (root.value % 2 !== 0) {
          oddNumbers.push(root.value);
        }
        this.findOddNumbers(root.left, oddNumbers);
        this.findOddNumbers(root.right, oddNumbers);
      }
      return oddNumbers;
    }
  
    isPowerOfTwo(value) {
      if (value <= 0) return false;
      return (value & (value - 1)) === 0;
    }
  
    findPowerOfTwo(root, powerOfTwo = []) {
      if (root) {
        if (this.isPowerOfTwo(root.value)) {
          powerOfTwo.push(root.value);
        }
        this.findPowerOfTwo(root.left, powerOfTwo);
        this.findPowerOfTwo(root.right, powerOfTwo);
      }
      return powerOfTwo;
    }
  }
  
  const tree = new Tree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(30);
  tree.insert(2);
  tree.insert(7);
  tree.insert(24);
  tree.insert(36);
  tree.insert(28);
  tree.insert(36);
  tree.insert(48);
  
  tree.inorder(tree.root);
  console.log("arr", tree.convertTOArray(tree.root));
  tree.delete(30);
  console.log("after delete");
  tree.inorder(tree.root);
  
  console.log("largest two:", tree.findSecoundLargest(tree.root));
  console.log("height:", tree.findHeight(tree.root));
  console.log("level order:");
  tree.levelOrder();
  console.log("depth:", tree.findDepth(tree.root, 48));
  console.log("closest:", tree.findClosest(38));
  
  console.log("Is Binary Search Tree:", tree.isBinarySearchTree(tree.root));
  
  console.log("Odd numbers:", tree.findOddNumbers(tree.root));
  
  console.log("Powers of 2:", tree.findPowerOfTwo(tree.root));
  