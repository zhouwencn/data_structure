class HashTable {
  constructor(size = 53) {
    this.buckets = new Array(size);
    this.size = size;
  }

  // 简单哈希函数（支持字符串 key）
  _hash(key) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96; // 'a' → 1
      total = (total * PRIME + value) % this.size;
    }
    return total;
  }

  // 设置键值对
  set(key, value) {
    const index = this._hash(key);
    if (!this.buckets[index]) this.buckets[index] = [];
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
  }

  // 获取键对应的值
  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    if (!bucket) return undefined;

    for (let [k, v] of bucket) {
      if (k === key) return v;
    }

    return undefined;
  }

  // 删除键
  remove(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    if (!bucket) return false;

    const i = bucket.findIndex(([k]) => k === key);
    if (i !== -1) {
      bucket.splice(i, 1);
      return true;
    }

    return false;
  }

  // 判断键是否存在
  has(key) {
    return this.get(key) !== undefined;
  }

  // 获取所有键
  keys() {
    const result = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let [k] of bucket) result.push(k);
      }
    }
    return result;
  }

  // 获取所有值
  values() {
    const result = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let [, v] of bucket) result.push(v);
      }
    }
    return result;
  }

  // 获取所有键值对
  entries() {
    const result = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let [k, v] of bucket) result.push([k, v]);
      }
    }
    return result;
  }
}
