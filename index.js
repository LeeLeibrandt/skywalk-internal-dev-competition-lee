// Create game number variable
const sudokuGameNumbers = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,8]
];

// Valid numbers
const validNumbers = [1,2,3,4,5,6,7,8,9];



function roundOne() {
    let x = 0;
    let result = [];

    while (x < sudokuGameNumbers.length) {
        result.push(sudokuGameNumbers[x][0])
        x++;
    }

    if (result.length !== new Set(result).size) {
        console.log('Round 1 = False');
    } else {
        console.log('Round 1 = True');
    }
}
roundOne();


function roundTwo() {
    let x = 0;
    let result = [];

    while (x < sudokuGameNumbers.length) {
        result.push(sudokuGameNumbers[x].length - 1)
        x++;
    }

    if (result.length !== new Set(result).size) {
        console.log('Round 2 = False');
    } else {
        console.log('Round 2 = True');
    }
}
roundTwo();



function roundThree() {
    let x = 0;
    let result = [];

    while (x < sudokuGameNumbers.length) {
        if (sudokuGameNumbers[x].length > 9) {
            result.push('Invalid');
        } else {
            result.push('Valid')
        }
        x++;
    }
    if (result.includes('Invalid')) {
        console.log('Round 3 = Invalid');
    } else {
        console.log('Round 3 = Valid');
    }
}

roundThree();

