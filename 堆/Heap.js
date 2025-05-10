class Heap {
  constructor(compareFn) {
    this.data = [];
    this.compare = compareFn || ((a, b) => a - b); // 默认是最小堆
  }

  // 获取父子节点下标
  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }

  // 交换元素
  swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }

  // 插入新元素
  insert(value) {
    this.data.push(value);
    this.heapifyUp(this.data.length - 1);
  }

  // 向上维护堆性质
  heapifyUp(index) {
    let parent = this.getParentIndex(index);
    while (index > 0 && this.compare(this.data[index], this.data[parent]) < 0) {
      this.swap(index, parent);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  // 向下维护堆性质
  heapifyDown(index) {
    const length = this.data.length;
    let smallest = index;

    while (true) {
      const left = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);

      if (left < length && this.compare(this.data[left], this.data[smallest]) < 0) {
        smallest = left;
      }
      if (right < length && this.compare(this.data[right], this.data[smallest]) < 0) {
        smallest = right;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  // 获取堆顶元素（最小或最大）
  peek() {
    return this.data[0];
  }

  // 删除堆顶元素并重新调整
  extractTop() {
    if (this.data.length === 0) return null;
    const top = this.data[0];
    const end = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = end;
      this.heapifyDown(0);
    }
    return top;
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }
}
