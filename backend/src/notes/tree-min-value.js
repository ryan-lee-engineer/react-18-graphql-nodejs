const treeMinValueIterativeDepth = (root) => {
    let smallest = Infinity;
    const stack = [ root ];
    while (stack.length > 0) {
        const current = stack.pop();
        if (current.val < smallest) smallest = current.val;

        if (current.left !== null) stack.push(current.left);
        if (current.right !== null) stack.push(current.right);
    }
    return smallest;
}


const treeMinValueIterativeBreadth = (root) => {
    let smallest = Infinity;
    const queue = [ root ];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val < smallest) smallest = current.val;

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return smallest;
}

const treeMinValueRecursion = (root) => {
    if (root === null) return Infinity;
    const leftMin = treeMinValueRecursion(root.left);
    const rightMin = treeMinValueRecursion(root.right);
    return Math.min(root.val, leftMin, rightMin);
}
