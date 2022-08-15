// Problems could go left or right
// iterative is best approach because recursion uses stack under the hood.

const breadthFirstValues = (root) => {
    if (root === null) return [];

    const values = [];
    const queue = [ root ];

    while (queue.length > 0) {
        const current = queue.shift();
        values.push(current.val);

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return values;
}