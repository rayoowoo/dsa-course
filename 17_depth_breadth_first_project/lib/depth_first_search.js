function depthFirstSearch(root, targetVal) {
    if (!root) return null;
    if (root.val === targetVal) return root;

    const left = depthFirstSearch(root.left, targetVal)
    if (!left) {
        return depthFirstSearch(root.right, targetVal);
    } else {
        return left;
    }
}


module.exports = {
    depthFirstSearch
};