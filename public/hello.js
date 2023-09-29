const matrixA =[
    [1, 3],
    [1, 0],
    [1, 2]
];

const matrixB = [
    [0, 0],
    [7, 5],
    [2, 1]
];

const matrixSum = (matrixA, matrixB) =>{
    const result = [];
    for (let i = 0; i <= matrixA.length; i++){
        const row = [];
        for(let j = 0; j <= matrixA[i].length; j++){
            row.push(matrixA[i][j] + matrixB[i][j])
        }
        result.push(row);
    }
    return result;
};

const matrixResult = matrixSum(matrixA, matrixB);
console.log(matrixResult);



