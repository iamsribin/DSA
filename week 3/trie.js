class Node {
    constructor() {
      this.children = {};
      this.endWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new Node();
    }
  
    insert(word) {
      let currentNode = this.root;
      
      for (let char of word) {
        if (!currentNode.children[char]) {
          currentNode.children[char] = new Node();
        }
        currentNode = currentNode.children[char];
      }
      currentNode.endWord = true;
    }
  
    hasChild(node) {
      return Object.keys(node.children).length > 0;
    }
  
    delete(word) {
      const recursively = (currentNode, word, index) => {
        if (index == word.length) {
          if (!currentNode.endWord) {
            return false;
          }
  
          currentNode.endWord = false;
  
          return !this.hasChild(currentNode);
        }
  
        let char = word[index];
        let nextNode = currentNode.children[char];
  
        if (!nextNode) {
          return false;
        }
  
        let shouldDelete = recursively(nextNode, word, index + 1);
  
        if (shouldDelete) {
          delete currentNode.children[char];
  
          return !this.hasChild(currentNode);
        }
        return false;
      };
  
      recursively(this.root, word, 0);
    }
  
    search(word) {
      let currentNode = this.root;
  
      for (let char of word) {
        if (!currentNode.children[char]) {
          return false;
        }
        currentNode = currentNode.children[char];
      }
      return currentNode.endWord;
    }
  
    startWith(prefix) {
      let currentNode = this.root;
  
      for (let char of prefix) {
        if (!currentNode.children[char]) {
          return false;
        }
        currentNode = currentNode.children[char];
      }
  
      return true;
    }
  
    printAll() {
      let words = [];
      const traverse = (node, prefix) => {
        if (node.endWord) {
          words.push(prefix);
        }
  
        for (let char in node.children) {
          traverse(node.children[char], prefix + char);
        }
      };
  
      traverse(this.root, "");
      return words;
    }
  
    longestCommonPrefix() {
        let prefix = "";
        let currentNode = this.root;
      
        while (
          currentNode &&
          !currentNode.endWord && 
          Object.keys(currentNode.children).length === 1
        ) {
          let keys = Object.keys(currentNode.children);
          let nextChar = keys[0];
          prefix += nextChar;
          currentNode = currentNode.children[nextChar];
        }
      
        return prefix;
      }
      
  
    autoComplete(word) {
      let currentNode = this.root;
      let result = [];
  
      for (let char of word) {
        if (!currentNode.children[char]) {
          return [];
        }
        currentNode = currentNode.children[char];
      }
  
      this.findCombinations(currentNode, word, result);
      return result;
    }
  
    findCombinations(node, word, list) {
      if (node.endWord) {
        list.push(word);
      }
  
      for (let char in node.children) {
        this.findCombinations(node.children[char], word + char, list);
      }
    }
  }
  
  const trie = new Trie();
  
  const words = ["flower", "flow", "flight", "flop"];
  for (let word of words) {
    trie.insert(word);
  }
  
  console.log(trie.search("flower")); 
  console.log(trie.search("fl"));    
  
  console.log(trie.startWith("fl"));
  console.log(trie.startWith("mm")); 
  
  console.log("All words:", trie.printAll()); 
  
  console.log("Longest common prefix:", trie.longestCommonPrefix());
  
  console.log("Auto-complete for 'fl':", trie.autoComplete("fl"));
  