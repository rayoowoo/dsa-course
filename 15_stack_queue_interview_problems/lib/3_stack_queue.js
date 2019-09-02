// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor({value, next}) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    pop() {
        if (!this.top) return null;
        const node = this.top;
        if (this.top === this.bottom) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next;
        }
        this.length--;
        return node;
    }

    push(node) {
        const newNode = new Node(node);
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this.size();
    }

    size() {
        return this.length;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor() {
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
    }

    enqueue(value) {
        const newNode = new Node({value, next: null});


        this.inStack.push(newNode);
        this.outStack = new Stack();

        if (!this.front) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;            
        }
        let initialNode = this.inStack.top;
        while (initialNode) {
            this.outStack.push(initialNode);
            initialNode = initialNode.next;
        }
        return this.size();
    }

    dequeue() {
        if (!this.size()) return null;
        
        const node = this.outStack.pop();
        this.inStack = new Stack();

        if (this.outStack.length) {
            let otherNode = this.outStack.top;
            while (otherNode) {
                this.inStack.push(otherNode);
                otherNode = otherNode.next;
            }
            this.front = this.inStack.bottom;
            this.back = this.inStack.top;
        } else {
            this.front = null;
            this.back = null;
        }
        return node;
    }

    size() {
        return this.outStack.size();
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
