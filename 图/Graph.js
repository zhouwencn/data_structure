class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.adjacencyList = new Map(); // 邻接表
  }

  // 添加节点
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Set());
    }
  }

  // 添加边
  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjacencyList.get(v1).add(v2);
    if (!this.isDirected) {
      this.adjacencyList.get(v2).add(v1);
    }
  }

  // 删除边
  removeEdge(v1, v2) {
    if (this.adjacencyList.has(v1)) this.adjacencyList.get(v1).delete(v2);
    if (!this.isDirected && this.adjacencyList.has(v2)) {
      this.adjacencyList.get(v2).delete(v1);
    }
  }

  // 删除节点
  removeVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) return;
    for (let neighbor of this.adjacencyList.get(vertex)) {
      this.adjacencyList.get(neighbor).delete(vertex);
    }
    this.adjacencyList.delete(vertex);
  }

  // 获取相邻节点
  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex) || new Set();
  }

  // 深度优先遍历
  dfs(start, visited = new Set(), result = []) {
    if (!this.adjacencyList.has(start)) return result;
    visited.add(start);
    result.push(start);
    for (let neighbor of this.getNeighbors(start)) {
      if (!visited.has(neighbor)) {
        this.dfs(neighbor, visited, result);
      }
    }
    return result;
  }

  // 广度优先遍历
  bfs(start) {
    if (!this.adjacencyList.has(start)) return [];
    const visited = new Set();
    const queue = [start];
    const result = [];

    while (queue.length) {
      const vertex = queue.shift();
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
        for (let neighbor of this.getNeighbors(vertex)) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
    return result;
  }

  // 判断两点是否连通（DFS）
  isConnected(v1, v2) {
    return this.dfs(v1).includes(v2);
  }

  // 输出图结构
  print() {
    for (let [vertex, edges] of this.adjacencyList) {
      console.log(`${vertex} -> ${Array.from(edges).join(', ')}`);
    }
  }
}
