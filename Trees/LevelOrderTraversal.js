function level(node){
    const queue = []
    const result = []
    queue.push(node)
    while(queue.length){
        const levelSize = queue.length
        const level= []
        for(let i = 0 ; i < levelSize ; i++){
            const n = queue.shift() // -> can be O(N)
            level.push(n)
            if(n.left) queue.push(n.left)
            if(n.right) queue.push(n.right)
        }
        result.push(level)
    }
}