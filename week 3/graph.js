class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = new Set();
      }
    }
  
    addEdge(vertex1, vertex2, undirected = true) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
  
      this.adjacencyList[vertex1].add(vertex2);
      if (undirected) {
        this.adjacencyList[vertex2].add(vertex1);
      }
    }
  
    display() {
      for (let vertex in this.adjacencyList) {
        console.log(vertex, "==>", [...this.adjacencyList[vertex]]);
      }
    }
  
    remove(vertex) {
      if (!this.adjacencyList[vertex]) {
        return null;
      }
      for (let neighbor of this.adjacencyList[vertex]) {
        this.removeNode(neighbor, vertex);
      }
      delete this.adjacencyList[vertex];
    }
  
    bfs(start) {
      let queue = [start];
      let visited = new Set();
      let result = [];
      visited.add(start);
      while (queue.length > 0) {
        let vertex = queue.shift();
        result.push(vertex);
        this.adjacencyList[vertex].forEach((element) => {
          if (!visited.has(element)) {
            queue.push(element);
            visited.add(element);
          }
        });
      }
      return result;
    }
  
    dfs(start) {
      let stack = [start];
      let result = [];
      let visited = new Set();
      visited.add(start);
  
      while (stack.length > 0) {
        let vertex = stack.pop();
        result.push(vertex);
        this.adjacencyList[vertex].forEach((element) => {
          if (!visited.has(element)) {
            stack.push(element);
            visited.add(element);
          }
        });
      }
      return result;
    }
  
    cycle() {
      let visited = new Set();
  
      const dfs = (parent, vertex) => {
        visited.add(vertex);
  
        for (let neighbor of this.adjacencyList[vertex]) {
          if (!visited.has(neighbor)) {
            if (dfs(vertex, neighbor)) return true;
          } else if (neighbor !== parent) {
            return true;
          }
        }
        return false;
      };
  
      for(let vertex in this.adjacencyList){
        if(!visited.has(vertex)){
          if(dfs(null, vertex)) return true;
        }
      }
  
      return false;
    }
  
    removeNode(vertex1, vertex2) {
      this.adjacencyList[vertex1].delete(vertex2);
      if (this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex2].delete(vertex1);
      }
    }
  
    findShortestPath(start, end) {
      let queue = [{ node: start, path: [start] }];
      let visited = new Set();
  
      while (queue.length > 0) {
        let { node, path } = queue.shift();
  
        if (node === end) {
          return path;
        }
  
        visited.add(node);
  
        this.adjacencyList[node].forEach(neighbor => {
          if (!visited.has(neighbor)) {
            queue.push({ node: neighbor, path: [...path, neighbor] });
            visited.add(neighbor);
          }
        });
      }
  
      return null; 
    }
  }
  
  const graph = new Graph();
  graph.addVertex("a");
  graph.addVertex("b");
  graph.addVertex("c");
  graph.addEdge("a", "b", true); 
  graph.addEdge("b", "c", true);  
  graph.addEdge("c", "a", false); 
  graph.addEdge("a", "d", false); 
  graph.display();
  console.log("cycle:", graph.cycle());
  console.log("bfs:", graph.bfs("a"));
  console.log("dfs:", graph.dfs("a")); 
  graph.remove("a");
  console.log("--after del");
  graph.display();
  console.log("shortest path from 'b' to 'c':", graph.findShortestPath("b", "c"));
  