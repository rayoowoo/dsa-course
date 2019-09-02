// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished, 
// return a string representing the original linked list's values backwards 
// in the following format:
//
//                             'A -> B -> C -> D' 
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------

function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here
    if (!linkedList.length) return "";
    if (linkedList.length === 1) return linkedList.head.value.toString();
    const list = [];
    let node = linkedList.head;
    while (node) {
        let processedValue = node.value;
        if (processedValue) processedValue = processedValue.toString();
        list.push(processedValue);
        node = node.next;
    }
    let result = "";
    while (list.length) {
        result += list.pop();
        if (list.length) {
            result += " -> ";
        }
    }
    return result;
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
