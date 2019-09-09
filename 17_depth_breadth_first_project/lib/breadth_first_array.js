function breadthFirstArray(root) {
    const queue = [root];
    const bread = [];
    while (queue.length) {
        const node = queue.shift();
        bread.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return bread;
}

module.exports = {
    breadthFirstArray
};