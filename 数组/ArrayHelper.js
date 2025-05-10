class ArrayHelper {
  constructor(initialArray = []) {
    this.array = [...initialArray];
  }

  // 添加元素
  add(item) {
    this.array.push(item);
  }

  // 删除指定值的第一个元素
  remove(item) {
    const index = this.array.indexOf(item);
    if (index !== -1) this.array.splice(index, 1);
  }

  // 删除指定下标的元素
  removeAt(index) {
    if (index >= 0 && index < this.array.length) {
      this.array.splice(index, 1);
    }
  }

  // 更新指定下标的元素
  update(index, newValue) {
    if (index >= 0 && index < this.array.length) {
      this.array[index] = newValue;
    }
  }

  // 获取指定下标的元素
  get(index) {
    return this.array[index];
  }

  // 查找元素的下标（未找到返回 -1）
  indexOf(item) {
    return this.array.indexOf(item);
  }

  // 判断是否包含元素
  includes(item) {
    return this.array.includes(item);
  }

  // 去重
  unique() {
    this.array = [...new Set(this.array)];
  }

  // 排序（可自定义比较函数）
  sort(compareFn) {
    this.array.sort(compareFn);
  }

  // 过滤
  filter(callback) {
    return this.array.filter(callback);
  }

  // 映射
  map(callback) {
    return this.array.map(callback);
  }

  // 查找第一个满足条件的元素
  find(callback) {
    return this.array.find(callback);
  }

  // 清空数组
  clear() {
    this.array = [];
  }

  // 获取长度
  size() {
    return this.array.length;
  }

  // 获取数组副本
  toArray() {
    return [...this.array];
  }

  // 打印数组
  print() {
    console.log(this.array);
  }
}
