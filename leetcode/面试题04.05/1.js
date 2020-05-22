// 合法二叉搜索树
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
var isValidBST = function(root) {
    let isv = true;
    function helper(node) {
        if(node) {
            
            let left = helper(node.left);
            let right = helper(node.right);
            if(right <= node.val || left >= node.val) {
                isv = false;
                return;
            }
            return node.val
        }
    }
    helper(root);
    return isv;
};
console.log(isValidBST(tree))