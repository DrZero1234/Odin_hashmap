import { LinkedList, SetNode } from "./LinkedList.js";
class HashSet {
    constructor() {
        this.currentLength = 4;
        this.buckets = new Array(this.currentLength).fill(null);
        this.loadFactor = .75;
        this.occupied = 0;
    }

    hash(key) {
        let hashCode = 0;
        if (key.length === 0) return hash
        for (let i = 0; i < key.length; i++) {
            let chr = key.charCodeAt(i);
            hashCode = (((hashCode << 5) - hashCode) + chr) % this.buckets.length;
            hashCode |=0;
        }

        return hashCode
    }

    set(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
        const node = new SetNode(key)
        // Assigns a new Linked list to a bucket that is not occupied.
        if (this.buckets[index] === null) {
            this.buckets[index] = new LinkedList()
            this.buckets[index].head = node;
            this.occupied++;
        } else {
            this.buckets[index].append(node);
        }
        this.expandBuckets()
    }

    get(key) {
        const index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }

        if (this.buckets[index] === null) {
            return null
        }
        else {
            const list = this.buckets[index];
            let currentNode = list.head;
            do {
                if (currentNode.key === key) {
                    return currentNode
                }
                currentNode = currentNode.next
            }
            while(currentNode.next || currentNode.key)

        }
        return null
    }

    has(key) {
        const index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }

        if (this.buckets[index] === null) {
            return null
        }
        else {
            const list = this.buckets[index];
            let currentNode = list.head;
            
            do {
                if (currentNode.key === key) {
                    return true
                }
                currentNode = currentNode.next
            }
            
            while(currentNode.next || currentNode.key)

        }
        return false
    }

        remove(key) {
        const index = this.hash(key);
        const list = this.buckets[index];
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }

        if (list === null) {
            return false
        }

        list.display();

        if (list.head.key && !list.head.next) {
            this.buckets[index] = null;
            this.occupied--;
            return true
        }


        if (list.head.key === key) {
            list.head = list.head.next;
            list.size--;
            list.display()
            return true
        }


        let current = list.head;
        let previous = null;

        while (current && current.key !== key) {
            previous = current;
            current = current.next
        }

        if (current) {
            previous.next = current.next;
            list.size--;
            list.display()
            return true
        }
        return false

    }

    length() {
        let total = 0;
        this.buckets.forEach((bucket) => {
            if (bucket) {
                total += bucket.size
            }

    })

        return total

    }

    keys() {
        const keyArray = [];
        this.buckets.forEach((bucket) => {
            if (bucket) {
                let current = bucket.head;
                while(current) {
                    keyArray.push(current.key);
                    current = current.next;
                }
            }
        })
        return keyArray
    }

    expandBuckets () {
        if ((this.occupied / this.currentLength) > this.loadFactor) {
            let copy_arr = this.buckets.slice();
            this.currentLength = this.currentLength * 2
            this.buckets = new Array(this.currentLength).fill(null)
            this.occupied = 0
            copy_arr.forEach((bucket) => {
                if (bucket) {
                    let currentNode = bucket.head;
                    while(currentNode) {
                        this.set(currentNode.key);
                        currentNode = currentNode.next
                    }
                }
            })
        }
    }
}

const hashSet = new HashSet();

hashSet.set("name");
hashSet.set("a");
hashSet.set("sadasd");
hashSet.set("asdada");
hashSet.set("namei");
hashSet.set("name");



hashSet.set("age");
hashSet.set("city");
hashSet.set("job");
hashSet.set("hobby");
hashSet.set("language");
hashSet.set("language");


console.log(hashSet.buckets)