class Node {
    constructor(key,value) {
        this.key = key;
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(node) {
        if (!this.head) {
            this.head = node;
            return this
        }
            
        let currentNode = this.head;
          
        while(currentNode.next) {
            if (currentNode.key === node.key) {
                currentNode.value = node.value;
                return this
             }
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this.size++;
        return this
    }

}


const node1 = new Node("lel", "lol")
const node2 = new Node("kek", "value")
node1.next = node2;

const list = new LinkedList(node1)






export {LinkedList, Node}