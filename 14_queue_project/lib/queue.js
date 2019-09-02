// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }
    
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.back) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        this.length += 1;
        return this.size();
    }

    dequeue() {
        if (!this.size()) return null;
        const node = this.front;
        if (this.size() === 1) {
            this.front = null;
            this.back = null;
        } else {
            this.front = this.front.next;
        }
        this.length -= 1;
        return node.value;
    }


}

exports.Node = Node;
exports.Queue = Queue;