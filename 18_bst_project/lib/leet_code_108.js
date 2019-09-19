// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
    if (!nums.length) return null;

    const middle = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[middle]);

    root.left = sortedArrayToBST(nums.slice(0, middle));
    root.right = sortedArrayToBST(nums.slice(middle + 1));

    return root;
}