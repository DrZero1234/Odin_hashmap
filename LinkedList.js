class Node {


}

class SetNode {
    constructor(key) {
        this.key = key;
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 1;
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
             }
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this.size++
        return this
    }

    display() {
        let current = this.head;
        let elements = [];

        while (current) {
            elements.push(current.key);
            current = current.next;
        }

        console.log(elements.join(" -> "))
    }

}


const node1 = new Node("lel", "lol")
const node2 = new Node("kek", "value")
node1.next = node2;

const list = new LinkedList(node1)






export {LinkedList, Node,SetNode}