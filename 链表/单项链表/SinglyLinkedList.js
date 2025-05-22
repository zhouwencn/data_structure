// 单向链表节点
class SingleListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // 向尾部追加节点
  append(value) {
    const newNode = new SingleListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (this.length === 2) {
        console.log('isEqual', this.tail === this.head.next) // true，表示在append 20的时候指向的是同一个引用
      }
      // 延长链表长度，同时更新 this.tail指针引用
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  }

  // 向头部插入节点
  prepend(value) {
    const newNode = new SingleListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
  }

  // 查找某个值的节点
  find(value) {
    let current = this.head
    while (current) {
      if (current.value === value) return current
      current = current.next
    }
    return null
  }

  // 删除指定值的节点
  remove(value) {
    if (!this.head) return false

    // 删除头节点
    if (this.head.value === value) {
      this.head = this.head.next
      if (!this.head) this.tail = null
      this.length--
      return true
    }

    // 删除中间或尾部节点
    let current = this.head
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next
        if (!current.next) this.tail = current
        this.length--
        return true
      }
      current = current.next
    }

    return false
  }

  // 打印链表
  print() {
    let current = this.head
    console.log('this.head', current)

    const result = []
    const result2 = []
    while (current) {
      result.push(current.value)
      result2.push(current)
      current = current.next
    }
    console.log('result2', result2)

    console.log('List:', result.join(' → '))
  }
}
