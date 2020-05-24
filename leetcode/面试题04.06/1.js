let tree = {
    val: 10,
    left: {
        val: 5,
        left: {
            val: 15
        },
        right: {
            val: 6,
            left: {
                val:20
            }
        }
    }
}
var inorderSuccessor = function (root, p) {
    function midOrder(node) {
        if (!node) {
            return;
        }
        midOrder(node.left);

        if(findCur == true && ans == null) {
            ans = node;
            return;    
        }
        if(node == p) {
            findCur = true;
        }
        midOrder(node.right);

    }
    let ans = null;
    let findCur = false;
    midOrder(root);
    return ans;
};
console.log(inorderSuccessor(tree, tree))