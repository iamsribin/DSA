class Table {
    constructor(size) {
      this.table = new Array(size); 
      this.size = size;
    }
  
    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }
  
    set(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }

      const existingItem = this.table[index].find(item => item[0] === key);
      if (existingItem) {
        existingItem[1] = value; 
      } else {
        this.table[index].push([key, value]); 
      }
    }
  
    get(key) {
      const index = this.hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            console.log(this.table[index][i][1]); 
            return this.table[index][i][1];
          }
        }
      }
      console.log("Key not found");
      return undefined; 
    }
  
    remove(key) {
      const index = this.hash(key);
      if (this.table[index]) {
        this.table[index] = this.table[index].filter(item => item[0] !== key); 
        if (this.table[index].length === 0) {
          this.table[index] = undefined; 
        }
      }
    }
  
    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          for (let j = 0; j < this.table[i].length; j++) {
            console.log(`Key: ${this.table[i][j][0]}, Value: ${this.table[i][j][1]}`);
          }
        }
      }
    }
  }
  
  const table = new Table(5);
  
  table.set("usoafdh", "sribin");
  table.set("hello", "hadssdd");
  table.set("world", "example"); 
  table.display();
  
  table.remove("hello"); 
  table.display();
  
  table.get("hello"); 
  table.get("usoafdh"); 
  