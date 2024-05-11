import { LinkedList, Node } from "./LinkedList.js";


class HashMap {

    constructor() {
        this.currentLength = 4;
        this.buckets = new Array(this.currentLength).fill(null);
        this.loadFactor = .75;
        this.capacity = this.buckets.length;
        this.occupied = 0;
    }


    hash(key) {
        let hashCode = 0;
        if (key.length === 0) return hash
        for (let i = 0; i < key.length; i++) {
            let chr = key.charCodeAt(i);
            hashCode = ((hashCode << 5) - hashCode) + chr;
            hashCode |=0;
        }

        return hashCode % this.currentLength
    }
    // If the key´s Linked List head has the same value it should replace the old value with the new one
    // If 2 different sits in the same buckets it should expand the Linked list and place the new Node to the end
    // The length of the buckets should increase if the occupied buckets reached the load factor
    set(key,value) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
        const node = new Node(key,value)
        // Assigns a new Linked list to a bucket that is not occupied.
        if (this.buckets[index] === null) {
            this.buckets[index] = new LinkedList()
            this.buckets[index].head = node;
            this.occupied++;
        } else {
            this.buckets[index].append(node);
        }
    }
    // Returns the key´s value if its found, if its inside a linked list it should go through the linked list until its found
    // If Its not found it should return null
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
                    return currentNode.value
                }
                currentNode = currentNode.next
            }
            while(currentNode.next)

        }
        return null
    }

    // If the HashMap has the key it should return true otherwise false
    has(key) {

    }

    // If the key is in the HashMap it should remove that entry and return true, otherwise return false.
    remove(key) {

    }

    // Returns the number of stored keys of the HashMap
     length() {

    }
    // Removes all the entries of the HashMap
     clear() {

    }
    // Returns an array of all the stored keys
    keys() {

    }
    // Returns an array of all the stored keys
    values() {

    }
    // Returns an array of [key,value] pairs Example: [[firstKey, firstValue], [secondKey, secondValue]]
    entries() {

    }
} 

const map = new HashMap();
const map2 = new HashMap();

map.set("kek", "lel")
map.set("kuk", "lel")
map.set("kell", "lul")
map.set("kull", "lul")
map.set("kull", "lul")
map.set("kull", "lul")
map.set("kull", "lul")
map.set("kull", "lul")
map.set("aman", "yeag")
map.set("kejf", "yeag")
map.set("aa", "yefsad")




