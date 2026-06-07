function preorder(node){
    if( node == null){
        return 
    }
    print(node.data)
    preorder(node.left)
    preorder(node.right)
    
}
/*
    preorder - root left right
    Time complexity -  O(N) , why assumed constant tc for a individual function call ? because its a recursive function and lets say T(1) = O(1) + T(2) + T(3) , when T(2) = O(1) + T(4) + T(5) .. each node is contributing O(1) and this will go on till the number of nodes + number of null nodes . 
    ---> har ek node O(1) contribute kr rha hai .
    Space Complexity - 


*/