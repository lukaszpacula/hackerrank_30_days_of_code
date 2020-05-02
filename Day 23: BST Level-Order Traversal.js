var queue = [root];
while(queue.length) {
    var treeNode = queue.shift();
    process.stdout.write(treeNode.data + ' ');
    if(treeNode.left) {
        queue.push(treeNode.left);
    }
    if(treeNode.right) {
        queue.push(treeNode.right);
    }
}
