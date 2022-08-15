function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'test';

    return element;
}
  
document.body.appendChild(component());


// Depth first traversal

// a, b, d, e, c, f
/*
        a
       / \
      b   c
     / \   \
    d   e   f
*/