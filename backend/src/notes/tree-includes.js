const treeIncludes = (root, target) => {
    // Using breadth first algorithm
    if (root === null) return false;
    const queue = [ root ];
    while (queue.length > 0) {
        const current = queue.shift(); // remove first value
        console.log(current.val);
        if (current.val === target) return true;

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return false;
}

const treeIncludesRecursion = (root, target) => {
    if (root === null) return false;
    if (root.val === target) return true;
    return treeIncludesRecursion(root.left, target) || treeIncludesRecursion(root.right, target);
};