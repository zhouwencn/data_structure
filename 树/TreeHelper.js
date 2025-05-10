class TreeHelper {
  constructor(treeData = []) {
    this.tree = treeData;
  }

  // 深度优先查找节点
  findNode(id, nodes = this.tree) {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const result = this.findNode(id, node.children);
        if (result) return result;
      }
    }
    return null;
  }

  // 添加子节点
  addNode(parentId, newNode) {
    const parent = this.findNode(parentId);
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(newNode);
      return true;
    }
    return false;
  }

  // 删除节点（以及其子树）
  deleteNode(id, nodes = this.tree) {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node.id === id) {
        nodes.splice(i, 1);
        return true;
      }
      if (node.children) {
        const result = this.deleteNode(id, node.children);
        if (result) return true;
      }
    }
    return false;
  }

  // 遍历树（深度优先）
  traverse(callback, nodes = this.tree) {
    for (const node of nodes) {
      callback(node);
      if (node.children) {
        this.traverse(callback, node.children);
      }
    }
  }

  // 更新节点数据（只更新匹配到的字段）
  updateNode(id, newData) {
    const node = this.findNode(id);
    if (node) {
      Object.assign(node, newData);
      return true;
    }
    return false;
  }

  // 获取整个树
  getTree() {
    return this.tree;
  }
}
