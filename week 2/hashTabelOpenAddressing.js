class Table {
    constructor(size) {
      this.table = new Array(size);  
      this.size = size;
      this.keys = new Array(size); 
    }
  
    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }
  
    linearProbe(index) {
      let newIndex = index;
      while (this.table[newIndex] !== undefined && this.table[newIndex] !== null) {
        newIndex = (newIndex + 1) % this.size;  
      }
      return newIndex;
    }
  
    set(key, value) {
      let index = this.hash(key);
  
      if (this.table[index] !== undefined && this.keys[index] !== key) {
        index = this.linearProbe(index);
      }
  
      this.table[index] = value;
      this.keys[index] = key;  
    }
  
    get(key) {
      let index = this.hash(key);
  
      while (this.table[index] !== undefined) {
        if (this.keys[index] === key) {
          console.log(this.table[index]);  
          return this.table[index];
        }
        index = (index + 1) % this.size; 
      }
      console.log("Key not found");
      return undefined;  
    }
  
    remove(key) {
      let index = this.hash(key);
  
      while (this.table[index] !== undefined) {
        if (this.keys[index] === key) {
          this.table[index] = null;  
          this.keys[index] = undefined; 
          console.log(`Key '${key}' removed`);
          return;
        }
        index = (index + 1) % this.size; 
      }
      console.log("Key not found for removal");
    }
  
    display() {
      for (let i = 0; i < this.size; i++) {
        if (this.table[i] !== undefined && this.table[i] !== null) {
          console.log(`Index ${i}: Key = ${this.keys[i]}, Value = ${this.table[i]}`);
        }
      }
    }
  }
  
  const table = new Table(5);
  
  table.set("hello", "world");
  table.set("foo", "bar");
  table.set("test", "value");
  table.set("collision", "resolve");  
  
  table.display();
  
  table.remove("foo");
  table.display();
  
  table.get("test"); 
  table.get("foo"); 
  