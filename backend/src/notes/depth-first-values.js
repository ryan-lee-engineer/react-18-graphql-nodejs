// Depth first uses something similar to stack, which is another type of algorithm

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValuesIterative = (root) => {
    if (root === null) return [];

    const result = [];
    const stack = [ root ]; // [ null ]
    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);

        if (current.left) stack.push(current.right);
        if (current.right) stack.push(current.left);
    }
    return result;
};

const depthFirstValuesRecursive = (root) => {
    if (root === null) return [];

    const leftValues = depthFirstValuesRecursive(root.left);
    const rightValues = depthFirstValuesRecursive(root.right);
    return [ root.val, ...leftValues, ...rightValues ];
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

depthFirstValues(a);