// 单个链表节点类
class ListNode {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // 向链表末尾添加节点
  append(value) {
    const newNode = new ListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
  }

  // 向链表头部添加节点
  prepend(value) {
    const newNode = new ListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
  }

  // 查找第一个匹配值的节点
  find(value) {
    let current = this.head
    while (current) {
      if (current.value === value) return current
      current = current.next
    }
    return null
  }

  // 根据值删除节点
  remove(value) {
    let current = this.head
    while (current) {
      if (current.value === value) {
        if (current.prev) current.prev.next = current.next
        else this.head = current.next

        if (current.next) current.next.prev = current.prev
        else this.tail = current.prev

        this.length--
        return true
      }
      current = current.next
    }
    return false
  }

  // 打印链表（从头到尾）
  printForward() {
    let current = this.head
    const result = []
    while (current) {
      result.push(current.value)
      current = current.next
    }
    console.log("Forward:", result.join(" → "))
  }

  // 打印链表（从尾到头）
  printBackward() {
    let current = this.tail
    const result = []
    while (current) {
      result.push(current.value)
      current = current.prev
    }
    console.log("Backward:", result.join(" ← "))
  }
}
