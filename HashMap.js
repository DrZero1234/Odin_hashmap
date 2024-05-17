import { LinkedList, Node } from "./LinkedList.js";


class HashMap {

    constructor() {
        this.currentLength = 16;
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
            hashCode = (((hashCode << 5) - hashCode) + chr) % this.buckets.length;
            hashCode |=0;
        }

        return hashCode
    }
    // If the key´s Linked List head has the same value it should replace the old value with the new one
    // If 2 different sits in the same buckets it should expand the Linked list and place the new Node to the end
    // The length of the buckets should increase if the occupied buckets reached the load factor
    set(key,value) {
        const index = this.hash(key);
        console.log(index)
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
            while(currentNode.next || currentNode.key)

        }
        return null
    }

    // If the HashMap has the key it should return true otherwise false
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

    // If the key is in the HashMap it should remove that entry and return true, otherwise return false.
    remove(key) {
        if (!key) {
            return false
        }
        const index = this.hash(key);
        const list = this.buckets[index];
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }

        // If bucket doesnt exist on the index return false
        if (!list|| !list.head) {
            return false
        }

            let currentNode = list.head;
            let nextNode = currentNode.next ;

            console.log(currentNode);
            console.log(nextNode)
            
            // If the key is the head and the linked list has more elements then the next element will be the head

             if (currentNode.key === key && !currentNode.next) {
                this.buckets[index] = null;
                return true
            }
            if (currentNode.key === key && !currentNode.next) {
                list.head = nextNode
                return true

            // If there is only one element in the linked list removing that element will turn the index of the buckets to null
            } 
            else {
                let previousNode = currentNode;
                currentNode = currentNode.next;
                nextNode = currentNode.next;

                while (currentNode.next) {
                    if (currentNode.key === key) {
                        if (previousNode && nextNode) {
                            currentNode.next = null;
                            previousNode.next = nextNode;
                            return true

                        } else if (!nextNode) {
                            currentNode.next = null;
                            previousNode.next = null;
                            return true
                        }
                    }
                    previousNode = currentNode;
                    currentNode = nextNode;
                    nextNode = currentNode.next
                }
            this.buckets[index].size--;
            return true
            }
        return false
        
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

const hashMap = new HashMap()

hashMap.set("name", "Bogdan");
hashMap.set("a", "Bogdan");
hashMap.set("sadasd", "Bogdan");
hashMap.set("asdada", "Bogdan");
hashMap.set("namei", "Salut");
hashMap.set("name", "Bogdan");

hashMap.set("age", 25);
hashMap.set("city", "New York");
hashMap.set("job", "Engineer");
hashMap.set("hobby", "Reading");
hashMap.set("language", "JavaScript");
hashMap.set("color", "Blue");
hashMap.set("fruit", "Banana");
hashMap.set("car", "Tesla");
hashMap.set("animal", "Lion");
hashMap.set("sport", "Soccer");
hashMap.set("music", "Classical");
hashMap.set("movie", "Inception");
hashMap.set("book", "The Great Gatsby");
hashMap.set("country", "Japan");
hashMap.set("drink", "Coffee");
hashMap.set("programming", "Python");
hashMap.set("school", "MIT");
hashMap.set("subject", "Physics");
hashMap.set("team", "Lakers");
hashMap.set("computer", "MacBook");
hashMap.set("game", "Chess");
hashMap.set("holiday", "Christmas");
hashMap.set("weather", "Sunny");
hashMap.set("food", "Pizza");
hashMap.set("emotion", "Happy");
hashMap.set("continent", "Africa");
hashMap.set("instrument", "Piano");
hashMap.set("company", "Google");
hashMap.set("currency", "Euro");
hashMap.set("planet", "Mars");
hashMap.set("flower", "Rose");
hashMap.set("shoe", "Sneaker");
hashMap.set("constellation", "Orion");
hashMap.set("element", "Gold");
hashMap.set("time", "Midnight");
hashMap.set("city2", "Paris");
hashMap.set("drink2", "Tea");
hashMap.set("sport2", "Tennis");
hashMap.set("subject2", "History");
hashMap.set("planet2", "Earth");
hashMap.set("animal2", "Elephant");
hashMap.set("book2", "To Kill a Mockingbird");
hashMap.set("city3", "London");
hashMap.set("food2", "Sushi");
hashMap.set("emotion2", "Sad");
hashMap.set("drink3", "Orange Juice");
hashMap.set("instrument2", "Violin");
hashMap.set("job2", "Teacher");
hashMap.set("color2", "Green");
hashMap.set("subject3", "Mathematics");
hashMap.set("language2", "Python");
hashMap.set("company2", "Microsoft");
hashMap.set("team2", "Yankees");
hashMap.set("movie2", "The Shawshank Redemption");
hashMap.set("sport3", "Basketball");
hashMap.set("holiday2", "Thanksgiving");
hashMap.set("weather2", "Rainy");
hashMap.set("time2", "Noon");
hashMap.set("music2", "Rock");
hashMap.set("flower2", "Tulip");
hashMap.set("shoe2", "High Heels");
hashMap.set("element2", "Silver");
hashMap.set("currency2", "Dollar");
hashMap.set("fruit2", "Apple");
hashMap.set("game2", "Monopoly");
hashMap.set("car2", "Ford");
hashMap.set("constellation2", "Ursa Major");
hashMap.set("school2", "Harvard");
hashMap.set("country2", "Australia");
hashMap.set("continent2", "Antarctica");
hashMap.set("job3", "Doctor");
hashMap.set("music3", "Hip Hop");
hashMap.set("drink4", "Coca Cola");
hashMap.set("animal3", "Kangaroo");
hashMap.set("book3", "1984");
hashMap.set("city4", "Tokyo");
hashMap.set("city", "Bratislava");
hashMap.set("food3", "Pasta");
hashMap.set("emotion3", "Excited");
hashMap.set("element3", "Platinum");
hashMap.set("team3", "Red Sox");
hashMap.set("movie3", "The Godfather");
hashMap.set("subject4", "Chemistry");
hashMap.set("color3", "Purple");
hashMap.set("language3", "Java");

//hashMap.remove("food3")
console.log(hashMap.buckets[0])



console.log(hashMap.get("age"))

console.log(hashMap.has("team3"))

console.log(hashMap.remove("team3"))
console.log(hashMap.remove("lel"))





/*

console.log(hashMap.remove("a"))

console.log(hashMap.remove(7));
console.log(hashMap.remove("movie"))
console.log(hashMap.buckets)

*/





