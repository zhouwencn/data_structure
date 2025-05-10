class Queue {
  constructor() {
    this.items = [];
  }

  // 入队
  enqueue(value) {
    this.items.push(value);
  }

  // 出队
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  // 查看队头
  peek() {
    return this.isEmpty() ? null : this.items[0];
  }

  // 获取队列长度
  size() {
    return this.items.length;
  }

  // 判断是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 清空队列
  clear() {
    this.items = [];
  }

  // 打印队列内容
  print() {
    console.log(this.items.join(' <- '));
  }
}
