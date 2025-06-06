## 单向链表拆解

### 第一步，先从 append 开始（向尾部追加节点）

1. 在创建第一个节点的时候，头和尾都指向同一个节点
2. 接着创建第二个节点，将尾部的 next 指向第二个节点，那么由于对象是引用关系，所以 head 也会指向第二个节点

```js
append(1)

// 创建同一个引用关系
const head = { value: 1, next: null }
const tail = { value: 1, next: null }

append(2)
const tail = { value: 1, next: { value: 2, next: null } }

// 上面修改了tail的next，head也会改变
const head = { value: 1, next: { value: 2, next: null } }

// 将tail改为新的tail, 这一步的操作的时候这个tail的引用变成了和head.next={ value: 2, next: null }的引用一样
const tail = { value: 2, next: null }

apppend(3)
const tail = { value: 2, next: { value: 3, next: null } }

// 上面修改了tail的next，head也会改变
const head = { value: 1, next: { value: 2, next: { value: 3, next: null } } }

// 讲tail改为新的tail, 这一步的操作的时候这个tail的引用变成了和head.next={ value: 3, next: null }的引用一样
const tail = { value: 3, next: null }

以此类推

补充：在length等于2的时候改用test这个变量作为指针,来改变head头节点的next的值，然后下一步遍历的时候，直接修改test.next的值，通过debugger调试会发现head的next的值也同步更新了，所以只要值是一个对象，它就是引用传递，只看地址，都指向其开辟的内存空间，用test和用tail都一样，只要指针都指向同一块内存空间就行了
```
