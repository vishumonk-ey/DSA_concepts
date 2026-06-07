/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) { // just stored the root in the stack as we can get the access of right child thorugh the root only.
    let stack = []
    let temp = root
    let result = []
    if( temp === null){
        return result
    }
    while(stack.length || temp){
        if(temp){
            stack.push(temp)
            temp = temp.left
        }else{
            temp = stack.pop()
            result.push(temp.val)
            temp = temp.right
        }
    }
    return result
}; 
-----------------------------------

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) { // only stored the right child as its access was being lost or else could be done simply by inserting everything in the stack(2nd method)
    // if(!root){
    //     return []
    // }
    // let stack = []
    // let temp = null
    // stack.push(root)
    // let result = []
    // while( stack.length || temp){
    //     if(temp == null){
    //         temp = stack.pop()
    //     }
    //     result.push(temp.val)
    //     if(temp.right){
    //         stack.push(temp.right)
    //     }
    //     temp = temp.left
    // }
    // return result
    let stack = []
    let result = []
    stack.push(root)
    if( !root ) return []
    while(stack.length){
        const temp = stack.pop()
        result.push(temp.val)
        if(temp.right){
            stack.push(temp.right)
        }
        if(temp.left){
            stack.push(temp.left)
        }
    }
    return result
};





