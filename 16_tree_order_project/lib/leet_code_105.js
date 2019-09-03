// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    if (!preorder.length) return null;
    const root = preorder[0];

    const rootInorderIdx = inorder.indexOf(root);

    const inLeft = inorder.slice(0, rootInorderIdx);
    const inRight = inorder.slice(rootInorderIdx + 1);

    let preLeft = [];
    let preRight = [];

    if (inLeft.length) {
        let leftEndPreIdx = 1;
        while (inLeft.includes(preorder[leftEndPreIdx])) {
            leftEndPreIdx++;
        }
        preLeft = preorder.slice(1, leftEndPreIdx);
        if (inRight.length) {
            preRight = preorder.slice(leftEndPreIdx);
        }
    } else {
        preRight = preorder.slice(1);
    }

    const rootNode = new TreeNode(root);
    rootNode.left = buildTree(preLeft, inLeft);
    rootNode.right = buildTree(preRight, inRight);

    return rootNode; 
}
