/*
K = numberOfBlocks
M = maxNumber
A = array
*/

function solution(numberOfBlocks, maxNumber, array) {

    let begin = array.reduce((a, b) => (a + b), 0);  // Calculate total sum of A
    console.log("total sum of A: ", begin);
    begin = Math.ceil(begin / numberOfBlocks);       // Calculate the mean of each theoretical block
    console.log('Math.ceil(begin / numberOfBlocks): ', begin);
    begin = Math.max(begin, Math.max(...array));     // Set begin to the highest number in array if > than the mean
    console.log('Math.max(begin, Math.max(...array)): ', begin);
    
    // In short: begin is now the smallest possible block sum


    // Calculate largest possible block sum
    let end = begin + maxNumber + 1;
    console.log("end: ", end);
    var result = 0;

    while (begin <= end) {

        // Calculate the midpoint, which is our result guess
        const midpoint = Math.floor((begin + end) / 2);
        console.log("midpoint: ", midpoint);
        
        let currentBlockSum = 0;
        let block = 1;

        for (let number of array) {
            currentBlockSum += number;
            console.log("currentBlockSum: ", currentBlockSum);
            
            // If currentBlockSum > midpoint means that we are
            // in a different block...
            if (currentBlockSum > midpoint) {
                console.log("currentBlockSum > midpoint");
                ++block;
                console.log("block: ", block);
                
                // ...so we reset sum with the current number
                currentBlockSum = number;
                console.log("currentBlockSum: ", currentBlockSum);
                
                // but if we are out of blocks, our guess (midpoint) is incorrect
                // and we will have to adjust it
                if (block > numberOfBlocks) {
                    console.log("block > numberOfBlocks before break");
                    console.log("block: ", block);
                    console.log("break"); 
                    break;
                }
            }
        }


        // If we are out of blocks, it means that our guess for midpoint is too small.
        if (block > numberOfBlocks) {
            console.log("block > numberOfBlocks before begin");
            begin = midpoint + 1;
            console.log("begin: ", begin);
        }
        // Else, it's too big.
        else {
            console.log("block <= numberOfBlocks");
            result = midpoint;
            console.log("result: ", result);
            end = midpoint - 1;
            console.log("end: ", end);
        }
    }

    console.log("result: ", result);
    return result;
}
solution(3, 5, [2, 1, 5, 1, 2, 2, 2]);

// For example, given K = 3, M = 5 and array A such that:

//   A[0] = 2
//   A[1] = 1
//   A[2] = 5
//   A[3] = 1
//   A[4] = 2
//   A[5] = 2
//   A[6] = 2

// [2, 1, 5, 1, 2, 2, 2]
// [2, 1, 5][1, 2, 2, 2]
// [2, 1][5, 1][2,2,2]