// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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
    constructor({value}) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    push(value){
        const newNode = new Node({value});
        if (!this.bottom) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length += 1;
        return this.size();
    }

    pop(){
        if (!this.size()) return null;
        let node = this.top;
        if (this.size() === 1) {
            this.bottom = null;
            this.top = null;
        } else {
            this.top = this.top.next;
        }
        this.length -= 1;
        return node.value;        
    }




}

exports.Node = Node;
exports.Stack = Stack;
