/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let paths = [];
    function helper(node, path) {
        if(node) {
            path += node.val.toString();
            if(!node.left && !node.right) {
                paths.push(path);
            } else {
                helper(node.left, path + "->")
                helper(node.right, path + "->")
            }
        }
    }
    helper(root, "");
    return paths;
};