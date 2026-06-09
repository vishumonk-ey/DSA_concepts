// for preorder - root left right --> we are using the root and then pushing the right into the stack and then going to the left .
// for inorder -> left root right --> same issue
// for postOrder --> left right root -> access to root is present till last , we can handle preorder,inorder and postorder all in postorder implementation by keeping in mind when is left processed , when is root processed and wheen in right processed
