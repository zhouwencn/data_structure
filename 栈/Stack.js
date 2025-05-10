class Stack {
  constructor() {
    this.items = [];
  }

  // 入栈
  push(value) {
    this.items.push(value);
  }

  // 出栈
  pop() {
    return this.items.pop();
  }

  // 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1] || null;
  }

  // 获取栈的大小
  size() {
    return this.items.length;
  }

  // 判断栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 清空栈
  clear() {
    this.items = [];
  }

  // 打印栈内容（从栈底到栈顶）
  print() {
    console.log(this.items.join(' <- '));
  }

  // 获取栈的副本
  toArray() {
    return [...this.items];
  }
}
