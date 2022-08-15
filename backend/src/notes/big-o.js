const givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


/*
    T = 0(1) + 0(1) = c_1 + c_2
    = c_3 = c_3 * 1 = 0(1)
    O(1) + O(1) + O(1)
*/

const constantBigO = (givenArray) => {
    let total = 0;
    return total;
};

/*
    T_2 = O(1) + nxO(1) + O(1)
    = c_4 + n * c_5 = O(n)
*/

const linearBigO = (givenArray) => {
    let total = 0;
    givenArray.foreach(i => {
        total += i;
    });
    return total;
};


/*
    T_3 = O(1) + n^2 XO(1) + O(1)
    = c_6 + n^2 * c_7 = O(n^2)
*/
const array_2d = [[1, 4, 3], [3, 1, 9], [0, 5, 2]];


/*
    T_4 = 2n^2 * c + ... = 2n^2 * c + c_2n + c_3
    = (2c) * n^2 + c_2n + c_3 = O(n^2)
*/
const array_2d_4row = [[1, 4, 3, 1], [3, 1, 9, 4], [0, 5, 2, 6], [4, 5, 7, 8]];

const find_sum_2d = (array_2d) => {
    let total = 0;
    array_2d.foreach((x) => {
        x.foreach((y) => {
            total += y;
        });
    });
    return total;
};


// O(1) + O(n) * O(1)
// Actual answer based on worst case scenario = O(n)
function search(value, list) {
    // O(1)
    let found = false;
    let position = -1;
    let index = 0;

    // O(n)
    while (!found && index < list.length) {
        
        // O(1)
        if (list[index] == value) {
            found = true;
            position = index;
        } else {
            index += 1;
        }
        return position;
    }
}

