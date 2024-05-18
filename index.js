class Node {
    constructor(value) {
        this.value = value
        this.nextNode = null
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head')

        this.head.nextNode = new Node(1)


    }

    toString() {
        let result = 'head -> '
        let link = this.head.nextNode
        while (link != null) {
            result += `${link.value} -> `
            link = link.nextNode
        }

        return console.log(result + 'null')
    }

    append(value) {
        let link = this.head
        while (true) {
            if (link.nextNode != null) {
                link = link.nextNode
            } else {
                link.nextNode = new Node(value)
                break
            }
        }
        this.toString()
    }

    prepend(value) {
        let newNode = new Node(value)
        newNode.nextNode = this.head.nextNode
        this.head.nextNode = newNode

        this.toString()
    }

    size() {
        let count = 0
        let link = this.head.nextNode
        while (link != null) {
            count += 1
            link = link.nextNode
        }

        return console.log(count)
    }

    showHead() {
        return console.log(this.head.nextNode)
    }

    showTail() {
        let link = this.head
        while (true) {
            if (link.nextNode != null) {
                link = link.nextNode
            } else {
                return console.log(link)
            }
        }
    }

    at(index) {
        let count = 0
        let link = this.head.nextNode
        while (true) {
            if (count == index) {
                return console.log(link)
            } else if (link.nextNode == null) {
                return console.log('Такого узла нет')
            } else {
                link = link.nextNode
                count += 1
            }
        }
    }

    pop() {
        let link = this.head
        while (true) {
            if (link.nextNode.nextNode == null) {
                console.log(link)
                link.nextNode = null
                break
            } else {
                link = link.nextNode
            }
        }

        this.toString()
    }

    contains(value) {
        let link = this.head.nextNode
        while (link != null) {
            if (link.value == value) {
                return console.log(true)
            }
            link = link.nextNode
        }
        return console.log(false)
    }
    
    find(value) {
        let count = 0
        let link = this.head.nextNode
        while (link != null) {
            if (link.value == value) {
                return console.log(count)
            }
            link = link.nextNode
            count += 1
        }
        return console.log(null)
    }

    insertAt(value, index) {
        let count = 0
        let link = this.head
        let a = this
        while (true) {
            if (count == index) {
                let newNode = new Node(value)
                newNode.nextNode = link.nextNode
                link.nextNode = newNode
                a.toString()
                break
            } else if (link.nextNode == null) {
                return console.log('Такого индекса нет')
            } else {
                link = link.nextNode
                count += 1
            }
        }
    }

    removeAt(index) {
        let count = 0
        let link = this.head
        let a = this
        while (true) {
            if (count == index) {
                link.nextNode = link.nextNode.nextNode
                a.toString()
                break
            } else if (link.nextNode == null) {
                return console.log('Такого индекса нет')
            } else {
                link = link.nextNode
                count += 1
            }
        }
    }
}

let list = new LinkedList()

console.log(list)
list.toString()

list.append(2)
list.append(3)
list.append(4)

list.prepend(0)

list.size()

list.showHead()

list.showTail()

list.at(2)

list.pop()

list.contains(3)
list.contains(1)

list.find(3)
list.find(1)

list.insertAt(4, 4)

list.removeAt(3)
