function helper(arr1, resultArray){
    let tempArray = [];
    let tempArray2 = [];
    let missingValue;
    for(let i = 0; i < arr1.length; i++){
        if(!resultArray.includes(arr1[i])){
            tempArray.push(arr1[i]);
        }
    }

    resultArray = resultArray.concat(tempArray2);

    return resultArray;
}

function relativeSortArray(arr1, arr2){
    let answer;
    let resultArray = [];
    for(let i = 0; i < arr2.length; i++){
        for(let k = 0; k < arr1.length; k++){
            if(arr2[i] === arr1[k]){
                resultArray.push(arr1[k]);
            }
        }
    }

    resultArray = helper(arr1, resultArray);

    return resultArray;
}

console.log(relativeSortArray([26,21,11,20,50,34,1,18], [21,11,26,20]));